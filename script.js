const aiTools = [

    {
        id: 1,
        name: "ChatGPT",
        category: "Chatbot",
        rating: 4.9,
        icon: "🤖",
        price: "Free / Paid",
        url: "https://chatgpt.com/",
        keywords: ["chatbot","assistant","writing","study","coding","research","questions","learning","content","ideas"],
        tasks: ["Answer questions","Study and learning","Write content","Brainstorm ideas","Coding help","Research"],
        description: "AI assistant for writing, learning, coding, research, brainstorming and problem solving."
    },

    {
        id: 2,
        name: "Canva AI",
        category: "Design",
        rating: 4.8,
        icon: "🎨",
        price: "Free / Paid",
        url: "https://www.canva.com/",
        keywords: ["design","poster","presentation","social media","graphics","images","logo","thumbnail","instagram"],
        tasks: ["Create designs","Create presentations","Social media posts","Create posters","Create thumbnails"],
        description: "AI-powered design platform for presentations, graphics, posters and social media content."
    },

    {
        id: 3,
        name: "Gamma",
        category: "Productivity",
        rating: 4.8,
        icon: "📊",
        price: "Free / Paid",
        url: "https://gamma.app/",
        keywords: ["presentation","slides","ppt","powerpoint","document","college project"],
        tasks: ["Create presentations","Create slides","Presentation design"],
        description: "AI tool for creating presentations, documents and visual content quickly."
    },

    {
        id: 4,
        name: "Beautiful.ai",
        category: "Design",
        rating: 4.7,
        icon: "✨",
        price: "Free / Paid",
        url: "https://www.beautiful.ai/",
        keywords: ["presentation","slides","ppt","business presentation","college presentation"],
        tasks: ["Create presentations","Business presentations","Create slides"],
        description: "AI presentation software for creating professional-looking slides."
    },

    {
        id: 5,
        name: "Pictory",
        category: "Video",
        rating: 4.7,
        icon: "🎬",
        price: "Paid",
        url: "https://pictory.ai/",
        keywords: ["video","youtube","video editing","text to video","shorts"],
        tasks: ["Create YouTube videos","Edit videos","Create short videos","Convert text to video"],
        description: "AI video creation and editing platform."
    },

    {
        id: 6,
        name: "Runway",
        category: "Video",
        rating: 4.7,
        icon: "🎥",
        price: "Free / Paid",
        url: "https://runwayml.com/",
        keywords: ["video","ai video","text to video","image to video","film","animation"],
        tasks: ["Generate AI videos","Create cinematic videos","Image to video","Text to video"],
        description: "Creative AI platform for generating and editing videos."
    },

    {
        id: 7,
        name: "CapCut",
        category: "Video",
        rating: 4.8,
        icon: "✂️",
        price: "Free / Paid",
        url: "https://www.capcut.com/",
        keywords: ["video","editing","youtube","shorts","reels","instagram","tiktok","captions"],
        tasks: ["Edit videos","Create reels","Create shorts","Add captions"],
        description: "Video editing platform with AI-powered editing, captions and effects."
    },

    {
        id: 8,
        name: "GitHub Copilot",
        category: "Coding",
        rating: 4.8,
        icon: "💻",
        price: "Paid",
        url: "https://github.com/features/copilot",
        keywords: ["coding","programming","code","developer","javascript","python","java","debug"],
        tasks: ["Write code","Code faster","Debug code","Generate code"],
        description: "AI coding assistant for developers."
    },

    {
        id: 9,
        name: "Cursor",
        category: "Coding",
        rating: 4.8,
        icon: "🖥️",
        price: "Free / Paid",
        url: "https://www.cursor.com/",
        keywords: ["coding","programming","code editor","developer","debugging","javascript","python"],
        tasks: ["Write code","Debug code","Build applications","Understand code"],
        description: "AI-powered code editor designed to help developers build software faster."
    },

    {
        id: 10,
        name: "Replit AI",
        category: "Coding",
        rating: 4.6,
        icon: "🚀",
        price: "Free / Paid",
        url: "https://replit.com/",
        keywords: ["coding","programming","website","app","javascript","python","web development"],
        tasks: ["Build websites","Build applications","Write code","Learn coding"],
        description: "AI-powered development platform for creating and deploying applications."
    },

    {
        id: 11,
        name: "Notion AI",
        category: "Productivity",
        rating: 4.7,
        icon: "📝",
        price: "Free / Paid",
        url: "https://www.notion.so/product/ai",
        keywords: ["writing","notes","productivity","summarize","documents","meeting","planning"],
        tasks: ["Take notes","Summarize documents","Write content","Meeting notes"],
        description: "AI productivity assistant for notes, documents and project management."
    },

    {
        id: 12,
        name: "Grammarly",
        category: "Writing",
        rating: 4.7,
        icon: "✍️",
        price: "Free / Paid",
        url: "https://www.grammarly.com/",
        keywords: ["writing","grammar","english","proofreading","content","email","correction"],
        tasks: ["Fix grammar","Improve writing","Write emails","Proofread content"],
        description: "AI writing assistant for grammar, clarity and tone."
    },

    {
        id: 13,
        name: "Jasper",
        category: "Writing",
        rating: 4.6,
        icon: "✍️",
        price: "Paid",
        url: "https://www.jasper.ai/",
        keywords: ["writing","marketing","content","blog","copywriting","advertising"],
        tasks: ["Write marketing content","Write blogs","Copywriting","Content creation"],
        description: "AI content platform focused on marketing and business content."
    },

    {
        id: 14,
        name: "Copy.ai",
        category: "Writing",
        rating: 4.6,
        icon: "📄",
        price: "Free / Paid",
        url: "https://www.copy.ai/",
        keywords: ["writing","copywriting","marketing","content","sales"],
        tasks: ["Write content","Marketing copy","Sales content","Copywriting"],
        description: "AI-powered platform for content and marketing copy."
    },

    {
        id: 15,
        name: "Midjourney",
        category: "Design",
        rating: 4.8,
        icon: "🖼️",
        price: "Paid",
        url: "https://www.midjourney.com/",
        keywords: ["image","art","design","ai art","creative","picture"],
        tasks: ["Generate images","Create artwork","Creative design"],
        description: "AI image generation platform for creating artistic visuals."
    },

    {
        id: 16,
        name: "Adobe Firefly",
        category: "Design",
        rating: 4.7,
        icon: "🔥",
        price: "Free / Paid",
        url: "https://firefly.adobe.com/",
        keywords: ["image","design","photoshop","creative","generative ai"],
        tasks: ["Generate images","Edit images","Creative design"],
        description: "Adobe's generative AI platform for creative work."
    },

    {
        id: 17,
        name: "Leonardo AI",
        category: "Design",
        rating: 4.7,
        icon: "🎭",
        price: "Free / Paid",
        url: "https://leonardo.ai/",
        keywords: ["image","art","design","game art","creative"],
        tasks: ["Generate images","Create artwork","Game assets"],
        description: "AI platform for generating creative images and visual assets."
    },

    {
        id: 18,
        name: "Perplexity",
        category: "Chatbot",
        rating: 4.8,
        icon: "🔎",
        price: "Free / Paid",
        url: "https://www.perplexity.ai/",
        keywords: ["research","search","questions","information","answers","web"],
        tasks: ["Research information","Answer questions","Find information"],
        description: "AI-powered answer engine for research and information discovery."
    },

    {
        id: 19,
        name: "QuillBot",
        category: "Writing",
        rating: 4.6,
        icon: "🪶",
        price: "Free / Paid",
        url: "https://quillbot.com/",
        keywords: ["writing","paraphrase","grammar","rewrite","summarize"],
        tasks: ["Paraphrase text","Rewrite content","Summarize text"],
        description: "AI writing tool for paraphrasing, rewriting and summarization."
    },

    {
        id: 20,
        name: "DeepL",
        category: "Writing",
        rating: 4.8,
        icon: "🌐",
        price: "Free / Paid",
        url: "https://www.deepl.com/translator",
        keywords: ["translation","translate","language","documents","writing"],
        tasks: ["Translate text","Translate documents","Language translation"],
        description: "AI-powered translation platform."
    },

    {
        id: 21,
        name: "Otter.ai",
        category: "Productivity",
        rating: 4.6,
        icon: "🎙️",
        price: "Free / Paid",
        url: "https://otter.ai/",
        keywords: ["meeting","transcription","audio","notes","lecture","voice"],
        tasks: ["Transcribe meetings","Take meeting notes","Transcribe lectures"],
        description: "AI meeting assistant for transcription and notes."
    },

    {
        id: 22,
        name: "Suno",
        category: "Music",
        rating: 4.7,
        icon: "🎵",
        price: "Free / Paid",
        url: "https://suno.com/",
        keywords: ["music","song","audio","sound","beat"],
        tasks: ["Create music","Generate songs","Create audio"],
        description: "AI music generation platform."
    },

    {
        id: 23,
        name: "Remove.bg",
        category: "Design",
        rating: 4.6,
        icon: "🪄",
        price: "Free / Paid",
        url: "https://www.remove.bg/",
        keywords: ["background","photo","image","editing","transparent"],
        tasks: ["Remove image background","Edit photos","Create transparent images"],
        description: "AI-powered tool for automatically removing image backgrounds."
    },

    {
        id: 24,
        name: "Google Gemini",
        category: "Chatbot",
        rating: 4.8,
        icon: "✨",
        price: "Free / Paid",
        url: "https://gemini.google.com/",
        keywords: ["chat","google","assistant","research","writing","study","coding"],
        tasks: ["Answer questions","Research information","Write content","Learn concepts"],
        description: "Google AI assistant for questions, writing, research and learning."
    },

    {
        id: 25,
        name: "Claude",
        category: "Chatbot",
        rating: 4.8,
        icon: "🧠",
        price: "Free / Paid",
        url: "https://claude.ai/",
        keywords: ["chat","writing","coding","research","documents","analysis"],
        tasks: ["Analyze documents","Write content","Coding assistance","Research"],
        description: "AI assistant for writing, analysis, coding and research."
    },

    {
        id: 26,
        name: "Microsoft Copilot",
        category: "Chatbot",
        rating: 4.7,
        icon: "🪟",
        price: "Free / Paid",
        url: "https://copilot.microsoft.com/",
        keywords: ["chat","assistant","microsoft","writing","research","office"],
        tasks: ["Answer questions","Write content","Research","Productivity"],
        description: "Microsoft AI assistant for everyday questions and productivity."
    },

    {
        id: 27,
        name: "Poe",
        category: "Chatbot",
        rating: 4.6,
        icon: "💬",
        price: "Free / Paid",
        url: "https://poe.com/",
        keywords: ["chat","ai models","assistant","bots","questions"],
        tasks: ["Chat with AI","Ask questions","Experiment with AI models"],
        description: "AI platform providing access to multiple AI assistants."
    },

    {
        id: 28,
        name: "Character.AI",
        category: "Chatbot",
        rating: 4.6,
        icon: "🎭",
        price: "Free / Paid",
        url: "https://character.ai/",
        keywords: ["chat","characters","conversation","bots"],
        tasks: ["Have conversations","Interact with AI characters","Brainstorm ideas"],
        description: "Conversational AI platform based around AI-created characters."
    },

    {
        id: 29,
        name: "Ideogram",
        category: "Design",
        rating: 4.7,
        icon: "🪄",
        price: "Free / Paid",
        url: "https://ideogram.ai/",
        keywords: ["image","text image","poster","logo","design","typography"],
        tasks: ["Generate images","Create posters","Create logos"],
        description: "AI image generator useful for designs containing text."
    },

    {
        id: 30,
        name: "FLUX",
        category: "Design",
        rating: 4.7,
        icon: "⚡",
        price: "Free / Paid",
        url: "https://blackforestlabs.ai/",
        keywords: ["image","ai image","art","photorealistic","creative"],
        tasks: ["Generate images","Create artwork","Create realistic visuals"],
        description: "AI image generation technology for detailed visuals."
    },

    {
        id: 31,
        name: "Pixlr",
        category: "Design",
        rating: 4.5,
        icon: "🖌️",
        price: "Free / Paid",
        url: "https://pixlr.com/",
        keywords: ["photo","image","editing","design","background"],
        tasks: ["Edit photos","Create graphics","Remove backgrounds"],
        description: "Online AI-assisted photo editor and design platform."
    },

    {
        id: 32,
        name: "InVideo AI",
        category: "Video",
        rating: 4.6,
        icon: "🎞️",
        price: "Free / Paid",
        url: "https://invideo.io/ai/",
        keywords: ["video","youtube","text to video","script","marketing"],
        tasks: ["Create videos from text","Create YouTube videos","Marketing videos"],
        description: "AI video creation platform for generating videos from prompts."
    },

    {
        id: 33,
        name: "Synthesia",
        category: "Video",
        rating: 4.6,
        icon: "👤",
        price: "Paid",
        url: "https://www.synthesia.io/",
        keywords: ["video","avatar","presentation","training","education"],
        tasks: ["Create avatar videos","Training videos","Educational videos"],
        description: "AI video platform for presenter and avatar-based videos."
    },

    {
        id: 34,
        name: "HeyGen",
        category: "Video",
        rating: 4.7,
        icon: "🎤",
        price: "Free / Paid",
        url: "https://www.heygen.com/",
        keywords: ["video","avatar","ai presenter","translation","voice"],
        tasks: ["Create avatar videos","Create presentations","Translate videos"],
        description: "AI video platform for avatar-led videos and presentations."
    },

    {
        id: 35,
        name: "VEED AI",
        category: "Video",
        rating: 4.6,
        icon: "🎬",
        price: "Free / Paid",
        url: "https://www.veed.io/",
        keywords: ["video","editing","subtitles","captions","social media"],
        tasks: ["Edit videos","Add subtitles","Create social media videos"],
        description: "Online AI-assisted video editing platform."
    },

    {
        id: 36,
        name: "Amazon Q Developer",
        category: "Coding",
        rating: 4.6,
        icon: "☁️",
        price: "Free / Paid",
        url: "https://aws.amazon.com/q/developer/",
        keywords: ["coding","aws","cloud","programming","developer"],
        tasks: ["Write code","AWS development","Programming assistance"],
        description: "AI assistant designed to help developers build software and work with AWS."
    },

    {
        id: 37,
        name: "Tabnine",
        category: "Coding",
        rating: 4.5,
        icon: "⌨️",
        price: "Free / Paid",
        url: "https://www.tabnine.com/",
        keywords: ["coding","programming","code completion","developer"],
        tasks: ["Complete code","Write code","Programming assistance"],
        description: "AI coding assistant for code completion and development."
    },

    {
        id: 38,
        name: "Codeium",
        category: "Coding",
        rating: 4.6,
        icon: "⚙️",
        price: "Free / Paid",
        url: "https://codeium.com/",
        keywords: ["coding","programming","developer","code completion"],
        tasks: ["Write code","Complete code","Coding assistance"],
        description: "AI-powered coding assistant for developers."
    },

    {
        id: 39,
        name: "Bolt.new",
        category: "Coding",
        rating: 4.7,
        icon: "⚡",
        price: "Free / Paid",
        url: "https://bolt.new/",
        keywords: ["coding","website","app","web development","javascript"],
        tasks: ["Build websites","Build applications","Generate code"],
        description: "AI development tool for creating web applications."
    },

    {
        id: 40,
        name: "Windsurf",
        category: "Coding",
        rating: 4.7,
        icon: "🌊",
        price: "Free / Paid",
        url: "https://windsurf.com/",
        keywords: ["coding","programming","developer","code editor"],
        tasks: ["Write code","Build applications","Code faster"],
        description: "AI-powered development environment for software developers."
    },

    {
        id: 41,
        name: "Writesonic",
        category: "Writing",
        rating: 4.5,
        icon: "🖊️",
        price: "Free / Paid",
        url: "https://writesonic.com/",
        keywords: ["writing","content","blog","marketing","seo"],
        tasks: ["Write blogs","Create content","Marketing writing"],
        description: "AI writing and content creation platform."
    },

    {
        id: 42,
        name: "Rytr",
        category: "Writing",
        rating: 4.5,
        icon: "📝",
        price: "Free / Paid",
        url: "https://rytr.me/",
        keywords: ["writing","content","blog","copywriting"],
        tasks: ["Write content","Write blogs","Copywriting"],
        description: "AI writing assistant for creating different types of content."
    },

    {
        id: 43,
        name: "Udio",
        category: "Music",
        rating: 4.6,
        icon: "🎶",
        price: "Free / Paid",
        url: "https://www.udio.com/",
        keywords: ["music","song","audio","music generation"],
        tasks: ["Create music","Generate songs","Create audio"],
        description: "AI music generation platform."
    },

    {
        id: 44,
        name: "Soundraw",
        category: "Music",
        rating: 4.5,
        icon: "🎼",
        price: "Paid",
        url: "https://soundraw.io/",
        keywords: ["music","audio","sound","background music"],
        tasks: ["Create music","Background music","Music production"],
        description: "AI music generation platform for creators."
    },

    {
        id: 45,
        name: "Motion",
        category: "Productivity",
        rating: 4.5,
        icon: "📅",
        price: "Paid",
        url: "https://www.usemotion.com/",
        keywords: ["productivity","calendar","planning","tasks","schedule"],
        tasks: ["Plan tasks","Manage schedule","Productivity"],
        description: "AI-powered productivity and scheduling platform."
    },

    {
        id: 46,
        name: "ClickUp AI",
        category: "Productivity",
        rating: 4.5,
        icon: "✅",
        price: "Free / Paid",
        url: "https://clickup.com/ai",
        keywords: ["productivity","tasks","project management","writing","team"],
        tasks: ["Manage projects","Write content","Plan tasks"],
        description: "AI productivity features integrated into project management."
    },

    {
        id: 47,
        name: "Consensus",
        category: "Chatbot",
        rating: 4.6,
        icon: "🔬",
        price: "Free / Paid",
        url: "https://consensus.app/",
        keywords: ["research","papers","science","academic","questions"],
        tasks: ["Research papers","Academic research","Find scientific information"],
        description: "AI research tool for finding and understanding scientific papers."
    },

    {
        id: 48,
        name: "Elicit",
        category: "Chatbot",
        rating: 4.6,
        icon: "📚",
        price: "Free / Paid",
        url: "https://elicit.com/",
        keywords: ["research","papers","academic","literature review"],
        tasks: ["Research papers","Literature review","Find academic information"],
        description: "AI research assistant for academic literature."
    },

    {
        id: 49,
        name: "Scite",
        category: "Chatbot",
        rating: 4.5,
        icon: "📖",
        price: "Free / Paid",
        url: "https://scite.ai/",
        keywords: ["research","papers","citations","academic","science"],
        tasks: ["Research papers","Check citations","Academic research"],
        description: "AI-powered research platform for understanding scientific literature."
    },

    {
        id: 50,
        name: "Gamma AI",
        category: "Productivity",
        rating: 4.7,
        icon: "📊",
        price: "Free / Paid",
        url: "https://gamma.app/",
        keywords: ["presentation","slides","productivity","college project"],
        tasks: ["Create presentations","Create slides","College presentations"],
        description: "AI-powered platform for creating presentations and visual documents."
    }

];


