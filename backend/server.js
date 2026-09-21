const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const path = require("path");

require("dotenv").config();

const pool = require("./db");

const app = express();


// =====================================================
// CHECK JWT SECRET
// =====================================================

if (!process.env.JWT_SECRET) {

    console.error(
        "❌ JWT_SECRET is missing from the .env file."
    );

    process.exit(1);

}


// =====================================================
// MIDDLEWARE
// =====================================================

app.use(cors());

app.use(express.json());

app.use(cookieParser());

app.use(
    express.static(
        path.join(__dirname, "..")
    )
);


// =====================================================
// AUTHENTICATED USER MIDDLEWARE
// =====================================================

async function requireAuth(req, res, next) {

    try {

        const token =
            req.cookies.auAppFinderToken;


        if (!token) {

            return res.status(401).json({
                success: false,
                message: "Authentication required."
            });

        }


        const decoded =
            jwt.verify(
                token,
                process.env.JWT_SECRET
            );


        const userId =
            Number(decoded.userId);


        if (!Number.isInteger(userId)) {

            return res.status(401).json({
                success: false,
                message:
                    "Invalid authentication token."
            });

        }


        const [users] =
            await pool.query(
                `
                SELECT
                    id,
                    name,
                    email,
                    role
                FROM users
                WHERE id = ?
                `,
                [userId]
            );


        if (users.length === 0) {

            return res.status(401).json({
                success: false,
                message:
                    "User account not found."
            });

        }


        const user =
            users[0];


        req.user = {

            id: user.id,

            name: user.name,

            email: user.email,

            role: user.role

        };


        next();


    } catch (error) {

        console.error(
            "Authentication error:",
            error
        );


        return res.status(401).json({
            success: false,
            message:
                "Invalid or expired login."
        });

    }

}


// =====================================================
// ADMIN AUTHENTICATION MIDDLEWARE
// =====================================================

async function requireAdmin(req, res, next) {

    try {

        const token =
            req.cookies.auAppFinderToken;


        if (!token) {

            return res.status(401).json({
                success: false,
                message:
                    "Authentication required."
            });

        }


        const decoded =
            jwt.verify(
                token,
                process.env.JWT_SECRET
            );


        const userId =
            Number(decoded.userId);


        if (!Number.isInteger(userId)) {

            return res.status(401).json({
                success: false,
                message:
                    "Invalid authentication token."
            });

        }


        const [users] =
            await pool.query(
                `
                SELECT
                    id,
                    name,
                    email,
                    role
                FROM users
                WHERE id = ?
                `,
                [userId]
            );


        if (users.length === 0) {

            return res.status(401).json({
                success: false,
                message:
                    "User account not found."
            });

        }


        const user =
            users[0];


        if (user.role !== "admin") {

            return res.status(403).json({
                success: false,
                message:
                    "Admin access required."
            });

        }


        req.user = {

            id: user.id,

            name: user.name,

            email: user.email,

            role: user.role

        };


        next();


    } catch (error) {

        console.error(
            "Admin authentication error:",
            error
        );


        return res.status(401).json({
            success: false,
            message:
                "Invalid or expired login."
        });

    }

}


// =====================================================
// HOME
// =====================================================

app.get("/", (req, res) => {

    res.send(
        "AU App Finder Backend is running!"
    );

});


// =====================================================
// GET AI TOOLS
// =====================================================

