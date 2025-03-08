// Portfolio data in JSON format

const portfolioData = {
    personal: {
        name: "Ridho Gymnastiar Al Rasyid",
        title: "Java Backend Developer",
        photo: "./profile_me.jpg", // Replace with your photo URL
        email: "ridhogymnastiar.ar@gmail.com",
        phone: "+6285280453125",
        linkedin: "linkedin.com/in/ridhogaa",
        github: "github.com/ridhogaa",
        about: "As an Informatics Engineering graduate from YARSI University with 3 years of experience in Java and Kotlin development, I bring a versatile skill set and a passion for building impactful software solutions. I started my career as an Android Developer, mastering the art of creating seamless, user-friendly mobile applications. Driven by a desire to solve more complex challenges, I transitioned to backend development, where I specialize in crafting scalable and efficient systems using Java and the Spring Boot Framework. I thrive in dynamic environments that push me to innovate and elevate my technical abilities. My approach combines a strong foundation in software engineering principles with a hands-on commitment to quality and performance. I am always eager to tackle new challenges, collaborate with talented teams, and contribute to projects that make a real difference."
    },
    education: [
        {
            institution: "YARSI UNIVERSITY",
            location: "Jakarta, Indonesia",
            degree: "Bachelor of Informatics Engineering",
            gpa: "3.93/4.00",
            startDate: "Sept 2020",
            endDate: "Jan 2024",
            description: "Graduated with honors from the Informatics Engineering program, focusing on software development and engineering principles."
        }
    ],
    experience: [
        {
            position: "Java Developer",
            company: "PT. Midas Daya Teknologi Indonesia",
            type: "Full Time",
            location: "Jakarta",
            startDate: "June 2024",
            endDate: "Present",
            description: "Banking Project at Bank Muamalat Indonesia",
            responsibilities: [
                "Develop clean, efficient, and maintainable Java code to enhance the functionality and performance of critical applications.",
                "Implement new features and functionalities, closely aligning with project requirements to drive innovation and deliver value.",
                "Conduct comprehensive unit and integration testing to ensure the highest code quality and promptly address any bugs or issues.",
                "Collaborate with cross-functional teams through peer code reviews, fostering a culture of continuous improvement and excellence.",
                "Provide proactive support and maintenance for applications and websites, ensuring seamless user experiences and system reliability.",
                "Troubleshoot and resolve application and website issues efficiently, minimizing downtime and optimizing performance.",
                "Utilize version control systems, such as Git, to effectively manage code versions.",
                "Developed a middleware service to integrate other services, streamlining processes and enhancing overall operational efficiency."
            ]
        },
        {
            position: "Backend Engineering - Participant",
            company: "SYNRGY Academy",
            type: "Part Time",
            location: "Jakarta",
            startDate: "Feb 2024",
            endDate: "Aug 2024",
            description: "Selected as the Most Progressive Student Graduate from 10 of 180 Participants.",
            responsibilities: [
                "Learn the Java programming language and apply basic programming principles flawlessly.",
                "Utilized object-oriented programming (OOP) paradigm and Exception Handling to design reliable and stable applications.",
                "Innovate by modifying the OOP paradigm and functional style and apply unit testing appropriately to ensure optimal code quality.",
                "Apply Spring Boot technology to design database structure through ERD and Store Procedure CRUD efficiently.",
                "Use Spring Web to develop responsive and effective RESTful APIs.",
                "Carefully implement security layers to ensure strong authorization and authentication in applications.",
                "Adopt Spring Kafka and Spring Gateway technologies in developing applications with scalable and reliable microservices architecture.",
                "Optimized application performance by leveraging various third-party services commonly used by Java Backend Engineers."
            ]
        },
        {
            position: "Android Developer",
            company: "PT. AMANAH KARYA INDONESIA",
            type: "Full Time",
            location: "Jakarta",
            startDate: "Dec 2023",
            endDate: "Apr 2024",
            description: "",
            responsibilities: [
                "Develop application for official internal Employee Self Service Application (ESSA) platform for PT. Toyota Motor Manufacturing Indonesia employees.",
                "Optimize some existing code functionality for better performance.",
                "Build robust, reliable, and clean code for better maintenance development.",
                "Building new Features and Maintenance the application using the ReactiveX Library and Architecture Component.",
                "Develop features in accordance with the specified documents & tasks to be delivered to the staging stage and then to production."
            ]
        },
        {
            position: "Mobile Engineer Track Course – Assistant Lecturer",
            company: "YARSI University",
            type: "Part Time",
            location: "Jakarta",
            startDate: "Sep 2023",
            endDate: "Jan 2024",
            description: "",
            responsibilities: [
                "Asses & Evaluate Students Assignment.",
                "Giving Constructive Feedback to Help Them Improve Their Coding Skills.",
                "Creating questions and teaching materials such as SDLC, SCRUM, Kotlin Basics, Kotlin OOP, Android Activities, Fragments, Navigation and View Binding, Android UI/UX, Using Recycled Views, Using View Models & LiveData, Connecting with Firebase, Using Local Storage."
            ]
        },
        {
            position: "Mobile Development - Participant",
            company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
            type: "Full Time",
            location: "Jakarta",
            startDate: "Feb 2023",
            endDate: "July 2023",
            description: "Selected as the Best Mobile Development Graduate from 10% of 5000 participants.",
            responsibilities: [
                "Attend all Bangkit Team Meeting and Instructor Led-Training sessions, which has 3 types (soft skills, english, and tech/hard skills).",
                "Finish every assignment for each week within deadline.",
                "Finish all mandatory courses for Android Learning Path on Dicoding platform.",
                "Collaborate with Cloud Computing and Machine Learning teams to create the TummyFit App (Personalized Healthy Meal App)."
            ]
        },
        {
            position: "Android Engineering - Participant",
            company: "Binar Academy",
            type: "Part Time",
            location: "Jakarta",
            startDate: "Aug 2022",
            endDate: "Jan 2023",
            description: "",
            responsibilities: [
                "Understand the programming basics and declarations of the Kotlin programming language.",
                "Implement data structures, control flow, classes, objects, and functions in Kotlin.",
                "Apply programming principles and use Android development support tools.",
                "Design user interfaces (UI) and manage activities, fragments, and navigation between screens.",
                "Build Android applications using ViewModel, Data Binding, LiveData, and other components.",
                "Connecting the Android app to the server and displaying data using Retrofit and managing data storage with ROOM.",
                "Collaborated with Fullstack Developer teams to create the E-Flight App (Booking Flight App)."
            ]
        },
        {
            position: "Object-Oriented Programming Course - Assistant Lecturer",
            company: "YARSI University",
            type: "Part Time",
            location: "Jakarta",
            startDate: "Jul 2022",
            endDate: "May 2023",
            description: "",
            responsibilities: [
                "Asses & Evaluate Students Assignment.",
                "Giving Constructive Feedback to Help Them Improve Their Coding Skills with Java Programming Language.",
                "Creating questions and teaching materials such as Basic OOP, Encapsulation, Inheritance, Abstraction, SOLID Principle, GUI with Java Swing, Multithreading, Connect JDBC (MySQL) to GUI."
            ]
        },
        {
            position: "Database 1 Course - Assistant Lecturer",
            company: "YARSI University",
            type: "Part Time",
            location: "Jakarta",
            startDate: "Feb 2022",
            endDate: "Jun 2022",
            description: "",
            responsibilities: [
                "Asses & Evaluate Students Assignment.",
                "Giving Constructive Feedback to Help Them Improve Their Coding Skills with PostgreSQL.",
                "Creating questions and teaching materials such as PostgreSQL and database concepts."
            ]
        }
    ],
    projects: [
        {
            name: "FoodApp",
            description: "Web Service about online food ordering application where users can order food and admin can get reports from user orders.",
            technologies: ["Spring Boot Framework", "JPA", "PostgreSQL", "Java", "Hibernate", "Security", "Jasper", "Mailer", "Oauth2", "MVC", "Docker"],
            year: "2024",
            image: "https://api.placeholder.com/600/400" // Replace with project image
        },
        {
            name: "SimpleBankApp",
            description: "SimpleBank is a mobile and web-based banking application designed for all users, including users with visual disabilities. SimpleBank is specially designed with blind and low vision friendly features.",
            technologies: ["Spring Boot Framework", "JPA", "PostgreSQL", "Java", "Hibernate", "Security", "Jasper", "Mailer", "Oauth2", "MVC", "GCP", "Docker"],
            year: "2024",
            image: "https://api.placeholder.com/600/400" // Replace with project image
        }
    ],
    skills: [
        { name: "Spring Boot", icon: "fab fa-java" },
        { name: "JPA", icon: "fas fa-database" },
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "CI/CD", icon: "fas fa-sync" },
        { name: "RESTful APIs", icon: "fas fa-server" },
        { name: "Java", icon: "fab fa-java" },
        { name: "Hibernate", icon: "fas fa-code" },
        { name: "PostgreSQL", icon: "fas fa-database" },
        { name: "Deployment", icon: "fas fa-cloud-upload-alt" },
        { name: "Scrum", icon: "fas fa-users" },
        { name: "MVC", icon: "fas fa-sitemap" },
        { name: "Microservice", icon: "fas fa-cubes" },
        { name: "Oauth2", icon: "fas fa-lock" },
        { name: "Docker", icon: "fab fa-docker" },
        { name: "GCP", icon: "fab fa-google" }
    ],
};