let currentResults = [...aiTools];
let currentQuery = "";
let favorites = [];

let compareList = [];


function normalize(text) {
    return String(text || "").toLowerCase().trim();
}


function escapeHTML(text) {

    return String(text ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function getToolById(id) {

    return aiTools.find(
        tool => Number(tool.id) === Number(id)
    );

}
function getRecommendationReason(tool, query) {

    const q = normalize(query);

    if (!q) {
        return "Highly rated AI tool.";
    }

    const reasons = [];

    const category =
        normalize(tool.category);

    const keywords =
        (tool.keywords || []).map(normalize);

    const tasks =
        (tool.tasks || []).map(normalize);

    
    if (q.includes(category)) {
        reasons.push(
            `It is designed for ${tool.category.toLowerCase()} tasks`
        );
    }

        const keywordMatch =
        keywords.find(keyword =>
            keyword &&
            q.includes(keyword)
        );

    if (keywordMatch) {
        reasons.push(
            `matches your request for ${keywordMatch}`
        );
    }

    
    const taskMatch =
        tasks.find(task =>
            task &&
            q.includes(task)
        );

    if (taskMatch) {
        reasons.push(
            `supports ${taskMatch.toLowerCase()}`
        );
    }

    
    if (
        q.includes("presentation") ||
        q.includes("slides") ||
        q.includes("ppt")
    ) {
        if (
            keywords.some(k =>
                k.includes("presentation") ||
                k.includes("slides") ||
                k.includes("ppt")
            )
        ) {
            reasons.push(
                "suitable for creating presentations"
            );
        }
    }

    
    if (
        q.includes("coding") ||
        q.includes("programming") ||
        q.includes("code")
    ) {
        if (category === "coding") {
            reasons.push(
                "specialized for coding and programming"
            );
        }
    }

    
    if (
        q.includes("video") ||
        q.includes("youtube") ||
        q.includes("reels")
    ) {
        if (category === "video") {
            reasons.push(
                "suitable for video creation and editing"
            );
        }
    }

    if (reasons.length === 0) {
        return "Matches your search based on its features and supported tasks.";
    }

    return [...new Set(reasons)]
        .slice(0, 2)
        .join(" and ") + ".";
}


function calculateMatch(tool, query) {

    const q = normalize(query);

    
    if (!q) {

        return Math.round(tool.rating * 20);

    }


    let score = 0;


   
    const name =
        normalize(tool.name);

    const category =
        normalize(tool.category);

    const description =
        normalize(tool.description);


    const keywords =
        (tool.keywords || [])
            .map(normalize);


    const tasks =
        (tool.tasks || [])
            .map(normalize);


   
    if (q === name) {

        score += 60;

    }
    else if (name.includes(q)) {

        score += 45;

    }


   
    if (
        q === category ||
        q.includes(category) ||
        category.includes(q)
    ) {

        score += 35;

    }


    
    keywords.forEach(keyword => {

        if (!keyword) {
            return;
        }


       

        if (q === keyword) {

            score += 30;

        }


        

        else if (q.includes(keyword)) {

            score += 25;

        }


       
        else if (keyword.includes(q)) {

            score += 20;

        }

    });


  
    tasks.forEach(task => {

        if (!task) {
            return;
        }


        if (q === task) {

            score += 35;

        }
        else if (q.includes(task)) {

            score += 30;

        }
        else if (task.includes(q)) {

            score += 25;

        }

    });


    const queryWords =
        q.split(/\s+/)
         .filter(word => word.length >= 3);


    queryWords.forEach(word => {

        if (description.includes(word)) {

            score += 5;

        }

    });


    const groups = {

        presentation: [
            "presentation",
            "presentations",
            "ppt",
            "powerpoint",
            "slides",
            "slide",
            "college presentation",
            "academic presentation",
            "professional presentation"
        ],


        coding: [
            "coding",
            "code",
            "programming",
            "developer",
            "development",
            "website",
            "web development",
            "web app",
            "application",
            "software",
            "javascript",
            "python",
            "java"
        ],


        design: [
            "design",
            "poster",
            "logo",
            "graphic",
            "graphics",
            "thumbnail",
            "social media post",
            "instagram post",
            "image",
            "images",
            "creative"
        ],


        video: [
            "video",
            "videos",
            "youtube",
            "youtube video",
            "reel",
            "reels",
            "short",
            "shorts",
            "video editing",
            "edit video",
            "animation"
        ],


        writing: [
            "writing",
            "write",
            "writer",
            "blog",
            "blogs",
            "article",
            "content",
            "copywriting",
            "email",
            "proofread",
            "grammar"
        ],


        study: [
            "study",
            "student",
            "students",
            "learning",
            "learn",
            "education",
            "college",
            "university",
            "exam",
            "notes",
            "lecture"
        ],


        research: [
            "research",
            "research paper",
            "academic",
            "academic research",
            "paper",
            "papers",
            "scientific",
            "science",
            "literature review",
            "information"
        ],


        translation: [
            "translation",
            "translate",
            "translator",
            "language",
            "languages"
        ],


        music: [
            "music",
            "song",
            "songs",
            "audio",
            "sound",
            "beat",
            "background music"
        ],


        productivity: [
            "productivity",
            "meeting",
            "meetings",
            "meeting notes",
            "notes",
            "planning",
            "plan",
            "tasks",
            "schedule",
            "organize",
            "organization"
        ],


        background: [
            "background",
            "remove background",
            "remove image background",
            "transparent background"
        ]

    };


    Object.keys(groups).forEach(group => {

        const words =
            groups[group];


        const userWantsGroup =
            words.some(word =>
                q.includes(word)
            );


        if (!userWantsGroup) {
            return;
        }


       

        const keywordMatch =
            words.some(word =>
                keywords.some(keyword =>
                    keyword.includes(word) ||
                    word.includes(keyword)
                )
            );


       

        const taskMatch =
            words.some(word =>
                tasks.some(task =>
                    task.includes(word) ||
                    word.includes(task)
                )
            );



        const categoryMatch =
            category.includes(group);


        if (keywordMatch) {

            score += 35;

        }


        if (taskMatch) {

            score += 35;

        }


        if (categoryMatch) {

            score += 25;

        }

    });


    const specialMatches = [

        {
            phrases: [
                "college project",
                "college assignment",
                "academic project",
                "student project"
            ],
            keywords: [
                "college",
                "presentation",
                "slides",
                "academic",
                "study",
                "education"
            ]
        },


        {
            phrases: [
                "professional presentation",
                "professional slides",
                "professional ppt"
            ],
            keywords: [
                "presentation",
                "slides",
                "ppt",
                "design"
            ]
        },


        {
            phrases: [
                "instagram post",
                "instagram posts",
                "social media post",
                "social media posts"
            ],
            keywords: [
                "social media",
                "instagram",
                "design",
                "graphics",
                "image"
            ]
        },


        {
            phrases: [
                "youtube video",
                "youtube videos",
                "youtube shorts"
            ],
            keywords: [
                "youtube",
                "video",
                "shorts"
            ]
        },


        {
            phrases: [
                "remove background",
                "remove image background"
            ],
            keywords: [
                "background",
                "image",
                "photo"
            ]
        },


        {
            phrases: [
                "learn coding",
                "learn programming",
                "learn to code"
            ],
            keywords: [
                "coding",
                "programming",
                "learning",
                "code"
            ]
        },


        {
            phrases: [
                "write an email",
                "write email",
                "professional email"
            ],
            keywords: [
                "writing",
                "email",
                "content"
            ]
        },


        {
            phrases: [
                "research paper",
                "academic paper",
                "scientific paper"
            ],
            keywords: [
                "research",
                "academic",
                "papers",
                "science"
            ]
        }

    ];


    specialMatches.forEach(match => {

        const phraseFound =
            match.phrases.some(
                phrase =>
                    q.includes(phrase)
            );


        if (!phraseFound) {
            return;
        }


        match.keywords.forEach(keyword => {

            const keywordFound =
                keywords.some(toolKeyword =>
                    toolKeyword.includes(keyword) ||
                    keyword.includes(toolKeyword)
                );


            const taskFound =
                tasks.some(task =>
                    task.includes(keyword) ||
                    keyword.includes(task)
                );


            if (keywordFound) {

                score += 15;

            }


            if (taskFound) {

                score += 15;

            }

        });

    });


    score +=
        Math.round(
            tool.rating * 3
        );


    return Math.min(
        99,
        Math.max(
            45,
            score
        )
    );

}


function displayResults(
    tools,
    title = "Recommended AI Tools"
) {

    const container =
        document.getElementById(
            "results-container"
        );


    if (!container) {

        console.error(
            "results-container not found"
        );

        return;

    }


    currentResults =
        Array.isArray(tools)
            ? tools
            : [];


    if (!currentResults.length) {

        container.innerHTML = `

            <div class="no-results">

                <h3>
                    No AI tools found
                </h3>

                <p>
                    Try another search or category.
                </p>

            </div>

        `;

        return;
    }


 
    container.innerHTML =
        currentResults.map(tool => {

            const match =
                calculateMatch(
                    tool,
                    currentQuery
                );

                const recommendationReason =
                     getRecommendationReason(
                          tool,
                        currentQuery
                );


            const isFavorite =
                favorites.includes(
                    tool.id
                );


            const isCompared =
                compareList.includes(
                    tool.id
                );


            return `

                <div class="tool-card">

                    <div class="tool-card-top">

                        <div class="tool-icon">
                            ${tool.icon}
                        </div>


                        <button
                            class="favorite-button ${isFavorite ? "active" : ""}"
                            data-favorite-id="${tool.id}"
                            type="button"
                            aria-label="Favorite"
                        >
                            <i class="fa-${isFavorite ? "solid" : "regular"} fa-heart"></i>
                        </button>

                    </div>


                    <h3>
                        ${escapeHTML(tool.name)}
                    </h3>


                    <div class="tool-category">
                        ${escapeHTML(tool.category)}
                    </div>


                    <div class="tool-rating">
                        ⭐ ${tool.rating}/5
                    </div>


                    <div class="match-score">
                        <strong>
                            ${match}% Match
                        </strong>

                        <span>
                            Based on your task
                        </span>
                    </div>

                    <div class="recommendation-reason">
                         <strong>Why recommended:</strong>
                         <span>
                         ${escapeHTML(recommendationReason)}
                        </span>
                    </div>


                    <p class="tool-description">
                        ${escapeHTML(tool.description)}
                    </p>


                    <div class="tool-tasks">

                        ${(tool.tasks || [])
                            .slice(0, 3)
                            .map(task => `
                                <span>
                                    ${escapeHTML(task)}
                                </span>
                            `)
                            .join("")}

                    </div>


                    <div class="tool-price">
                        ${escapeHTML(tool.price)}
                    </div>


                    <div class="tool-actions">


                        <!-- VIEW DETAILS -->

                        <button
                            class="details-button view-details-button"
                            data-details-id="${tool.id}"
                            type="button"
                        >
                            <i class="fa-solid fa-eye"></i>
                            View Details
                        </button>


                        <!-- OPEN TOOL -->

                        <a
                            class="open-tool-button"
                            href="${escapeHTML(tool.url)}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            Open Tool
                        </a>


                        <!-- COMPARE -->

                        <button
                            class="compare-button ${isCompared ? "active" : ""}"
                            data-compare-id="${tool.id}"
                            type="button"
                        >
                            <i class="fa-solid fa-scale-balanced"></i>

                            ${
                                isCompared
                                    ? "Remove"
                                    : "Compare"
                            }

                        </button>


                    </div>

                </div>

            `;

        }).join("");


    attachCardEvents();

}


function attachCardEvents() {


   

    document
        .querySelectorAll(
            ".view-details-button[data-details-id]"
        )
        .forEach(button => {

            button.onclick = function(event) {

                event.preventDefault();
                event.stopPropagation();

                const id =
                    Number(
                        this.dataset.detailsId
                    );


                console.log(
                    "View Details clicked:",
                    id
                );


                if (
                    Number.isInteger(id)
                ) {

                    showToolDetails(id);

                }

            };

        });


    
    document
        .querySelectorAll(
            ".favorite-button[data-favorite-id]"
        )
        .forEach(button => {

            button.onclick = function(event) {

                event.preventDefault();
                event.stopPropagation();

                const id =
                    Number(
                        this.dataset.favoriteId
                    );


                if (
                    Number.isInteger(id)
                ) {

                    toggleFavorite(id);

                }

            };

        });


   

    document
        .querySelectorAll(
            ".compare-button[data-compare-id]"
        )
        .forEach(button => {

            button.onclick = function(event) {

                event.preventDefault();
                event.stopPropagation();

                const id =
                    Number(
                        this.dataset.compareId
                    );


                if (
                    Number.isInteger(id)
                ) {

                    addToCompare(id);

                }

            };

        });

}


function showToolDetails(toolId) {

    const id =
        Number(toolId);


    const tool =
        getToolById(id);


    console.log(
        "Opening details for:",
        id,
        tool
    );


    if (!tool) {

        console.error(
            "Tool not found:",
            id
        );

        showNotification(
            "Tool not found."
        );

        return;
    }


   

    const existing =
        document.getElementById(
            "tool-details-modal"
        );


    if (existing) {
        existing.remove();
    }


    

    const modal =
        document.createElement(
            "div"
        );


    modal.id =
        "tool-details-modal";


    modal.className =
        "tool-modal";


    modal.innerHTML = `

        <div class="modal-content">

            <button
                class="modal-close"
                id="close-tool-modal"
                type="button"
                aria-label="Close"
            >
                ×
            </button>


            <div class="modal-icon">
                ${tool.icon}
            </div>


            <h2>
                ${escapeHTML(tool.name)}
            </h2>


            <div class="modal-category">
                ${escapeHTML(tool.category)}
            </div>


            <div class="modal-rating">
                ⭐ ${tool.rating}/5
            </div>


            <div class="modal-price">
                💰 ${escapeHTML(tool.price)}
            </div>


            <div class="modal-description">
                ${escapeHTML(tool.description)}
            </div>


            <div class="modal-best-for">

                <h3>
                    Best For
                </h3>


                <ul>

                    ${(tool.tasks || [])
                        .map(task => `
                            <li>
                                ${escapeHTML(task)}
                            </li>
                        `)
                        .join("")}

                </ul>

            </div>


            <div class="modal-actions">

                <a
                    class="open-tool-button"
                    href="${escapeHTML(tool.url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    Open Tool
                </a>


                <button
                    class="modal-compare"
                    id="modal-compare-button"
                    type="button"
                >
                    ${
                        compareList.includes(tool.id)
                            ? "Remove from Compare"
                            : "Add to Compare"
                    }
                </button>

            </div>

        </div>

    `;


    document.body.appendChild(
        modal
    );


    document.body.style.overflow =
        "hidden";


   
    const closeButton =
        document.getElementById(
            "close-tool-modal"
        );


    if (closeButton) {

        closeButton.onclick =
            closeToolModal;

    }


   

    const compareButton =
        document.getElementById(
            "modal-compare-button"
        );


    if (compareButton) {

        compareButton.onclick =
            function() {

                addToCompare(
                    tool.id
                );

                closeToolModal();

            };

    }


    

    modal.onclick =
        function(event) {

            if (
                event.target === modal
            ) {

                closeToolModal();

            }

        };

}


window.showToolDetails =
    showToolDetails;


function closeToolModal() {

    const modal =
        document.getElementById(
            "tool-details-modal"
        );


    if (modal) {

        modal.remove();

    }


    document.body.style.overflow =
        "";

}


window.closeToolModal =
    closeToolModal;



function performSearch(query) {

    currentQuery =
        normalize(query);


    if (!currentQuery) {

        showNotification(
            "Please tell us what you want to do."
        );


        return;
    }


    const scored =
        aiTools.map(tool => ({

            tool: tool,

            score:
                calculateMatch(
                    tool,
                    currentQuery
                )

        }));


    const results =
        scored
            .sort(
                (a, b) =>
                    b.score - a.score
            )
            .map(item => item.tool);


    currentResults =
        results;


    displayResults(
        results,
        "Recommended AI Tools"
    );


    scrollToResults();

}


function setupSearch() {

    const input =
        document.getElementById(
            "search-input"
        );


    if (!input) {
        return;
    }


    input.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                performSearch(
                    input.value
                );

            }

        }
    );


    const button =
        document.querySelector(
            ".search-button"
        );


    if (button) {

        button.addEventListener(
            "click",
            function() {

                performSearch(
                    input.value
                );

            }
        );

    }

}



