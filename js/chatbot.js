/* ==========================================================
   DR. JAN NOEL VERO
   PORTFOLIO ASSISTANT

   Shared across:
   Home
   About
   Experience
   Projects
   Academic
   CV
   Contact
   ========================================================== */


document.addEventListener("DOMContentLoaded", function () {


    /* ======================================================
       ELEMENTS
       ====================================================== */

    const chatbotToggle =
        document.getElementById("chatbot-toggle");

    const chatbot =
        document.getElementById("chatbot");

    const chatbotClose =
        document.getElementById("chatbot-close");

    const chatbotMessages =
        document.getElementById("chatbot-messages");

    const chatbotForm =
        document.getElementById("chat-question-form");

    const chatbotInput =
        document.getElementById("chat-question-input");

    const visitorButtons =
        document.querySelectorAll("[data-visitor]");

    const quickQuestionButtons =
        document.querySelectorAll("[data-chat]");


    let visitorType = "";


    /* ======================================================
       SAFETY CHECK
       ====================================================== */

    if (
        !chatbotToggle ||
        !chatbot ||
        !chatbotMessages
    ) {
        return;
    }



    /* ======================================================
       OPEN ASSISTANT
       ====================================================== */

    function openChatbot() {

        chatbot.classList.add("open");

        chatbotToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        setTimeout(function () {

            if (chatbotInput) {
                chatbotInput.focus();
            }

        }, 150);

    }



    /* ======================================================
       CLOSE ASSISTANT
       ====================================================== */

    function closeChatbot() {

        chatbot.classList.remove("open");

        chatbotToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }



    chatbotToggle.addEventListener(
        "click",
        function () {

            if (chatbot.classList.contains("open")) {

                closeChatbot();

            } else {

                openChatbot();

            }

        }
    );


    if (chatbotClose) {

        chatbotClose.addEventListener(
            "click",
            closeChatbot
        );

    }



    /* ======================================================
       ESCAPE KEY
       ====================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                chatbot.classList.contains("open")
            ) {

                closeChatbot();

            }

        }
    );



    /* ======================================================
       CREATE MESSAGE
       ====================================================== */

    function addMessage(
        message,
        sender = "bot",
        allowHTML = false
    ) {

        const messageElement =
            document.createElement("div");


        messageElement.className =
            sender === "user"
                ? "user-message"
                : "bot-message";


        if (allowHTML) {

            messageElement.innerHTML = message;

        } else {

            messageElement.textContent = message;

        }


        chatbotMessages.appendChild(
            messageElement
        );


        chatbotMessages.scrollTop =
            chatbotMessages.scrollHeight;

    }



    /* ======================================================
       NORMALIZE QUESTION
       ====================================================== */

    function normalizeQuestion(question) {

        return question
            .toLowerCase()
            .replace(/[^\w\s]/g, " ")
            .replace(/\s+/g, " ")
            .trim();

    }



    /* ======================================================
       KEYWORD MATCHING
       ====================================================== */

    function containsAny(text, words) {

        return words.some(function (word) {

            return text.includes(word);

        });

    }



    /* ======================================================
       VISITOR CONTEXT
       ====================================================== */

    visitorButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                visitorType =
                    button.dataset.visitor || "";


                visitorButtons.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add("active");


                let response = "";


                switch (visitorType) {


                    case "Recruiter":

                        response =
                            "Welcome. If you are reviewing Dr. Vero for a professional opportunity, I can summarize his experience, leadership background, hospitality expertise, analytics portfolio, academic qualifications, skills, and career history.";

                        break;


                    case "Hotel Executive":

                        response =
                            "Welcome. Dr. Vero has extensive hospitality experience across hotel sales, events, commercial leadership, business development, customer experience, and tourism. I can also show how he applies analytics to hospitality and competitive intelligence.";

                        break;


                    case "Academic":

                        response =
                            "Welcome. I can help you review Dr. Vero's teaching experience, academic leadership, education, research interests, supervision experience, and the connection between his industry background and academic practice.";

                        break;


                    case "Researcher":

                        response =
                            "Welcome. I can provide information about Dr. Vero's research background, selected research work, research supervision, analytical approach, and his emphasis on evidence interpretation and practical implications.";

                        break;


                    case "Potential Client":

                        response =
                            "Welcome. I can help you explore Dr. Vero's experience in hospitality, tourism, business analytics, competitive analysis, research, education, partnerships, and strategic decision support.";

                        break;


                    default:

                        response =
                            "Welcome. Ask me about Dr. Vero's professional experience, hospitality background, analytics projects, academic work, research, education, qualifications, or contact information.";

                        break;

                }


                addMessage(
                    response,
                    "bot"
                );

            }
        );

    });



    /* ======================================================
       PORTFOLIO KNOWLEDGE BASE
       ====================================================== */

    function getPortfolioAnswer(question) {

        const q =
            normalizeQuestion(question);



        /* --------------------------------------------------
           GREETING
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "hello",
                    "hi ",
                    "hey",
                    "good morning",
                    "good afternoon",
                    "good evening"
                ]
            ) ||
            q === "hi"
        ) {

            return (
                "Hello. I am Dr. Jan Noel Vero's portfolio assistant. " +
                "You can ask me about his professional experience, " +
                "hospitality background, analytics projects, academic work, " +
                "research, qualifications, or contact information."
            );

        }



        /* --------------------------------------------------
           WHO IS DR. VERO
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "who is",
                    "tell me about jan",
                    "tell me about dr vero",
                    "about dr vero",
                    "professional profile",
                    "background"
                ]
            )
        ) {

            return (
                "Dr. Jan Noel Vero is a multidisciplinary professional " +
                "whose background connects hospitality and tourism, " +
                "commercial leadership, sales and events, higher education, " +
                "research, partnerships, and business and data analytics. " +
                "His career spans more than fifteen years across industry " +
                "and academic environments in Germany and the Philippines."
            );

        }



        /* --------------------------------------------------
           YEARS OF EXPERIENCE
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "how many years",
                    "years of experience",
                    "how long has",
                    "experience length"
                ]
            )
        ) {

            return (
                "Dr. Vero has more than fifteen years of professional " +
                "experience across hospitality sales, events management, " +
                "business development, executive education, higher education, " +
                "academic leadership, partnerships, and related management roles."
            );

        }



        /* --------------------------------------------------
           EXPERIENCE
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "experience",
                    "career",
                    "employment",
                    "work history",
                    "professional journey",
                    "previous roles",
                    "previous job",
                    "positions"
                ]
            )
        ) {

            return (
                "Dr. Vero's career includes hospitality leadership, " +
                "sales and events, business development, executive education, " +
                "academic leadership, teaching, research, and partnerships. " +
                "His experience includes Taal Vista Hotel, Pico Sands Hotel, " +
                "the Asian Institute of Management, the University of Makati, " +
                "Philippine Christian University, De La Salle University " +
                "Dasmariñas, the Berlin School of Business and Innovation, " +
                "and other higher education environments. " +
                "You can review the complete chronology on the Experience and CV pages."
            );

        }



        /* --------------------------------------------------
           CURRENT OR RECENT ROLE
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "current role",
                    "current job",
                    "latest role",
                    "recent role",
                    "most recent role"
                ]
            )
        ) {

            return (
                "The portfolio records Dr. Vero as Professor at the " +
                "Berlin School of Business and Innovation from February 2024 " +
                "to February 2026. It also records adjunct faculty work " +
                "associated with the University for the Creative Arts and " +
                "the University of Roehampton during 2024 to 2026. " +
                "For current professional availability, please contact him directly."
            );

        }



        /* --------------------------------------------------
           HOSPITALITY
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "hospitality",
                    "hotel",
                    "tourism experience",
                    "hotel experience",
                    "hospitality expertise"
                ]
            )
        ) {

            return (
                "Dr. Vero has substantial hospitality and tourism experience " +
                "across hotel sales, events, customer experience, business " +
                "development, commercial strategy, tourism, and management. " +
                "His hotel career includes Taal Vista Hotel and Pico Sands Hotel, " +
                "including senior responsibilities in national sales and sales " +
                "and events leadership."
            );

        }



        /* --------------------------------------------------
           TAAL VISTA
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "taal vista",
                    "pico sands"
                ]
            )
        ) {

            return (
                "Dr. Vero served as Sales and Events Department Head, " +
                "Senior Manager at Taal Vista Hotel from January 2018 " +
                "to October 2022. Earlier, he served as National Sales Manager " +
                "for Taal Vista Hotel and Pico Sands Hotel from August 2016 " +
                "to May 2017, and as Sales Assistant at Taal Vista Hotel " +
                "from 2009 to 2011."
            );

        }



        /* --------------------------------------------------
           SALES
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "sales",
                    "revenue",
                    "commercial",
                    "business development",
                    "b2b",
                    "b2c",
                    "client management",
                    "events",
                    "mice"
                ]
            )
        ) {

            return (
                "Dr. Vero's commercial background includes sales and revenue " +
                "leadership, events and MICE, business development, B2B and B2C " +
                "sales, partnerships, stakeholder and client management, " +
                "strategic planning, and team leadership. His experience spans " +
                "hotel environments and executive education."
            );

        }



        /* --------------------------------------------------
           ASIAN INSTITUTE OF MANAGEMENT
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "asian institute of management",
                    "aim",
                    "seell"
                ]
            )
        ) {

            return (
                "At the Asian Institute of Management in Makati, Dr. Vero " +
                "served as SEELL Department Head and Senior Manager for Program " +
                "and Partnerships from July 2023 to November 2023. The role " +
                "covered executive education, program management, partnerships, " +
                "B2B and B2C sales, stakeholder engagement, and business development."
            );

        }



        /* --------------------------------------------------
           ANALYTICS
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "analytics",
                    "data analyst",
                    "data analytics",
                    "business analyst",
                    "business analytics",
                    "data analysis",
                    "analytical"
                ]
            )
        ) {

            return (
                "Dr. Vero's analytics work applies data preparation, Python, SQL, " +
                "visualization, statistical analysis, machine learning, business " +
                "intelligence, and evidence based interpretation to business questions. " +
                "His portfolio particularly connects analytics with hospitality, " +
                "tourism, customer experience, and competitive analysis."
            );

        }



        /* --------------------------------------------------
           TOOLS
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "python",
                    "sql",
                    "tableau",
                    "machine learning",
                    "tools",
                    "technical skills",
                    "technology",
                    "software"
                ]
            )
        ) {

            return (
                "The analytics portfolio demonstrates work with Python, SQL, " +
                "Tableau, data cleaning, visualization, statistical analysis, " +
                "machine learning, business intelligence, competitive analysis, " +
                "hospitality analytics, and tourism analytics."
            );

        }



        /* --------------------------------------------------
           PROJECTS GENERAL
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "projects",
                    "portfolio projects",
                    "analytics projects",
                    "project portfolio",
                    "case studies"
                ]
            )
        ) {

            return (
                "Selected projects include Germany Tourism Analysis, " +
                "Philippine Tourism Competitiveness, Manila Integrated Resort Analysis, " +
                "Taal Vista Hotel Analysis, Spotify Popularity Analysis, " +
                "and Airbnb Business Analysis. These projects cover tourism analytics, " +
                "competitive intelligence, hospitality analytics, customer analytics, " +
                "business analysis, statistics, visualization, SQL, and machine learning."
            );

        }



        /* --------------------------------------------------
           GERMANY TOURISM
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "germany tourism",
                    "german tourism"
                ]
            )
        ) {

            return (
                "The Germany Tourism Analysis examines tourism performance, " +
                "international competitiveness, visitor trends, growth opportunities, " +
                "and strategic priorities. The project uses analytical and business " +
                "intelligence methods to connect tourism indicators with strategic decisions."
            );

        }



        /* --------------------------------------------------
           PHILIPPINE TOURISM
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "philippine tourism",
                    "philippines tourism",
                    "tourism competitiveness"
                ]
            )
        ) {

            return (
                "The Philippine Tourism Competitiveness project assesses tourism " +
                "performance and regional competitiveness using comparative international " +
                "tourism indicators. Its analytical focus includes international arrivals, " +
                "regional comparison, tourism growth, and competitive positioning."
            );

        }



        /* --------------------------------------------------
           MANILA RESORT
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "manila integrated resort",
                    "integrated resort",
                    "casino hotel",
                    "casino resort"
                ]
            )
        ) {

            return (
                "The Manila Integrated Resort Analysis is a hospitality competitive " +
                "intelligence project examining major Manila integrated resorts. " +
                "It connects hotel and resort performance with guest experience, " +
                "ratings, facilities, value, and competitive positioning."
            );

        }



        /* --------------------------------------------------
           TAAL VISTA ANALYTICS
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "taal vista analysis",
                    "taal vista project",
                    "hotel review analysis",
                    "guest review"
                ]
            )
        ) {

            return (
                "The Taal Vista Hotel Analysis examines hotel information and guest " +
                "review data, including ratings, customer experience, review behavior, " +
                "management responses, and service performance. It combines hospitality " +
                "context with statistical and customer analytics."
            );

        }



        /* --------------------------------------------------
           SPOTIFY
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "spotify",
                    "music analysis",
                    "popularity analysis"
                ]
            )
        ) {

            return (
                "The Spotify Popularity Analysis investigates relationships between " +
                "track, artist, release, and other variables. It combines exploratory " +
                "analysis, statistics, predictive modeling, and business recommendations " +
                "to examine factors associated with track popularity."
            );

        }



        /* --------------------------------------------------
           AIRBNB
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "airbnb",
                    "accommodation analysis"
                ]
            )
        ) {

            return (
                "The Airbnb Business Analysis uses accommodation data to demonstrate " +
                "data cleaning, relational database design, SQL, visualization, and " +
                "structured business analysis. It focuses on accommodation performance, " +
                "market patterns, and evidence based business questions."
            );

        }



        /* --------------------------------------------------
           ACADEMIC
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "academic",
                    "teaching",
                    "professor",
                    "lecturer",
                    "faculty",
                    "higher education"
                ]
            )
        ) {

            return (
                "Dr. Vero has extensive higher education experience across teaching, " +
                "academic leadership, curriculum related work, research supervision, " +
                "advising, and student development. His academic appointments include " +
                "institutions in Germany, the United Kingdom, and the Philippines."
            );

        }



        /* --------------------------------------------------
           BSBI
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "bsbi",
                    "berlin school"
                ]
            )
        ) {

            return (
                "Dr. Vero served as Professor at the Berlin School of Business " +
                "and Innovation in Berlin, Germany, from February 2024 to February 2026. " +
                "His work involved teaching and academic engagement within an " +
                "international business education environment."
            );

        }



        /* --------------------------------------------------
           EDUCATION
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "education",
                    "degree",
                    "degrees",
                    "qualification",
                    "qualifications",
                    "phd",
                    "doctorate",
                    "mba",
                    "postdoctoral",
                    "postdoc"
                ]
            )
        ) {

            return (
                "Dr. Vero completed Postdoctoral Studies in Strategic Leadership " +
                "and Management at Philippine Christian University in 2025, " +
                "a PhD in Development Administration in 2016, " +
                "an MBA in 2012, and a Bachelor of Science in Hotel and " +
                "Restaurant Management in 2009."
            );

        }



        /* --------------------------------------------------
           RESEARCH
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "research",
                    "publication",
                    "publications",
                    "paper",
                    "journal",
                    "researcher",
                    "supervision",
                    "research supervision"
                ]
            )
        ) {

            return (
                "Dr. Vero's academic profile includes research, research supervision, " +
                "and applied inquiry. Selected work listed in the portfolio includes " +
                "research on emotional labor, job stress, and burnout, and research " +
                "on university canteen compliance with international standards, both from 2023."
            );

        }



        /* --------------------------------------------------
           CERTIFICATIONS
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "certification",
                    "certifications",
                    "certificate",
                    "six sigma",
                    "green belt",
                    "yellow belt",
                    "hospitality professional",
                    "project management"
                ]
            )
        ) {

            return (
                "Certifications listed in Dr. Vero's portfolio include " +
                "Certified Hospitality Professional, Lean Six Sigma Green Belt, " +
                "Six Sigma Yellow Belt, and Project Management."
            );

        }



        /* --------------------------------------------------
           SKILLS
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "skills",
                    "expertise",
                    "strengths",
                    "core skills",
                    "competencies",
                    "capabilities"
                ]
            )
        ) {

            return (
                "Core areas of expertise include sales and revenue leadership, " +
                "events and MICE strategy, executive education, program development, " +
                "business development, partnerships, budget and P&L oversight, " +
                "team leadership, strategic planning, stakeholder management, " +
                "hospitality management, higher education, research, " +
                "business analytics, and data analytics."
            );

        }



        /* --------------------------------------------------
           LANGUAGES
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "language",
                    "languages",
                    "english",
                    "tagalog",
                    "cebuano",
                    "german"
                ]
            )
        ) {

            return (
                "The portfolio lists English at professional level, " +
                "Tagalog as fluent, Cebuano as native, and German as basic."
            );

        }



        /* --------------------------------------------------
           MEMBERSHIPS
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "membership",
                    "memberships",
                    "professional association",
                    "fellow hotelier",
                    "royal institution"
                ]
            )
        ) {

            return (
                "Professional memberships listed in the CV include the " +
                "International Organization of Educators and Researchers, " +
                "the Council of Hotel and Restaurant Educators of the Philippines, " +
                "Fellow Hotelier with the Royal Institution of Singapore, " +
                "and Family Peace Association International."
            );

        }



        /* --------------------------------------------------
           VOLUNTEER AND SERVICE
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "volunteer",
                    "service",
                    "navy",
                    "reservist",
                    "philippine navy"
                ]
            )
        ) {

            return (
                "The CV lists service as a reservist with the Armed Forces " +
                "of the Philippines, Philippine Navy, from 2022 to present, " +
                "and service as a Volunteer Professor with the Alliance of " +
                "Hospitality and Tourism Movers of the Philippines from 2022 to present."
            );

        }



        /* --------------------------------------------------
           LINKEDIN
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "linkedin"
                ]
            )
        ) {

            return (
                'You can view Dr. Vero\'s LinkedIn profile here: ' +
                '<a href="https://www.linkedin.com/in/jannoelvero/" ' +
                'target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>'
            );

        }



        /* --------------------------------------------------
           GITHUB
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "github",
                    "code repository",
                    "repositories"
                ]
            )
        ) {

            return (
                'You can explore Dr. Vero\'s GitHub portfolio here: ' +
                '<a href="https://github.com/jannoelvero" ' +
                'target="_blank" rel="noopener noreferrer">GitHub Portfolio</a>'
            );

        }



        /* --------------------------------------------------
           KAGGLE
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "kaggle",
                    "datasets"
                ]
            )
        ) {

            return (
                'You can explore Dr. Vero\'s Kaggle profile here: ' +
                '<a href="https://www.kaggle.com/jannoelvero" ' +
                'target="_blank" rel="noopener noreferrer">Kaggle Profile</a>'
            );

        }



        /* --------------------------------------------------
           EMAIL
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "email",
                    "email address"
                ]
            )
        ) {

            return (
                'Dr. Vero\'s professional email is ' +
                '<a href="mailto:jannoel.vero@gmail.com">' +
                'jannoel.vero@gmail.com</a>.'
            );

        }



        /* --------------------------------------------------
           CONTACT
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "contact",
                    "reach him",
                    "reach dr vero",
                    "get in touch",
                    "professional opportunity",
                    "job opportunity",
                    "collaboration",
                    "hire"
                ]
            )
        ) {

            return (
                'You can contact Dr. Vero through the ' +
                '<a href="contact.html">Contact page</a>, ' +
                'email him at ' +
                '<a href="mailto:jannoel.vero@gmail.com">' +
                'jannoel.vero@gmail.com</a>, or connect through ' +
                '<a href="https://www.linkedin.com/in/jannoelvero/" ' +
                'target="_blank" rel="noopener noreferrer">LinkedIn</a>.'
            );

        }



        /* --------------------------------------------------
           CV
           -------------------------------------------------- */

        if (
            containsAny(
                q,
                [
                    "cv",
                    "curriculum vitae",
                    "resume"
                ]
            )
        ) {

            return (
                'Dr. Vero\'s professional history, education, skills, ' +
                'certifications, research, memberships, service, and languages ' +
                'are summarized on the <a href="cv.html">CV page</a>.'
            );

        }



        /* --------------------------------------------------
           UNKNOWN
           -------------------------------------------------- */

        return null;

    }



    /* ======================================================
       DETERMINE WHETHER RESPONSE CONTAINS HTML
       ====================================================== */

    function responseContainsHTML(response) {

        return (
            response.includes("<a ") ||
            response.includes("<strong>") ||
            response.includes("<br")
        );

    }



    /* ======================================================
       UNKNOWN QUESTION
       ====================================================== */

    function createUnknownResponse(question) {

        const encodedQuestion =
            encodeURIComponent(question);


        return (
            "I don't have enough verified information in " +
            "Dr. Vero's portfolio to answer that accurately. " +
            "Rather than make an assumption, I recommend " +
            "contacting Dr. Vero directly with your question." +
            "<br><br>" +
            '<a href="contact.html?question=' +
            encodedQuestion +
            '#professional-inquiry">' +
            'Send this question to Dr. Vero</a>'
        );

    }



    /* ======================================================
       PROCESS QUESTION
       ====================================================== */

    function processQuestion(question) {

        const cleanQuestion =
            question.trim();


        if (!cleanQuestion) {
            return;
        }


        addMessage(
            cleanQuestion,
            "user"
        );


        const answer =
            getPortfolioAnswer(cleanQuestion);


        if (answer) {

            addMessage(
                answer,
                "bot",
                responseContainsHTML(answer)
            );

        } else {

            addMessage(
                createUnknownResponse(cleanQuestion),
                "bot",
                true
            );

        }

    }



    /* ======================================================
       QUICK QUESTIONS
       ====================================================== */

    quickQuestionButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const question =
                        button.dataset.chat;


                    if (question) {

                        processQuestion(question);

                    }

                }
            );

        }
    );



    /* ======================================================
       FREE FORM QUESTION
       ====================================================== */

    if (
        chatbotForm &&
        chatbotInput
    ) {

        chatbotForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const question =
                    chatbotInput.value;


                if (!question.trim()) {
                    return;
                }


                processQuestion(question);


                chatbotInput.value = "";


                chatbotInput.focus();

            }
        );

    }



    /* ======================================================
       END
       ====================================================== */

});