app.get(
    "/api/tools",
    async (req, res) => {

        try {

            const [rows] =
                await pool.query(
                    `
                    SELECT
                        ai_tools.id AS db_id,
                        ai_tools.name,
                        categories.name AS category,
                        ai_tools.rating,
                        ai_tools.price,
                        ai_tools.icon,
                        ai_tools.description,
                        ai_tools.website_url,

                        GROUP_CONCAT(
                            DISTINCT tool_keywords.keyword
                            ORDER BY tool_keywords.keyword
                            SEPARATOR ', '
                        ) AS keywords,

                        GROUP_CONCAT(
                            DISTINCT tool_tasks.task
                            ORDER BY tool_tasks.task
                            SEPARATOR ', '
                        ) AS tasks

                    FROM ai_tools

                    JOIN categories
                        ON ai_tools.category_id =
                           categories.id

                    LEFT JOIN tool_keywords
                        ON ai_tools.id =
                           tool_keywords.tool_id

                    LEFT JOIN tool_tasks
                        ON ai_tools.id =
                           tool_tasks.tool_id

                    GROUP BY
                        ai_tools.id,
                        ai_tools.name,
                        categories.name,
                        ai_tools.rating,
                        ai_tools.price,
                        ai_tools.icon,
                        ai_tools.description,
                        ai_tools.website_url

                    ORDER BY ai_tools.id
                    `
                );


            const tools =
                rows.map(tool => ({

                    id:
                        Number(tool.db_id),

                    name:
                        tool.name,

                    category:
                        tool.category,

                    rating:
                        Number(tool.rating),

                    icon:
                        tool.icon,

                    price:
                        tool.price,

                    url:
                        tool.website_url,

                    keywords:
                        tool.keywords
                            ? tool.keywords.split(", ")
                            : [],

                    tasks:
                        tool.tasks
                            ? tool.tasks.split(", ")
                            : [],

                    description:
                        tool.description

                }));


            res.json(tools);


        } catch (error) {

            console.error(
                "Tools error:",
                error
            );


            res.status(500).json({

                error:
                    "Failed to fetch AI tools"

            });

        }

    }
);


// =====================================================
// GET CATEGORIES
// =====================================================

app.get(
    "/api/categories",
    async (req, res) => {

        try {

            const [rows] =
                await pool.query(
                    `
                    SELECT
                        id,
                        name
                    FROM categories
                    ORDER BY name
                    `
                );


            res.json(rows);


        } catch (error) {

            console.error(
                "Categories error:",
                error
            );


            res.status(500).json({

                error:
                    "Failed to fetch categories"

            });

        }

    }
);


// =====================================================
// USER SIGNUP
// =====================================================

app.post(
    "/api/signup",
    async (req, res) => {

        try {

            const {
                name,
                email,
                password
            } = req.body;


            if (
                !name ||
                !email ||
                !password
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "All fields are required."

                });

            }


            const [existingUsers] =
                await pool.query(
                    `
                    SELECT id
                    FROM users
                    WHERE email = ?
                    `,
                    [email]
                );


            if (
                existingUsers.length > 0
            ) {

                return res.status(409).json({

                    success: false,

                    message:
                        "An account with this email already exists."

                });

            }


            const hashedPassword =
                await bcrypt.hash(
                    password,
                    10
                );


            await pool.query(
                `
                INSERT INTO users
                    (
                        name,
                        email,
                        password
                    )
                VALUES
                    (?, ?, ?)
                `,
                [
                    name,
                    email,
                    hashedPassword
                ]
            );


            res.status(201).json({

                success: true,

                message:
                    "Account created successfully."

            });


        } catch (error) {

            console.error(
                "Signup error:",
                error
            );


            res.status(500).json({

                success: false,

                message:
                    "Failed to create account."

            });

        }

    }
);


// =====================================================
// USER SIGNIN
// =====================================================

app.post(
    "/api/signin",
    async (req, res) => {

        try {

            const {
                email,
                password
            } = req.body;


            if (
                !email ||
                !password
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Email and password are required."

                });

            }


            const [users] =
                await pool.query(
                    `
                    SELECT
                        id,
                        name,
                        email,
                        password,
                        role
                    FROM users
                    WHERE email = ?
                    `,
                    [email]
                );


            if (
                users.length === 0
            ) {

                return res.status(401).json({

                    success: false,

                    message:
                        "Invalid email or password."

                });

            }


            const user =
                users[0];


            const passwordMatch =
                await bcrypt.compare(
                    password,
                    user.password
                );


            if (!passwordMatch) {

                return res.status(401).json({

                    success: false,

                    message:
                        "Invalid email or password."

                });

            }


            // CREATE JWT

            const token =
                jwt.sign(

                    {
                        userId:
                            user.id
                    },

                    process.env.JWT_SECRET,

                    {
                        expiresIn:
                            process.env.JWT_EXPIRES_IN ||
                            "1d"
                    }

                );


            // STORE JWT IN HTTP-ONLY COOKIE

            res.cookie(
                "auAppFinderToken",
                token,
                {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    sameSite: "lax",
                    maxAge:
                        24 *
                        60 *
                        60 *
                        1000
                }
            );


            res.json({

                success: true,

                message:
                    "Sign in successful!",

                user: {

                    id:
                        user.id,

                    name:
                        user.name,

                    email:
                        user.email,

                    role:
                        user.role

                }

            });


        } catch (error) {

            console.error(
                "Signin error:",
                error
            );


            res.status(500).json({

                success: false,

                message:
                    "Failed to sign in."

            });

        }

    }
);