function searchPopular(query) {

    const input =
        document.getElementById(
            "search-input"
        );


    if (input) {

        input.value =
            query;

    }


    performSearch(query);

}


window.searchPopular =
    searchPopular;


function filterTools(category) {

    console.log(
        "Category clicked:",
        category
    );

    const selected =
        normalize(category);

    if (!aiTools || aiTools.length === 0) {

        console.warn(
            "AI tools are not loaded yet."
        );

        return;
    }

    currentQuery = "";

    if (
        !selected ||
        selected === "all"
    ) {

        currentResults =
            [...aiTools].sort(
                (a, b) =>
                    Number(b.rating) -
                    Number(a.rating)
            );

        displayResults(
            currentResults,
            "All AI Tools"
        );

    }

   
    else {

        currentResults =
            aiTools.filter(tool =>
                normalize(tool.category) ===
                selected
            );

        console.log(
            "Filtered results:",
            currentResults.length
        );

        displayResults(
            currentResults,
            `${category} AI Tools`
        );

    }

}


function setupCategoryFilters() {

    const categoryButtons =
        document.querySelectorAll(
            ".category-filters button[data-category]"
        );

    console.log(
        "Category buttons found:",
        categoryButtons.length
    );

    categoryButtons.forEach(button => {

        button.type = "button";

       
        button.addEventListener(
            "mousedown",
            function(event) {
                event.preventDefault();
            }
        );

        button.addEventListener(
            "click",
            function(event) {

                event.preventDefault();
                event.stopPropagation();

                const category =
                    this.getAttribute("data-category");

                console.log(
                    "CATEGORY BUTTON CLICKED:",
                    category
                );

                filterTools(category);

            }
        );

    });

}

