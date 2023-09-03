import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    flutter,
    nextjs,
    python,
    chegg,
    upworx,
    sudoku,
    todolist,
    veganstore,
    s7works,
} from "../assets";
export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];
const introduction =
    "Hello! I'm a passionate full stack developer proficient in TypeScript, JavaScript, and frameworks such as React, Node.js, and Next.js. My expertise also extends to managing MySQL and MongoDB databases. Crafting UIs using Tailwind CSS, Sass/SCSS is a passion, ensuring elegant and responsive designs that adapt seamlessly to various devices. With a deep appreciation for harmonizing design and functionality, I'm dedicated to crafting comprehensive digital solutions. Let's work together to bring your ideas to life!";
const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Flutter Developer",
        icon: mobile,
    },
    {
        title: "Frontend Developer",
        icon: backend,
    },
    {
        title: "Backend Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
        proficiency: "100%",
    },
    {
        name: "CSS 3",
        icon: css,
        proficiency: "100%",
    },
    {
        name: "JavaScript",
        icon: javascript,
        proficiency: "100%",
    },
    {
        name: "TypeScript",
        icon: typescript,
        proficiency: "90%",
    },
    {
        name: "React JS",
        icon: reactjs,
        proficiency: "100%",
    },
    {
        name: "Redux Toolkit",
        icon: redux,
        proficiency: "100%",
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
        proficiency: "100%",
    },
    {
        name: "Node JS",
        icon: nodejs,
        proficiency: "100%",
    },
    {
        name: "MongoDB",
        icon: mongodb,
        proficiency: "80%",
    },
    {
        name: "git",
        icon: git,
        proficiency: "100%",
    },
    {
        name: "Flutter",
        icon: flutter,
        proficiency: "100%",
    },
    {
        name: "Python",
        icon: python,
        proficiency: "80%",
    },
    {
        name: "Next.js",
        icon: nextjs,
        proficiency: "90%",
    },
];

const experiences = [
    {
        title: "Frontend Developer",
        company_name: "S7 works",
        icon: s7works,
        iconBg: "#000000",
        date: "Jul 2022 - Present",
        points: [
            "Developing and maintaining applications using React.js, Next.js, Flutter and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Worked on various products like Workahub, Bitwork and other products.",
        ],
    },
    {
        title: "Freelance Frontend Developer",
        company_name: "Upworx Technologies",
        icon: upworx,
        iconBg: "#E6DEDD",
        date: "Mar 2022 - Apr 2023",
        points: [
            "Developing and maintaining website using bootstrap, javascript and other technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Collaborating with teams to create high-quality features.",
            "Participating in code reviews and unit testing with testers and product managers.",
        ],
    },
    {
        title: "Subject Matter Expert",
        company_name: "Chegg",
        icon: chegg,
        iconBg: "#383E56",
        date: "Aug 2020 - Jul 2022",
        points: [
            "Helping students to solve their Computer Science problems.",
            "Maintained a CF score of more than 90.",
            "Helped in identifying bugs in their bug finding events.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Sudoku",
        description:
            "Featuring a sleek design, I've integrated helpful features like hint systems and progress tracking, making it perfect for Sudoku enthusiasts of all levels.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "algorithm",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: sudoku,
        source_code_link: "https://github.com/GauravKumar547/sudoku",
        live_link: "https://sudoku-by-gaurav.web.app/",
    },
    {
        name: "TODO list",
        description:
            "Web application that enables users to easily create, organize their tasks to boost your productivity with ease with a simple ui and user experience.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: todolist,
        source_code_link: "https://github.com/GauravKumar547/todo",
        live_link: "https://todolist-by-gaurav.web.app/",
    },
    {
        name: "Vegan Store Template",
        description:
            "Vegan store template for a sustainable, plant-based shopping experience. Find a wide range of cruelty-free products in one convenient place.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "responsive",
                color: "pink-text-gradient",
            },
        ],
        image: veganstore,
        source_code_link: "https://github.com/GauravKumar547/veganstore-template-by-gaurav",
        live_link: "https://gauravkumar547.github.io/veganstore-template-by-gaurav/",
    },
];

export { services, introduction, technologies, experiences, testimonials, projects };