// =====================================================
// FAVORITES
// =====================================================


// GET CURRENT USER FAVORITES

app.get(
    "/api/favorites",
    requireAuth,
    async (req, res) => {

        try {

            const [rows] =
                await pool.query(
                    `
                    SELECT
                        favorites.id,
                        favorites.user_id,
                        favorites.tool_id,

                        ai_tools.name,
                        ai_tools.rating,
                        ai_tools.price,
                        ai_tools.icon,
                        ai_tools.description,
                        ai_tools.website_url,

                        categories.name AS category

                    FROM favorites

                    JOIN ai_tools
                        ON favorites.tool_id =
                           ai_tools.id

                    JOIN categories
                        ON ai_tools.category_id =
                           categories.id

                    WHERE favorites.user_id = ?

                    ORDER BY
                        favorites.created_at DESC
                    `,
                    [req.user.id]
                );


            res.json(rows);


        } catch (error) {

            console.error(
                "Get favorites error:",
                error
            );


            res.status(500).json({

                success: false,

                message:
                    "Failed to fetch favorites."

            });

        }

    }
);


// ADD FAVORITE

app.post(
    "/api/favorites",
    requireAuth,
    async (req, res) => {

        try {

            const toolId =
                Number(
                    req.body.toolId
                );


            if (
                !Number.isInteger(toolId)
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid tool ID."

                });

            }


            const [tools] =
                await pool.query(
                    `
                    SELECT id
                    FROM ai_tools
                    WHERE id = ?
                    `,
                    [toolId]
                );


            if (
                tools.length === 0
            ) {

                return res.status(404).json({

                    success: false,

                    message:
                        "AI tool not found."

                });

            }


            await pool.query(
                `
                INSERT INTO favorites
                (
                    user_id,
                    tool_id
                )
                VALUES
                (
                    ?,
                    ?
                )
                `,
                [
                    req.user.id,
                    toolId
                ]
            );


            res.status(201).json({

                success: true,

                message:
                    "Tool added to favorites."

            });


        } catch (error) {

            console.error(
                "Add favorite error:",
                error
            );


            if (
                error.code ===
                "ER_DUP_ENTRY"
            ) {

                return res.status(409).json({

                    success: false,

                    message:
                        "Tool is already in favorites."

                });

            }


            res.status(500).json({

                success: false,

                message:
                    "Failed to add favorite."

            });

        }

    }
);


// REMOVE FAVORITE

app.delete(
    "/api/favorites/:toolId",
    requireAuth,
    async (req, res) => {

        try {

            const toolId =
                Number(
                    req.params.toolId
                );


            if (
                !Number.isInteger(toolId)
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid tool ID."

                });

            }


            await pool.query(
                `
                DELETE FROM favorites

                WHERE user_id = ?

                AND tool_id = ?
                `,
                [
                    req.user.id,
                    toolId
                ]
            );


            res.json({

                success: true,

                message:
                    "Tool removed from favorites."

            });


        } catch (error) {

            console.error(
                "Remove favorite error:",
                error
            );


            res.status(500).json({

                success: false,

                message:
                    "Failed to remove favorite."

            });

        }

    }
);


// =====================================================
// COMPARISONS
// =====================================================


// GET CURRENT USER COMPARISONS