function applySmartFilters() {

    
    const category =
        document.getElementById("category-filter")?.value || "All";

    const price =
        document.getElementById("price-filter")?.value || "All";

    const rating =
        document.getElementById("rating-filter")?.value || "All";

    const sort =
        document.getElementById("sort-filter")?.value || "rating";


    
    let filteredTools = [...aiTools];


    if (category !== "All") {

        filteredTools = filteredTools.filter(tool =>
            normalize(tool.category) === normalize(category)
        );

    }


    
    if (price !== "All") {

        filteredTools = filteredTools.filter(tool =>
            normalize(tool.price).includes(normalize(price))
        );

    }


    if (rating !== "All") {

        const minimumRating = Number(rating);

        filteredTools = filteredTools.filter(tool =>
            Number(tool.rating) >= minimumRating
        );

    }


    if (sort === "rating") {

        filteredTools.sort(
            (a, b) => Number(b.rating) - Number(a.rating)
        );

    }

    else if (sort === "name") {

        filteredTools.sort(
            (a, b) => a.name.localeCompare(b.name)
        );

    }


    currentResults = filteredTools;

    console.log("Category:", category);
    console.log("Price:", price);
    console.log("Rating:", rating);
    console.log("Sort:", sort);
    console.log("Results:", filteredTools.length);


    displayResults(
        filteredTools,
        category === "All"
            ? "All AI Tools"
            : `${category} AI Tools`
    );

}

function setupSmartFilterEvents() {

    [
        "category-filter",
        "price-filter",
        "rating-filter",
        "sort-filter"
    ]
    .forEach(id => {

        const element =
            document.getElementById(id);


        if (element) {

            element.addEventListener(
                "change",
                applySmartFilters
            );

        }

    });

}


function resetSmartFilters() {

    [
        "category-filter",
        "price-filter",
        "rating-filter",
        "sort-filter"
    ]
    .forEach(id => {

        const element =
            document.getElementById(id);


        if (element) {

            element.value =
                "all";

        }

    });


    showDefaultRecommendations();

}


window.resetSmartFilters =
    resetSmartFilters;


