const expertise = [
    {
        id: 0,
        title: 'SOFTWARE ENGINEER',
        company:"NOWASYS SERVICES PVT. LTD",
        duration:"AUG 2023 – PRESENT",
        desc: 'In prior roles, I contributed to Next.js projects, implemented frontend features, and improved security by integrating Appwrite. I developed backend APIs, incorporating Appwrite features and third-party APIs, streamlining integration for a more efficient system. Committed to growth, I pursued learning Nest.js for advanced backend development.',
    },
    {
        id: 3,
        title: 'FRONTEND ENGINEER',
        company:"EZWAGE PVT. LTD",
        duration:"AUG 2022 – AUG 2023",
        desc: "As a frontend developer at EZWAGE, I optimized and enhanced the codebase, conducted thorough code reviews, and collaborated on a more user-friendly design. I actively contributed to cross-functional discussions, integrated frontend with backend APIs, and ensured responsive design and consistent functionality across devices and browsers.",
    },
    {
        id: 4,
        title: 'FULL STACK DEVELOPER',
        company:"YOURGUIDE",
        duration:"AUG 2021 – JUL 2022",
        desc: "At YOURGUIDE, I served as the sole full stack developer, playing a pivotal role in developing and launching the platform. Using React and Next.js for frontend and Node.js, Express.js, and Sequelize for backend, I crafted intuitive and responsive interfaces. Collaborating closely with stakeholders, I gathered requirements, defined scope, and delivered features aligned with the startup's vision. I also optimized the codebase for improved application performance.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