app.get(
    "/api/comparisons",
    requireAuth,
    async (req, res) => {

        try {

            const [rows] =
                await pool.query(
                    `
                    SELECT
                        comparisons.id,
                        comparisons.user_id,
                        comparisons.tool_id,

                        ai_tools.name,
                        ai_tools.rating,
                        ai_tools.price,
                        ai_tools.icon,
                        ai_tools.description,
                        ai_tools.website_url,

                        categories.name AS category

                    FROM comparisons

                    JOIN ai_tools
                        ON comparisons.tool_id =
                           ai_tools.id

                    JOIN categories
                        ON ai_tools.category_id =
                           categories.id

                    WHERE comparisons.user_id = ?

                    ORDER BY
                        comparisons.created_at ASC
                    `,
                    [req.user.id]
                );


            res.json(rows);


        } catch (error) {

            console.error(
                "Get comparisons error:",
                error
            );


            res.status(500).json({

                success: false,

                message:
                    "Failed to fetch comparisons."

            });

        }

    }
);


// ADD TO COMPARISON

app.post(
    "/api/comparisons",
    requireAuth,
    async (req, res) => {

        try {

            const toolId =
                Number(
                    req.body.toolId
                );


            if (
                !Number.isInteger(toolId)
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid tool ID."

                });

            }


            const [tools] =
                await pool.query(
                    `
                    SELECT id
                    FROM ai_tools
                    WHERE id = ?
                    `,
                    [toolId]
                );


            if (
                tools.length === 0
            ) {

                return res.status(404).json({

                    success: false,

                    message:
                        "AI tool not found."

                });

            }


            // CHECK DUPLICATE

            const [existing] =
                await pool.query(
                    `
                    SELECT id
                    FROM comparisons
                    WHERE user_id = ?
                    AND tool_id = ?
                    `,
                    [
                        req.user.id,
                        toolId
                    ]
                );


            if (
                existing.length > 0
            ) {

                return res.status(409).json({

                    success: false,

                    message:
                        "Tool is already in comparison."

                });

            }


            // MAX 3 TOOLS

            const [countRows] =
                await pool.query(
                    `
                    SELECT
                        COUNT(*) AS total
                    FROM comparisons
                    WHERE user_id = ?
                    `,
                    [req.user.id]
                );


            if (
                Number(
                    countRows[0].total
                ) >= 3
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "You can compare up to 3 AI tools."

                });

            }


            await pool.query(
                `
                INSERT INTO comparisons
                (
                    user_id,
                    tool_id
                )
                VALUES
                (
                    ?,
                    ?
                )
                `,
                [
                    req.user.id,
                    toolId
                ]
            );


            res.status(201).json({

                success: true,

                message:
                    "Tool added to comparison."

            });


        } catch (error) {

            console.error(
                "Add comparison error:",
                error
            );


            if (
                error.code ===
                "ER_DUP_ENTRY"
            ) {

                return res.status(409).json({

                    success: false,

                    message:
                        "Tool is already in comparison."

                });

            }


            res.status(500).json({

                success: false,

                message:
                    "Failed to add tool to comparison."

            });

        }

    }
);


// REMOVE FROM COMPARISON

app.delete(
    "/api/comparisons/:toolId",
    requireAuth,
    async (req, res) => {

        try {

            const toolId =
                Number(
                    req.params.toolId
                );


            if (
                !Number.isInteger(toolId)
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid tool ID."

                });

            }


            await pool.query(
                `
                DELETE FROM comparisons

                WHERE user_id = ?

                AND tool_id = ?
                `,
                [
                    req.user.id,
                    toolId
                ]
            );


            res.json({

                success: true,

                message:
                    "Tool removed from comparison."

            });


        } catch (error) {

            console.error(
                "Remove comparison error:",
                error
            );


            res.status(500).json({

                success: false,

                message:
                    "Failed to remove tool from comparison."

            });

        }

    }
);


// CLEAR ALL COMPARISONS

app.delete(
    "/api/comparisons",
    requireAuth,
    async (req, res) => {

        try {

            await pool.query(
                `
                DELETE FROM comparisons

                WHERE user_id = ?
                `,
                [req.user.id]
            );


            res.json({

                success: true,

                message:
                    "Comparison list cleared."

            });


        } catch (error) {

            console.error(
                "Clear comparison error:",
                error
            );


            res.status(500).json({

                success: false,

                message:
                    "Failed to clear comparison list."

            });

        }

    }
);


// =====================================================
// ADMIN STATS
// =====================================================