function getLoggedInUser() {

    try {

        return JSON.parse(
            localStorage.getItem("auAppFinderUser") || "null"
        );

    } catch (error) {

        console.error(
            "Unable to read logged-in user:",
            error
        );

        return null;

    }

}

async function loadComparisonsFromBackend() {

    const user = getLoggedInUser();

    if (!user || !user.id) {

        compareList = [];

        return;

    }

    try {

        const response = await fetch(
            `http://localhost:3000/api/comparisons/${encodeURIComponent(user.id)}`
        );

        if (!response.ok) {

            throw new Error(
                `HTTP error! Status: ${response.status}`
            );

        }

        const comparisonRows =
            await response.json();

        compareList =
            comparisonRows.map(
                item => Number(item.tool_id)
            );

        console.log(
            "✅ Comparison list loaded from MySQL:",
            compareList
        );

        updateCompareButton();

    } catch (error) {

        console.error(
            "❌ Failed to load comparison list:",
            error
        );

        compareList = [];

        updateCompareButton();

    }

}

async function loadFavoritesFromBackend() {

    const user = getLoggedInUser();

    if (!user || !user.id) {
        favorites = [];
        return;
    }

    try {

        const response = await fetch(
            `http://localhost:3000/api/favorites/${encodeURIComponent(user.id)}`
        );

        if (!response.ok) {
            throw new Error(
                `HTTP error! Status: ${response.status}`
            );
        }

        const favoriteRows = await response.json();

        favorites = favoriteRows.map(
            favorite => Number(favorite.tool_id)
        );

        console.log(
            "✅ Favorites loaded from MySQL:",
            favorites
        );

    } catch (error) {

        console.error(
            "❌ Failed to load favorites:",
            error
        );

        favorites = [];
    }
}


async function toggleFavorite(toolId) {

    const id =
        Number(toolId);


    const tool =
        getToolById(id);


    if (!tool) {

        showNotification(
            "Tool not found."
        );

        return;

    }


    const user =
        getLoggedInUser();


    if (!user || !user.id) {

        showNotification(
            "Please sign in to save favorites."
        );

        return;

    }


    const isFavorite =
        favorites.includes(id);


    try {



        if (isFavorite) {

            const response =
                await fetch(
                    `http://localhost:3000/api/favorites/${encodeURIComponent(user.id)}/${encodeURIComponent(id)}`,
                    {
                        method: "DELETE"
                    }
                );


            const data =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    data.message ||
                    "Failed to remove favorite."
                );

            }


            favorites =
                favorites.filter(
                    favoriteId =>
                        favoriteId !== id
                );


            showNotification(
                `${tool.name} removed from favorites.`
            );

        }


        else {

            const response =
                await fetch(
                    "http://localhost:3000/api/favorites",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify({
                            userId: Number(user.id),
                            toolId: id
                        })
                    }
                );


            const data =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    data.message ||
                    "Failed to add favorite."
                );

            }


            favorites.push(id);


            showNotification(
                `${tool.name} added to favorites.`
            );

        }


              displayResults(
            currentResults
        );


    } catch (error) {

        console.error(
            "Favorite error:",
            error
        );


        showNotification(
            error.message ||
            "Unable to update favorite."
        );

    }

}


window.toggleFavorite =
    toggleFavorite;


function showFavorites() {

    currentQuery =
        "";


    currentResults =
        aiTools.filter(
            tool =>
                favorites.includes(
                    tool.id
                )
        );


    displayResults(
        currentResults,
        "My Favorite AI Tools"
    );

}


window.showFavorites =
    showFavorites;




async function addToCompare(toolId) {

    const id =
        Number(toolId);


    const tool =
        getToolById(id);


    if (!tool) {

        showNotification(
            "Tool not found."
        );

        return;

    }


    
    const user =
        getLoggedInUser();


    if (!user || !user.id) {

        showNotification(
            "Please sign in to compare AI tools."
        );

        return;

    }


    const isCompared =
        compareList.includes(id);


    try {


       
        if (isCompared) {

            const response =
                await fetch(
                    `http://localhost:3000/api/comparisons/${encodeURIComponent(user.id)}/${encodeURIComponent(id)}`,
                    {
                        method: "DELETE"
                    }
                );


            const data =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    data.message ||
                    "Failed to remove tool from comparison."
                );

            }


            compareList =
                compareList.filter(
                    item =>
                        item !== id
                );


            updateCompareButton();


            showNotification(
                `${tool.name} removed from comparison.`
            );


            displayResults(
                currentResults
            );


            return;

        }


       
        if (compareList.length >= 3) {

            showNotification(
                "You can compare up to 3 AI tools."
            );

            return;

        }


        const response =
            await fetch(
                "http://localhost:3000/api/comparisons",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        userId:
                            Number(user.id),

                        toolId:
                            id
                    })
                }
            );


        const data =
            await response.json();


        if (!response.ok) {

            throw new Error(
                data.message ||
                "Failed to add tool to comparison."
            );

        }


        compareList.push(id);


        updateCompareButton();


        showNotification(
            `${tool.name} added to comparison.`
        );


        displayResults(
            currentResults
        );


       
        if (
            compareList.length >= 2
        ) {

            setTimeout(
                showComparison,
                200
            );

        }

    } catch (error) {

        console.error(
            "Comparison error:",
            error
        );


        showNotification(
            error.message ||
            "Unable to update comparison."
        );

    }

}


window.addToCompare =
    addToCompare;



function updateCompareButton() {

    document
        .querySelectorAll(
            "#compare-button, .compare-tools-button"
        )
        .forEach(button => {

            button.textContent =
                `Compare (${compareList.length})`;

        });

}


function showComparison() {

    if (
        compareList.length < 2
    ) {

        showNotification(
            "Add at least 2 AI tools to compare."
        );

        return;

    }


    const tools =
        compareList
            .map(getToolById)
            .filter(Boolean);


    if (
        tools.length < 2
    ) {

        return;

    }


    const old =
        document.getElementById(
            "comparison-modal"
        );


    if (old) {
        old.remove();
    }


    const modal =
        document.createElement(
            "div"
        );


    modal.id =
        "comparison-modal";


    modal.className =
        "tool-modal";


    modal.innerHTML = `

        <div class="comparison-modal-content">

            <button
                class="modal-close"
                id="close-comparison"
                type="button"
                aria-label="Close"
            >
                ×
            </button>


            <h2>
                AI Tool Comparison
            </h2>


            <p>
                Compare the selected AI tools side by side.
            </p>


            <div class="comparison-grid">

                ${tools.map(tool => `

                    <div class="comparison-card">

                        <div class="comparison-icon">
                            ${tool.icon}
                        </div>


                        <h3>
                            ${escapeHTML(tool.name)}
                        </h3>


                        <div class="comparison-category">
                            ${escapeHTML(tool.category)}
                        </div>


                        <div class="comparison-rating">
                            ⭐ ${tool.rating}/5
                        </div>


                        <div class="comparison-info">

                            <div class="comparison-row">
                                <strong>Price</strong>
                                <span>
                                    ${escapeHTML(tool.price)}
                                </span>
                            </div>


                            <div class="comparison-row">
                                <strong>Description</strong>
                                <span>
                                    ${escapeHTML(tool.description)}
                                </span>
                            </div>


                            <div class="comparison-row">
                                <strong>Best For</strong>
                                <span>
                                    ${(tool.tasks || [])
                                        .map(escapeHTML)
                                        .join(", ")}
                                </span>
                            </div>

                        </div>


                        <button
                            class="remove-compare-btn"
                            data-remove-id="${tool.id}"
                            type="button"
                        >
                            Remove from comparison
                        </button>

                    </div>

                `).join("")}

            </div>


            <div class="comparison-footer">

                <button
                    class="add-more-btn"
                    id="add-more-comparison"
                    type="button"
                >
                    Add More Tools
                </button>


                <button
                    class="clear-compare-btn"
                    id="clear-comparison"
                    type="button"
                >
                    Clear Comparison
                </button>

            </div>

        </div>

    `;


    document.body.appendChild(
        modal
    );


    document.body.style.overflow =
        "hidden";


    document
        .getElementById(
            "close-comparison"
        )
        ?.addEventListener(
            "click",
            closeComparison
        );


    document
        .getElementById(
            "clear-comparison"
        )
        ?.addEventListener(
            "click",
            clearComparison
        );


    document
        .getElementById(
            "add-more-comparison"
        )
        ?.addEventListener(
            "click",
            function() {

                closeComparison();

                scrollToResults();

            }
        );


    modal
        .querySelectorAll(
            ".remove-compare-btn"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                function() {

                    removeFromCompare(
                        Number(
                            this.dataset.removeId
                        )
                    );

                }
            );

        });


    modal.addEventListener(
        "click",
        function(event) {

            if (
                event.target === modal
            ) {

                closeComparison();

            }

        }
    );

}


window.showComparison =
    showComparison;



function closeComparison() {

    const modal =
        document.getElementById(
            "comparison-modal"
        );


    if (modal) {
        modal.remove();
    }


    document.body.style.overflow =
        "";

}


window.closeComparison =
    closeComparison;


async function removeFromCompare(toolId) {

    const id =
        Number(toolId);


    const tool =
        getToolById(id);


    const user =
        getLoggedInUser();


    if (!user || !user.id) {

        showNotification(
            "Please sign in."
        );

        return;

    }


    try {

        const response =
            await fetch(
                `http://localhost:3000/api/comparisons/${encodeURIComponent(user.id)}/${encodeURIComponent(id)}`,
                {
                    method: "DELETE"
                }
            );


        const data =
            await response.json();


        if (!response.ok) {

            throw new Error(
                data.message ||
                "Failed to remove comparison."
            );

        }


        compareList =
            compareList.filter(
                item =>
                    item !== id
            );


        updateCompareButton();


        closeComparison();


        displayResults(
            currentResults
        );


        if (
            compareList.length >= 2
        ) {

            showComparison();

        } else {

            showNotification(
                `${tool?.name || "Tool"} removed from comparison.`
            );

        }

    } catch (error) {

        console.error(
            "Remove comparison error:",
            error
        );


        showNotification(
            error.message ||
            "Unable to remove comparison."
        );

    }

}


