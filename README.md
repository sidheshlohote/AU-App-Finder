# AU App Finder 🤖

## Smart AI Tool Recommendation System

AU App Finder is a web-based AI tool recommendation platform that helps users discover suitable AI tools based on the task they want to perform.

Instead of simply displaying a list of AI tools, the system allows users to describe their task in natural language, such as:

- Create a professional presentation for a college project
- Edit a YouTube video
- Build a website
- Write an email
- Conduct academic research

The recommendation engine analyzes the user's request and matches it with AI tools based on keywords, categories, supported tasks, descriptions, and ratings.

---

## Features

### 🔍 Smart AI Tool Recommendation
Users can enter a task or requirement and receive recommended AI tools with match scores.

### 🏷️ Category Filtering
AI tools can be filtered by categories such as:

- Chatbot
- Design
- Video
- Coding
- Writing
- Productivity
- Music

### 🎯 Smart Filters
Users can filter tools based on:

- Category
- Price
- Rating
- Sorting preference

### ❤️ Favorites
Logged-in users can save their favorite AI tools.

### ⚖️ Compare AI Tools
Users can select AI tools and compare them.

### 👁️ View Details
Users can view detailed information about an AI tool, including:

- Description
- Category
- Rating
- Price
- Supported tasks
- Website

### 👤 User Authentication
The system provides:

- User registration
- User login
- Logout
- Secure password hashing
- JWT-based authentication

### 🛠️ Admin Panel
Administrators can:

- View AI tools
- Add AI tools
- Edit AI tools
- Delete AI tools
- Manage the AI tool database

### ☁️ Cloud Database
The application uses MySQL hosted on AWS RDS for storing project data.

---

## Technology Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js |
| Server Framework | Express.js |
| Database | MySQL |
| Cloud Database | AWS RDS |
| Authentication | JWT |
| Password Security | bcrypt |
| Version Control | Git / GitHub |

---

## Project Structure

```text
AU-App-Finder/
│
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env.example
│
├── index.html
├── signin.html
├── signup.html
├── admin.html
├── script.js
├── style.css
├── au.png
├── .gitignore
└── README.md