app.get(
    "/api/admin/stats",
    requireAdmin,
    async (req, res) => {

        try {

            const [userRows] =
                await pool.query(
                    `
                    SELECT
                        COUNT(*) AS totalUsers
                    FROM users
                    `
                );


            const [toolRows] =
                await pool.query(
                    `
                    SELECT
                        COUNT(*) AS totalTools
                    FROM ai_tools
                    `
                );


            const [categoryRows] =
                await pool.query(
                    `
                    SELECT
                        COUNT(*) AS totalCategories
                    FROM categories
                    `
                );


            res.json({

                success: true,

                totalUsers:
                    userRows[0].totalUsers,

                totalTools:
                    toolRows[0].totalTools,

                totalCategories:
                    categoryRows[0].totalCategories

            });


        } catch (error) {

            console.error(
                "Admin stats error:",
                error
            );


            res.status(500).json({

                success: false,

                message:
                    "Failed to load admin statistics."

            });

        }

    }
);


// =====================================================
// GET ALL AI TOOLS FOR ADMIN
// =====================================================

app.get(
    "/api/admin/tools",
    requireAdmin,
    async (req, res) => {

        try {

            const [rows] =
                await pool.query(
                    `
                    SELECT

                        t.id,

                        t.name,

                        t.category_id,

                        c.name AS category,

                        t.rating,

                        t.icon,

                        t.price,

                        t.website_url,

                        t.description,

                        COALESCE(
                            GROUP_CONCAT(
                                DISTINCT k.keyword
                                ORDER BY k.keyword
                                SEPARATOR ', '
                            ),
                            ''
                        ) AS keywords,

                        COALESCE(
                            GROUP_CONCAT(
                                DISTINCT ta.task
                                ORDER BY ta.task
                                SEPARATOR ', '
                            ),
                            ''
                        ) AS tasks

                    FROM ai_tools t

                    LEFT JOIN categories c
                        ON t.category_id = c.id

                    LEFT JOIN tool_keywords k
                        ON t.id = k.tool_id

                    LEFT JOIN tool_tasks ta
                        ON t.id = ta.tool_id

                    GROUP BY

                        t.id,
                        t.name,
                        t.category_id,
                        c.name,
                        t.rating,
                        t.icon,
                        t.price,
                        t.website_url,
                        t.description

                    ORDER BY
                        t.id DESC
                    `
                );


            res.json({

                success: true,

                tools: rows

            });


        } catch (error) {

            console.error(
                "Admin tools error:",
                error
            );


            res.status(500).json({

                success: false,

                message:
                    "Failed to load AI tools."

            });

        }

    }
);


// =====================================================
// ADD AI TOOL
// =====================================================