window.removeFromCompare =
    removeFromCompare;

async function clearComparison() {

    const user =
        getLoggedInUser();


    if (!user || !user.id) {

        showNotification(
            "Please sign in."
        );

        return;

    }


    try {

        const response =
            await fetch(
                `http://localhost:3000/api/comparisons/${encodeURIComponent(user.id)}`,
                {
                    method: "DELETE"
                }
            );


        const data =
            await response.json();


        if (!response.ok) {

            throw new Error(
                data.message ||
                "Failed to clear comparison."
            );

        }


       
        compareList = [];


       
        updateCompareButton();


       
        closeComparison();


       
        displayResults(
            currentResults
        );


        showNotification(
            "Comparison cleared."
        );


    } catch (error) {

        console.error(
            "Clear comparison error:",
            error
        );


        showNotification(
            error.message ||
            "Unable to clear comparison."
        );

    }

}


window.clearComparison =
    clearComparison;


function showNotification(message) {

    const old =
        document.getElementById(
            "au-notification"
        );


    if (old) {
        old.remove();
    }


    const notification =
        document.createElement(
            "div"
        );


    notification.id =
        "au-notification";


    notification.textContent =
        message;


    document.body.appendChild(
        notification
    );


    requestAnimationFrame(
        function() {

            notification.classList.add(
                "show"
            );

        }
    );


    setTimeout(
        function() {

            notification.classList.remove(
                "show"
            );


            setTimeout(
                function() {

                    notification.remove();

                },
                350
            );

        },
        2500
    );

}


window.showNotification =
    showNotification;


function showDefaultRecommendations() {

    currentQuery =
        "";


    currentResults =
        [...aiTools]
            .sort(
                (a, b) =>
                    b.rating - a.rating
            );


    displayResults(
        currentResults,
        "Recommended AI Tools"
    );

}


function scrollToResults() {

    const section =
        document.querySelector(
            ".results-section"
        );


    if (section) {

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


window.scrollToResults =
    scrollToResults;


function setupNavigation() {

    document
        .querySelectorAll(
            ".nav-link a"
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                function(event) {

                    const target =
                        this.getAttribute(
                            "href"
                        );


                    if (
                        !target ||
                        !target.startsWith("#")
                    ) {

                        return;

                    }


                    event.preventDefault();


                    const section =
                        document.querySelector(
                            target
                        );


                    if (section) {

                        section.scrollIntoView({
                            behavior: "smooth"
                        });

                    } else {

                        const text =
                            normalize(
                                this.textContent
                            );


                        if (
                            text === "compare"
                        ) {

                            if (
                                compareList.length >= 2
                            ) {

                                showComparison();

                            } else {

                                showNotification(
                                    "Select at least 2 AI tools to compare."
                                );

                            }

                        }

                    }

                }
            );

        });

}



document.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                ".view-details-button[data-details-id]"
            );


        if (!button) {
            return;
        }


        if (
            event.defaultPrevented
        ) {

            return;

        }


        event.preventDefault();
        event.stopPropagation();


        const id =
            Number(
                button.getAttribute(
                    "data-details-id"
                )
            );


        console.log(
            "Backup View Details handler:",
            id
        );


        if (
            Number.isInteger(id)
        ) {

            showToolDetails(id);

        }

    },
    false
);


document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeToolModal();

            closeComparison();

        }

    }
);


document.addEventListener(
    "DOMContentLoaded",
    function () {

        setupSearch();

        setupCategoryFilters();

        setupNavigation();

        setupSmartFilterEvents();

        updateCompareButton();

        loadToolsFromBackend();

        console.log(
            "AU App Finder initialized."
        );

    }
);

(function setupSearchSuggestions() {

    const searchInput =
        document.getElementById("search-input");

    if (!searchInput) {
        return;
    }


    
    const suggestionBox =
        document.createElement("div");

    suggestionBox.id =
        "search-suggestions";

    suggestionBox.setAttribute(
        "role",
        "listbox"
    );

    suggestionBox.setAttribute(
        "aria-label",
        "Search suggestions"
    );

    searchInput.setAttribute(
        "role",
        "combobox"
    );

    searchInput.setAttribute(
        "aria-autocomplete",
        "list"
    );

    searchInput.setAttribute(
        "aria-expanded",
        "false"
    );

    searchInput.setAttribute(
        "aria-controls",
        "search-suggestions"
    );


    

    const searchBox =
        searchInput.closest(".search-input") ||
        searchInput.parentElement;

    searchBox.style.position =
        "relative";

    searchBox.appendChild(
        suggestionBox
    );


    function getSuggestions(query) {

        const q =
            normalize(query);

        if (!q) {
            return [];
        }


        const suggestions = [];


        /* Tool names */

        aiTools.forEach(tool => {

            if (
                normalize(tool.name)
                    .includes(q)
            ) {

                suggestions.push({
                    text: tool.name,
                    type: "AI Tool"
                });

            }

        });


        
        const categories =
            [
                ...new Set(
                    aiTools.map(
                        tool => tool.category
                    )
                )
            ];


        categories.forEach(category => {

            if (
                normalize(category)
                    .includes(q)
            ) {

                suggestions.push({
                    text:
                        `Find ${category} AI tools`,
                    type: "Category"
                });

            }

        });


        

        aiTools.forEach(tool => {

            const tasks =
                tool.tasks || [];


            tasks.forEach(task => {

                if (
                    normalize(task)
                        .includes(q)
                ) {

                    suggestions.push({
                        text: task,
                        type: "Task"
                    });

                }

            });

        });


       

        const commonSearches = [

            "professional presentation",

            "college project",

            "create presentation",

            "create slides",

            "make Instagram post",

            "create social media post",

            "edit YouTube video",

            "create YouTube video",

            "learn coding",

            "write an email",

            "write a blog",

            "research paper",

            "academic research",

            "study for exams",

            "create images",

            "design a poster",

            "remove background",

            "generate music",

            "meeting notes",

            "translate text"

        ];


        commonSearches.forEach(text => {

            if (
                normalize(text)
                    .includes(q)
            ) {

                suggestions.push({
                    text: text,
                    type: "Suggested search"
                });

            }

        });


        
        const unique =
            [];

        const seen =
            new Set();


        suggestions.forEach(item => {

            const key =
                normalize(item.text);


            if (
                !seen.has(key)
            ) {

                seen.add(key);

                unique.push(item);

            }

        });


        return unique.slice(0, 8);

    }


   
    function showSuggestions(query) {

        const suggestions =
            getSuggestions(query);


        suggestionBox.innerHTML =
            "";


        if (
            suggestions.length === 0
        ) {

            hideSuggestions();

            return;

        }


        suggestions.forEach(
            (suggestion, index) => {

                const item =
                    document.createElement("div");


                item.className =
                    "search-suggestion";


                item.setAttribute(
                    "role",
                    "option"
                );


                item.setAttribute(
                    "data-index",
                    index
                );


                item.innerHTML = `

                    <span class="suggestion-icon">
                        🔎
                    </span>

                    <span class="suggestion-text">
                        ${suggestion.text}
                    </span>

                    <span class="suggestion-type">
                        ${suggestion.type}
                    </span>

                `;


                item.addEventListener(
                    "mousedown",
                    function(event) {

                        event.preventDefault();

                    }
                );


                item.addEventListener(
                    "click",
                    function() {

                        searchInput.value =
                            suggestion.text;

                        hideSuggestions();

                        performSearch(
                            suggestion.text
                        );

                    }
                );


                suggestionBox.appendChild(
                    item
                );

            }
        );


        suggestionBox.style.display =
            "block";

        searchInput.setAttribute(
            "aria-expanded",
            "true"
        );

    }


    function hideSuggestions() {

        suggestionBox.style.display =
            "none";

        searchInput.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    searchInput.addEventListener(
        "input",
        function() {

            showSuggestions(
                this.value
            );

        }
    );


    searchInput.addEventListener(
        "keydown",
        function(event) {

            const items =
                suggestionBox.querySelectorAll(
                    ".search-suggestion"
                );


            if (
                event.key === "Escape"
            ) {

                hideSuggestions();

                return;

            }


            if (
                event.key === "ArrowDown"
            ) {

                event.preventDefault();

                if (items.length > 0) {

                    items[0].focus();

                }

            }

        }
    );


   
    document.addEventListener(
        "click",
        function(event) {

            if (
                !searchInput.contains(
                    event.target
                ) &&
                !suggestionBox.contains(
                    event.target
                )
            ) {

                hideSuggestions();

            }

        }
    );


   
    hideSuggestions();

})();

document.addEventListener("DOMContentLoaded", function () {

    const signInButton = document.querySelector(".sign-button");
    const getStartedButton = document.querySelector(".get");

    
    if (signInButton) {
    signInButton.addEventListener("click", function () {
        window.location.href = "signin.html";
    });
}

    
    if (getStartedButton) {
        getStartedButton.addEventListener("click", function () {
            document.getElementById("explore").scrollIntoView({
                behavior: "smooth"
            });
        });
    }

});

document.addEventListener("DOMContentLoaded", function () {

    const signInButton =
        document.getElementById("sign-in-button");

    const logoutButton =
        document.getElementById("logout-button");

    const savedUser =
        JSON.parse(
            localStorage.getItem("auAppFinderUser") || "null"
        );

    const isLoggedIn =
        localStorage.getItem("auAppFinderLoggedIn") === "true";


    
    if (isLoggedIn && savedUser) {

        signInButton.textContent =
    "Hi, " + savedUser.name.split(" ")[0] + " 👋";

        signInButton.disabled = true;

        logoutButton.style.display =
            "inline-block";
    }


   
    if (signInButton && !isLoggedIn) {

        signInButton.addEventListener("click", function () {

            window.location.href =
                "signin.html";

        });

    }


    
    if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        function () {

            secureLogout();

        }
    );

}
});

