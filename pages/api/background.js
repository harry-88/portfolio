const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'UMT',
                degree: 'BS, Computer Science',
                detail: "Bachelor's Degree in Computer Science from UMT.",
                year: '2019-2023'
            },
            {
                id: 1,
                title: 'LCBS',
                degree: 'HSSC, Pre Engineering',
                detail: "Completed ICS part 1 and part 2 from LCBS.",
                year: '2017-2019'
            },
            {
                id: 2,
                title: 'GOVT High  school, lahore',
                degree: 'SSC, Science Subjects',
                detail: "Completed SSC part 1 and part 2 in Computer Science.",
                year: '2016-2017'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'NOWASYS SERVICES PVT. LTD',
                role: 'SOFTWARE ENGINEER',
                url: '',
                desc: 'In prior roles, I contributed to Next.js projects, implemented frontend features, and improved security by integrating Appwrite. I developed backend APIs, incorporating Appwrite features and third-party APIs, streamlining integration for a more efficient system. Committed to growth, I pursued learning Nest.js for advanced backend development.',
                year: "AUG 2023 – PRESENT",
                location: 'Lahore, Pakistan'
            },
            {
                id: 2,
                title: 'EZWAGE PVT. LTD',
                role: 'FRONTEND ENGINEER',
                url: '',
                desc: 'As a frontend developer at EZWAGE, I optimized and enhanced the codebase, conducted thorough code reviews, and collaborated on a more user-friendly design. I actively contributed to cross-functional discussions, integrated frontend with backend APIs, and ensured responsive design and consistent functionality across devices and browsers.',
                year: "AUG 2022 – AUG 2023",
                location: 'Lahore, Pakistan'
            },
            {
                id: 3,
                title: 'FULL STACK DEVELOPER',
                role: 'FULL STACK Developer',
                url: '',
                desc: "At YOURGUIDE, I served as the sole full stack developer, playing a pivotal role in developing and launching the platform. Using React and Next.js for frontend and Node.js, Express.js, and Sequelize for backend, I crafted intuitive and responsive interfaces. Collaborating closely with stakeholders, I gathered requirements, defined scope, and delivered features aligned with the startup's vision. I also optimized the codebase for improved application performance.",
                year: '"AUG 2021 – JUL 2022"',
                location: 'Lahore, Pakistan'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