app.post(
    "/api/admin/tools",
    requireAdmin,
    async (req, res) => {

        let connection;


        try {

            const {
                name,
                categoryId,
                rating,
                icon,
                price,
                websiteUrl,
                description,
                keywords,
                tasks
            } = req.body;


            if (
                !name ||
                !categoryId ||
                rating === undefined ||
                !websiteUrl ||
                !description
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Please fill all required fields."

                });

            }


            const numericRating =
                Number(rating);


            const numericCategoryId =
                Number(categoryId);


            if (
                !Number.isFinite(
                    numericRating
                ) ||
                numericRating < 0 ||
                numericRating > 5
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Rating must be between 0 and 5."

                });

            }


            if (
                !Number.isInteger(
                    numericCategoryId
                )
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid category."

                });

            }


            connection =
                await pool.getConnection();


            await connection.beginTransaction();


            // CHECK CATEGORY

            const [categories] =
                await connection.query(
                    `
                    SELECT id
                    FROM categories
                    WHERE id = ?
                    `,
                    [numericCategoryId]
                );


            if (
                categories.length === 0
            ) {

                await connection.rollback();

                return res.status(400).json({

                    success: false,

                    message:
                        "Selected category does not exist."

                });

            }


            // INSERT TOOL

            const [toolResult] =
                await connection.query(
                    `
                    INSERT INTO ai_tools
                    (
                        name,
                        category_id,
                        rating,
                        icon,
                        price,
                        website_url,
                        description
                    )
                    VALUES
                    (
                        ?,
                        ?,
                        ?,
                        ?,
                        ?,
                        ?,
                        ?
                    )
                    `,
                    [
                        name.trim(),
                        numericCategoryId,
                        numericRating,
                        icon || "🤖",
                        price || "Free",
                        websiteUrl.trim(),
                        description.trim()
                    ]
                );


            const toolId =
                toolResult.insertId;


            // INSERT KEYWORDS

            if (
                Array.isArray(keywords)
            ) {

                for (
                    const keyword
                    of keywords
                ) {

                    const cleanKeyword =
                        String(
                            keyword
                        ).trim();


                    if (
                        cleanKeyword
                    ) {

                        await connection.query(
                            `
                            INSERT INTO tool_keywords
                            (
                                tool_id,
                                keyword
                            )
                            VALUES
                            (
                                ?,
                                ?
                            )
                            `,
                            [
                                toolId,
                                cleanKeyword
                            ]
                        );

                    }

                }

            }


            // INSERT TASKS

            if (
                Array.isArray(tasks)
            ) {

                for (
                    const task
                    of tasks
                ) {

                    const cleanTask =
                        String(
                            task
                        ).trim();


                    if (
                        cleanTask
                    ) {

                        await connection.query(
                            `
                            INSERT INTO tool_tasks
                            (
                                tool_id,
                                task
                            )
                            VALUES
                            (
                                ?,
                                ?
                            )
                            `,
                            [
                                toolId,
                                cleanTask
                            ]
                        );

                    }

                }

            }


            await connection.commit();


            res.status(201).json({

                success: true,

                message:
                    "AI tool added successfully.",

                toolId:
                    toolId

            });


        } catch (error) {

            if (connection) {

                try {

                    await connection.rollback();

                } catch (rollbackError) {

                    console.error(
                        "Rollback error:",
                        rollbackError
                    );

                }

            }


            console.error(
                "Add AI tool error:",
                error
            );


            res.status(500).json({

                success: false,

                message:
                    "Failed to add AI tool."

            });


        } finally {

            if (connection) {

                connection.release();

            }

        }

    }
);


// =====================================================
// UPDATE AI TOOL
// =====================================================

app.put(
    "/api/admin/tools/:toolId",
    requireAdmin,
    async (req, res) => {

        let connection;


        try {

            const toolId =
                Number(
                    req.params.toolId
                );


            const {
                name,
                categoryId,
                rating,
                icon,
                price,
                websiteUrl,
                description,
                keywords,
                tasks
            } = req.body;


            if (
                !Number.isInteger(
                    toolId
                )
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid tool ID."

                });

            }


            if (
                !name ||
                !categoryId ||
                rating === undefined ||
                !websiteUrl ||
                !description
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Please fill all required fields."

                });

            }


            const numericCategoryId =
                Number(categoryId);


            const numericRating =
                Number(rating);


            if (
                !Number.isInteger(
                    numericCategoryId
                )
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid category."

                });

            }


            if (
                !Number.isFinite(
                    numericRating
                ) ||
                numericRating < 0 ||
                numericRating > 5
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Rating must be between 0 and 5."

                });

            }


            connection =
                await pool.getConnection();


            await connection.beginTransaction();


            // CHECK TOOL

            const [existingTool] =
                await connection.query(
                    `
                    SELECT id
                    FROM ai_tools
                    WHERE id = ?
                    `,
                    [toolId]
                );


            if (
                existingTool.length === 0
            ) {

                await connection.rollback();

                return res.status(404).json({

                    success: false,

                    message:
                        "AI tool not found."

                });

            }


            // CHECK CATEGORY

            const [categories] =
                await connection.query(
                    `
                    SELECT id
                    FROM categories
                    WHERE id = ?
                    `,
                    [numericCategoryId]
                );


            if (
                categories.length === 0
            ) {

                await connection.rollback();

                return res.status(400).json({

                    success: false,

                    message:
                        "Selected category does not exist."

                });

            }


            // UPDATE MAIN TOOL

            await connection.query(
                `
                UPDATE ai_tools

                SET
                    name = ?,
                    category_id = ?,
                    rating = ?,
                    icon = ?,
                    price = ?,
                    website_url = ?,
                    description = ?

                WHERE id = ?
                `,
                [
                    name.trim(),
                    numericCategoryId,
                    numericRating,
                    icon || "🤖",
                    price || "Free",
                    websiteUrl.trim(),
                    description.trim(),
                    toolId
                ]
            );


            // DELETE OLD KEYWORDS

            await connection.query(
                `
                DELETE FROM tool_keywords
                WHERE tool_id = ?
                `,
                [toolId]
            );


            // ADD NEW KEYWORDS

            if (
                Array.isArray(keywords)
            ) {

                for (
                    const keyword
                    of keywords
                ) {

                    const cleanKeyword =
                        String(
                            keyword
                        ).trim();


                    if (
                        cleanKeyword
                    ) {

                        await connection.query(
                            `
                            INSERT INTO tool_keywords
                            (
                                tool_id,
                                keyword
                            )
                            VALUES
                            (
                                ?,
                                ?
                            )
                            `,
                            [
                                toolId,
                                cleanKeyword
                            ]
                        );

                    }

                }

            }


            // DELETE OLD TASKS

            await connection.query(
                `
                DELETE FROM tool_tasks
                WHERE tool_id = ?
                `,
                [toolId]
            );


            // ADD NEW TASKS

            if (
                Array.isArray(tasks)
            ) {

                for (
                    const task
                    of tasks
                ) {

                    const cleanTask =
                        String(
                            task
                        ).trim();


                    if (
                        cleanTask
                    ) {

                        await connection.query(
                            `
                            INSERT INTO tool_tasks
                            (
                                tool_id,
                                task
                            )
                            VALUES
                            (
                                ?,
                                ?
                            )
                            `,
                            [
                                toolId,
                                cleanTask
                            ]
                        );

                    }

                }

            }


            await connection.commit();


            res.json({

                success: true,

                message:
                    "AI tool updated successfully."

            });


        } catch (error) {

            if (connection) {

                try {

                    await connection.rollback();

                } catch (rollbackError) {

                    console.error(
                        "Rollback error:",
                        rollbackError
                    );

                }

            }


            console.error(
                "Update AI tool error:",
                error
            );


            res.status(500).json({

                success: false,

                message:
                    "Failed to update AI tool."

            });


        } finally {

            if (connection) {

                connection.release();

            }

        }

    }
);