async function loadToolsFromBackend() {

    try {

        const response = await fetch(
            "http://localhost:3000/api/tools"
        );

        if (!response.ok) {

            throw new Error(
                `HTTP error! Status: ${response.status}`
            );

        }

        const databaseTools =
            await response.json();

        console.log(
            "RDS data received:",
            databaseTools
        );


       
        aiTools.length = 0;


        
        databaseTools.forEach(tool => {

            aiTools.push({

                id: Number(tool.id),

                name: tool.name,

                category: tool.category,

                rating: Number(tool.rating) || 0,

                icon: tool.icon || "🤖",

                price: tool.price || "Free",

                url: tool.url || "#",

                keywords: tool.keywords || [],

                tasks: tool.tasks || [],

                description: tool.description || ""

            });

        });


        console.log(
            `✅ ${aiTools.length} AI tools loaded from AWS RDS`
        );


        await loadFavoritesFromBackend();

        await loadComparisonsFromBackend();


        
        currentResults = [...aiTools];

        displayResults(
            currentResults
        );


        console.log(
            "RDS categories:",
            [
                ...new Set(
                    aiTools.map(
                        tool => tool.category
                    )
                )
            ]
        );


    } catch (error) {

        console.error(
            "❌ Failed to load tools from AWS RDS:",
            error
        );


       
        await loadFavoritesFromBackend();


        currentResults = [...aiTools];

        displayResults(
            currentResults
        );

    }
}

document.addEventListener("DOMContentLoaded", function () {

    const signInButton =
        document.getElementById("sign-in-button");

    const logoutButton =
        document.getElementById("logout-button");

    const getStartedButton =
        document.querySelector(".get");


    
    const isLoggedIn =
        localStorage.getItem("auAppFinderLoggedIn") === "true";


    function updateLoginUI() {

        const loggedIn =
            localStorage.getItem("auAppFinderLoggedIn") === "true";


        if (loggedIn) {

            
            if (signInButton) {
                signInButton.style.display = "none";
            }


           
            if (logoutButton) {
                logoutButton.style.display = "inline-block";
            }

        } else {

            
            if (signInButton) {
                signInButton.style.display = "inline-block";
            }


           
            if (logoutButton) {
                logoutButton.style.display = "none";
            }

        }

    }



    if (signInButton) {

        signInButton.addEventListener("click", function () {

   
            window.location.href = "signin.html";

        });

    }


    
    if (logoutButton) {

        logoutButton.addEventListener("click", function () {

            localStorage.removeItem(
                "auAppFinderLoggedIn"
            );

            localStorage.removeItem(
                "auAppFinderUser"
            );

            alert("You have been logged out.");

            updateLoginUI();

        });

    }


   
    if (getStartedButton) {

        getStartedButton.addEventListener("click", function () {

            const loggedIn =
                localStorage.getItem(
                    "auAppFinderLoggedIn"
                ) === "true";


            if (loggedIn) {

                // Already logged in
                document
                    .getElementById("explore")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

            } else {

                // Not logged in
                window.location.href = "signup.html";

            }

        });

    }


       updateLoginUI();

});

document.addEventListener("DOMContentLoaded", function () {

    const profileButton =
        document.getElementById("profile-button");

    if (!profileButton) {
        console.log("Profile button not found.");
        return;
    }


   
    function getProfileUser() {

        try {

            return JSON.parse(
                localStorage.getItem("auAppFinderUser") || "null"
            );

        } catch (error) {

            console.error(
                "Profile user error:",
                error
            );

            return null;

        }

    }


   
    function updateProfileButton() {

        const loggedIn =
            localStorage.getItem(
                "auAppFinderLoggedIn"
            ) === "true";

        const user =
            getProfileUser();


        if (
            loggedIn &&
            user
        ) {

            profileButton.style.display =
                "inline-flex";

        } else {

            profileButton.style.display =
                "none";

        }

    }


    function openProfile() {

        const user =
            getProfileUser();


        if (!user) {

            alert(
                "Please sign in first."
            );

            return;

        }


        
        const existing =
            document.getElementById(
                "au-profile-overlay"
            );

        if (existing) {
            existing.remove();
        }


      
        const favoriteCount =
            Array.isArray(favorites)
                ? favorites.length
                : 0;

        const compareCount =
            Array.isArray(compareList)
                ? compareList.length
                : 0;


        const overlay =
            document.createElement("div");


        overlay.id =
            "au-profile-overlay";


        overlay.style.cssText = `
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.55);
            z-index: 999999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        `;


        const card =
            document.createElement("div");


        card.style.cssText = `
            position: relative;
            width: 100%;
            max-width: 600px;
            max-height: 90vh;
            overflow-y: auto;
            background: #ffffff;
            color: #1f2937;
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.25);
            font-family: Inter, Arial, sans-serif;
        `;


        card.innerHTML = `

            <!-- CLOSE BUTTON -->

            <button
                id="au-profile-close"
                type="button"
                style="
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    width: 38px;
                    height: 38px;
                    border: none;
                    border-radius: 50%;
                    background: #f1f5f9;
                    color: #111827;
                    font-size: 22px;
                    cursor: pointer;
                "
            >
                ×
            </button>


            <!-- PROFILE ICON -->

            <div
                style="
                    width: 85px;
                    height: 85px;
                    margin: 5px auto 18px;
                    border-radius: 50%;
                    background: #eef2ff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 34px;
                    color: #4f46e5;
                "
            >
                <i class="fa-solid fa-user"></i>
            </div>


            <!-- TITLE -->

            <h2
                style="
                    text-align: center;
                    margin: 0 0 8px;
                    color: #111827;
                    font-size: 28px;
                "
            >
                My Account
            </h2>


            <p
                style="
                    text-align: center;
                    margin: 0 0 28px;
                    color: #64748b;
                    font-size: 15px;
                "
            >
                Welcome,
                <strong style="color:#111827;">
                    ${escapeHTML(user.name || "User")}
                </strong>
                👋
            </p>


            <!-- USER INFORMATION -->

            <div
                style="
                    background: #f8fafc;
                    border-radius: 14px;
                    padding: 20px;
                    margin-bottom: 20px;
                "
            >

                <div style="margin-bottom: 18px;">

                    <div
                        style="
                            font-size: 13px;
                            color: #64748b;
                            margin-bottom: 5px;
                        "
                    >
                        NAME
                    </div>

                    <div
                        style="
                            font-size: 17px;
                            font-weight: 600;
                            color: #111827;
                        "
                    >
                        ${escapeHTML(
                            user.name || "Not available"
                        )}
                    </div>

                </div>


                <div>

                    <div
                        style="
                            font-size: 13px;
                            color: #64748b;
                            margin-bottom: 5px;
                        "
                    >
                        EMAIL
                    </div>

                    <div
                        style="
                            font-size: 16px;
                            font-weight: 500;
                            color: #111827;
                            word-break: break-word;
                        "
                    >
                        ${escapeHTML(
                            user.email || "Not available"
                        )}
                    </div>

                </div>

            </div>


            <!-- STATISTICS -->

            <div
                style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 15px;
                    margin-bottom: 20px;
                "
            >

                <!-- FAVORITES -->

                <div
                    style="
                        background: #fff5f6;
                        border-radius: 14px;
                        padding: 22px;
                        text-align: center;
                    "
                >

                    <div
                        style="
                            font-size: 30px;
                            margin-bottom: 8px;
                        "
                    >
                        ❤️
                    </div>

                    <div
                        style="
                            font-size: 28px;
                            font-weight: 700;
                            color: #111827;
                        "
                    >
                        ${favoriteCount}
                    </div>

                    <div
                        style="
                            color: #64748b;
                            font-size: 14px;
                            margin-top: 4px;
                        "
                    >
                        Favorite Tools
                    </div>

                </div>


                <!-- COMPARE -->

                <div
                    style="
                        background: #f1f5ff;
                        border-radius: 14px;
                        padding: 22px;
                        text-align: center;
                    "
                >

                    <div
                        style="
                            font-size: 30px;
                            margin-bottom: 8px;
                        "
                    >
                        ⚖️
                    </div>

                    <div
                        style="
                            font-size: 28px;
                            font-weight: 700;
                            color: #111827;
                        "
                    >
                        ${compareCount}
                    </div>

                    <div
                        style="
                            color: #64748b;
                            font-size: 14px;
                            margin-top: 4px;
                        "
                    >
                        Compared Tools
                    </div>

                </div>

            </div>


            <!-- INFORMATION -->

            <div
                style="
                    background: #f8fafc;
                    border-radius: 12px;
                    padding: 15px;
                    text-align: center;
                    color: #64748b;
                    font-size: 13px;
                "
            >
                Your favorites and comparison list
                are saved to your account.
            </div>

        `;


        overlay.appendChild(card);

        document.body.appendChild(
            overlay
        );


        document
            .getElementById("au-profile-close")
            .addEventListener(
                "click",
                closeProfile
            );


        overlay.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === overlay
                ) {

                    closeProfile();

                }

            }
        );


        document.body.style.overflow =
            "hidden";

    }


    function closeProfile() {

        const overlay =
            document.getElementById(
                "au-profile-overlay"
            );


        if (overlay) {

            overlay.remove();

        }


        document.body.style.overflow =
            "";

    }


    profileButton.addEventListener(
        "click",
        function () {

            openProfile();

        }
    );


    updateProfileButton();


    
    setInterval(
        updateProfileButton,
        1000
    );

});


 
async function loadFavoritesFromBackend() {

    try {

        const response =
            await fetch(
                "http://localhost:3000/api/favorites",
                {
                    credentials: "include"
                }
            );


        if (
            response.status === 401
        ) {

            favorites = [];

            return;

        }


        if (!response.ok) {

            throw new Error(
                "Failed to load favorites."
            );

        }


        const rows =
            await response.json();


        favorites =
            Array.isArray(rows)
                ? rows.map(
                    row =>
                        Number(
                            row.tool_id
                        )
                )
                : [];


        console.log(
            "✅ Favorites loaded from MySQL:",
            favorites
        );


    } catch (error) {

        console.error(
            "❌ Failed to load favorites:",
            error
        );


        favorites = [];

    }

}