// =====================================================
// DELETE AI TOOL
// =====================================================

app.delete(
    "/api/admin/tools/:toolId",
    requireAdmin,
    async (req, res) => {

        let connection;


        try {

            const toolId =
                Number(
                    req.params.toolId
                );


            if (
                !Number.isInteger(
                    toolId
                )
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid tool ID."

                });

            }


            connection =
                await pool.getConnection();


            await connection.beginTransaction();


            // DELETE KEYWORDS

            await connection.query(
                `
                DELETE FROM tool_keywords
                WHERE tool_id = ?
                `,
                [toolId]
            );


            // DELETE TASKS

            await connection.query(
                `
                DELETE FROM tool_tasks
                WHERE tool_id = ?
                `,
                [toolId]
            );


            // DELETE TOOL

            const [result] =
                await connection.query(
                    `
                    DELETE FROM ai_tools
                    WHERE id = ?
                    `,
                    [toolId]
                );


            if (
                result.affectedRows === 0
            ) {

                await connection.rollback();

                return res.status(404).json({

                    success: false,

                    message:
                        "AI tool not found."

                });

            }


            await connection.commit();


            res.json({

                success: true,

                message:
                    "AI tool deleted successfully."

            });


        } catch (error) {

            if (connection) {

                try {

                    await connection.rollback();

                } catch (rollbackError) {

                    console.error(
                        "Rollback error:",
                        rollbackError
                    );

                }

            }


            console.error(
                "Delete AI tool error:",
                error
            );


            res.status(500).json({

                success: false,

                message:
                    "Failed to delete AI tool."

            });


        } finally {

            if (connection) {

                connection.release();

            }

        }

    }
);


// =====================================================
// LOGOUT
// =====================================================

app.post(
    "/api/logout",
    (req, res) => {

        res.clearCookie(
            "auAppFinderToken",
            {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax"
            }
        );


        res.json({

            success: true,

            message:
                "Logged out successfully."

        });

    }
);


// =====================================================
// START SERVER
// =====================================================

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(
        `🚀 AU App Finder backend running on port ${PORT}`
    );
});