async function loadComparisonsFromBackend() {

    try {

        const response =
            await fetch(
                "http://localhost:3000/api/comparisons",
                {
                    credentials: "include"
                }
            );


        if (
            response.status === 401
        ) {

            compareList = [];

            return;

        }


        if (!response.ok) {

            throw new Error(
                "Failed to load comparisons."
            );

        }


        const rows =
            await response.json();


        compareList =
            Array.isArray(rows)
                ? rows.map(
                    row =>
                        Number(
                            row.tool_id
                        )
                )
                : [];


        console.log(
            "✅ Comparisons loaded from MySQL:",
            compareList
        );


        updateCompareButton();


    } catch (error) {

        console.error(
            "❌ Failed to load comparisons:",
            error
        );


        compareList = [];

        updateCompareButton();

    }

}


async function loadUserListsFromBackend() {

    await Promise.all([

        loadFavoritesFromBackend(),

        loadComparisonsFromBackend()

    ]);


    displayResults(
        currentResults,
        "Recommended AI Tools"
    );


    updateCompareButton();

}


async function toggleFavorite(toolId) {

    const id =
        Number(toolId);


    const tool =
        getToolById(id);


    if (!tool) {

        return;

    }


    const isAlreadyFavorite =
        favorites.includes(id);


    try {


       
        if (
            isAlreadyFavorite
        ) {

            const response =
                await fetch(
                    `http://localhost:3000/api/favorites/${encodeURIComponent(id)}`,
                    {
                        method:
                            "DELETE",

                        credentials:
                            "include"
                    }
                );


            const data =
                await response.json();


            if (
                !response.ok
            ) {

                throw new Error(
                    data.message ||
                    "Failed to remove favorite."
                );

            }


            favorites =
                favorites.filter(
                    favoriteId =>
                        favoriteId !== id
                );


            showNotification(
                `${tool.name} removed from favorites.`
            );

        }


        else {

            const response =
                await fetch(
                    "http://localhost:3000/api/favorites",
                    {
                        method:
                            "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        credentials:
                            "include",

                        body:
                            JSON.stringify({
                                toolId: id
                            })
                    }
                );


            const data =
                await response.json();


            if (
                !response.ok
            ) {

                if (
                    response.status ===
                    401
                ) {

                    showNotification(
                        "Please sign in to use Favorites."
                    );

                    return;

                }


                throw new Error(
                    data.message ||
                    "Failed to add favorite."
                );

            }


            if (
                !favorites.includes(id)
            ) {

                favorites.push(id);

            }


            showNotification(
                `${tool.name} added to favorites ❤️`
            );

        }


        displayResults(
            currentResults,
            "Recommended AI Tools"
        );


    } catch (error) {

        console.error(
            "Favorite error:",
            error
        );


        showNotification(
            error.message ||
            "Favorite operation failed."
        );

    }

}


window.toggleFavorite =
    toggleFavorite;


function showFavorites() {

    currentQuery =
        "";


    const favoriteTools =
        aiTools.filter(
            tool =>
                favorites.includes(
                    Number(tool.id)
                )
        );


    currentResults =
        favoriteTools;


    displayResults(
        currentResults,
        "My Favorite AI Tools"
    );


    scrollToResults();

}


window.showFavorites =
    showFavorites;


async function addToCompare(toolId) {

    const id =
        Number(toolId);


    const tool =
        getToolById(id);


    if (!tool) {

        showNotification(
            "Tool not found."
        );

        return;

    }


    if (
        compareList.includes(id)
    ) {

        try {

            const response =
                await fetch(
                    `http://localhost:3000/api/comparisons/${encodeURIComponent(id)}`,
                    {
                        method:
                            "DELETE",

                        credentials:
                            "include"
                    }
                );


            const data =
                await response.json();


            if (
                !response.ok
            ) {

                throw new Error(
                    data.message ||
                    "Failed to remove comparison."
                );

            }


            compareList =
                compareList.filter(
                    compareId =>
                        compareId !== id
                );


            updateCompareButton();


            showNotification(
                `${tool.name} removed from comparison.`
            );


            if (
                compareList.length >= 2
            ) {

                showComparison();

            } else {

                closeComparison();

                displayResults(
                    currentResults,
                    "Recommended AI Tools"
                );

            }


        } catch (error) {

            console.error(
                "Remove comparison error:",
                error
            );


            showNotification(
                error.message ||
                "Failed to remove comparison."
            );

        }


        return;

    }

    if (
        compareList.length >= 3
    ) {

        showNotification(
            "You can compare up to 3 AI tools."
        );

        return;

    }


    
    try {

        const response =
            await fetch(
                "http://localhost:3000/api/comparisons",
                {
                    method:
                        "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    credentials:
                        "include",

                    body:
                        JSON.stringify({
                            toolId: id
                        })
                }
            );


        const data =
            await response.json();


        if (
            !response.ok
        ) {

            if (
                response.status ===
                401
            ) {

                showNotification(
                    "Please sign in to use Compare."
                );

                return;

            }


            throw new Error(
                data.message ||
                "Failed to add comparison."
            );

        }


        compareList.push(id);


        updateCompareButton();


        showNotification(
            `${tool.name} added to comparison.`
        );


        displayResults(
            currentResults,
            "Recommended AI Tools"
        );


       

        if (
            compareList.length >= 2
        ) {

            setTimeout(
                showComparison,
                200
            );

        }


    } catch (error) {

        console.error(
            "Add comparison error:",
            error
        );


        showNotification(
            error.message ||
            "Failed to add comparison."
        );

    }

}


window.addToCompare =
    addToCompare;


async function removeFromCompare(toolId) {

    const id =
        Number(toolId);


    try {

        const response =
            await fetch(
                `http://localhost:3000/api/comparisons/${encodeURIComponent(id)}`,
                {
                    method:
                        "DELETE",

                    credentials:
                        "include"
                }
            );


        const data =
            await response.json();


        if (
            !response.ok
        ) {

            throw new Error(
                data.message ||
                "Failed to remove comparison."
            );

        }


        compareList =
            compareList.filter(
                item =>
                    item !== id
            );


        updateCompareButton();


        closeComparison();


        displayResults(
            currentResults,
            "Recommended AI Tools"
        );


        if (
            compareList.length >= 2
        ) {

            showComparison();

        } else {

            showNotification(
                "Tool removed from comparison."
            );

        }


    } catch (error) {

        console.error(
            "Remove comparison error:",
            error
        );


        showNotification(
            error.message ||
            "Failed to remove comparison."
        );

    }

}


window.removeFromCompare =
    removeFromCompare;


async function clearComparison() {

    try {

        const response =
            await fetch(
                "http://localhost:3000/api/comparisons",
                {
                    method:
                        "DELETE",

                    credentials:
                        "include"
                }
            );


        const data =
            await response.json();


        if (
            !response.ok
        ) {

            throw new Error(
                data.message ||
                "Failed to clear comparison."
            );

        }


        compareList =
            [];


        updateCompareButton();


        closeComparison();


        displayResults(
            currentResults,
            "Recommended AI Tools"
        );


        showNotification(
            "Comparison cleared."
        );


    } catch (error) {

        console.error(
            "Clear comparison error:",
            error
        );


        showNotification(
            error.message ||
            "Failed to clear comparison."
        );

    }

}


window.clearComparison =
    clearComparison;




async function loadToolsFromBackend() {

    try {

        const response =
            await fetch(
                "http://localhost:3000/api/tools"
            );


        if (
            !response.ok
        ) {

            throw new Error(
                `HTTP error! Status: ${response.status}`
            );

        }


        const databaseTools =
            await response.json();


        console.log(
            "RDS data received:",
            databaseTools
        );


        

        aiTools.length =
            0;


        databaseTools.forEach(
            tool => {

                aiTools.push({

                    id:
                        Number(tool.id),

                    name:
                        tool.name,

                    category:
                        tool.category,

                    rating:
                        Number(
                            tool.rating
                        ) || 0,

                    icon:
                        tool.icon ||
                        "🤖",

                    price:
                        tool.price ||
                        "Free",

                    url:
                        tool.url ||
                        "#",

                    keywords:
                        tool.keywords ||
                        [],

                    tasks:
                        tool.tasks ||
                        [],

                    description:
                        tool.description ||
                        ""

                });

            }
        );


        console.log(
            `✅ ${aiTools.length} AI tools loaded from AWS RDS`
        );


        

        await loadUserListsFromBackend();


        currentResults =
            [...aiTools];


        displayResults(
            currentResults,
            "Recommended AI Tools"
        );


        updateCompareButton();


        console.log(
            "RDS categories:",
            [
                ...new Set(
                    aiTools.map(
                        tool =>
                            tool.category
                    )
                )
            ]
        );


    } catch (error) {

        console.error(
            "❌ Failed to load tools from AWS RDS:",
            error
        );


        currentResults =
            [...aiTools];


        displayResults(
            currentResults
        );

    }

}




async function secureLogout() {

    try {

        await fetch(
            "http://localhost:3000/api/logout",
            {
                method:
                    "POST",

                credentials:
                    "include"
            }
        );

    } catch (error) {

        console.error(
            "Logout error:",
            error
        );

    }


    

    localStorage.removeItem(
        "auAppFinderLoggedIn"
    );


    localStorage.removeItem(
        "auAppFinderUser"
    );


    

    localStorage.removeItem(
        "auAppFinderFavorites"
    );


    localStorage.removeItem(
        "auCompareList"
    );


    favorites =
        [];


    compareList =
        [];


    updateCompareButton();


    window.location.reload();

}


window.secureLogout =
    secureLogout;


document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadUserListsFromBackend();

    }
);