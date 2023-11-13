// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Haroon Arshad',
    image: "https://media.licdn.com/dms/image/D4D03AQEOKjGwLrgxMA/profile-displayphoto-shrink_200_200/0/1692962734328?e=1705536000&v=beta&t=QjWsiyzDadqGH-LTdlMOYqjKC-eVki7ok9R0jI7ArY8",
    designation: 'Business Intelligence Analyst | zameen.com & Olx (Dubizzle Group) | Tableau, Excel, Python, ETL',
    view: "I highly recommend Muhammad Haris as a full-stack developer at Nowasys Services. His expertise in both front-end and back-end development, coupled with strong problem-solving skills, consistently delivered exceptional results. Haris is a dedicated and collaborative team player with effective communication. His technical proficiency and positive attitude make him an invaluable asset. I wholeheartedly endorse Muhammad Haris for any future roles.",
    linkednURL: "https://www.linkedin.com/in/haroon-arshad-data-analyst/"
  },
  {
    id: 2,
    name: 'Hassaan Tariq    ',
    image: "https://media.licdn.com/dms/image/C4D03AQE0IsfriqI9Iw/profile-displayphoto-shrink_200_200/0/1652078913750?e=1705536000&v=beta&t=srnuUPwG7HrJf2Em4mGU-5K4xU1Z2O0v-gB60Un825Q",
    designation: 'Backend Engineer | JavaScript, Node JS, FinTech, Communication, Leadership | I help companies build scalable and reliable products',
    view: "I highly recommend Haris as a Full Stack Developer. He showed much more maturity in comparison to the experience he had when he joined EZ Wage. He has demonstrated exceptional proficiency in building robust and efficient web applications using React. His dedication and problem-solving skills make him a valuable asset to any team.",
    linkednURL: "https://www.linkedin.com/in/hassaan-tariq-731343110/"
  },
  {
    id: 1,
    name: 'Nauman Shabbir',
    image: "https://media.licdn.com/dms/image/D4D03AQGX4nPG1h-15w/profile-displayphoto-shrink_200_200/0/1668582530573?e=1705536000&v=beta&t=p8Jou78JpOrQefrDggUaQUMqLokrYH9HAHN3b5lhXus",
    designation: 'Backend Engineer | JavaScript, Node JS, Express JS, SQL, React JS | I Help Fintech Startups Drive 30% Faster Product Development at EZ Wage',
    view: "During our time working together at ezwage, I had the pleasure of witnessing Muhammad Haris's exceptional skills and dedication as a Front-End Developer. Haris possesses a deep understanding of front-end technologies and consistently delivered high-quality and visually appealing solutions. His attention to detail and creative approach to design challenges set him apart. Haris played a key role in development of Ezwage web portal, where his technical expertise significantly contributed to the success of the team. Beyond his technical capabilities, Haris is a great team player, always willing to collaborate and share insights. I highly recommend Muhammad Haris for his outstanding contributions to front-end development and his positive impact on our team at ezwage.",
    linkednURL: "https://www.linkedin.com/in/nauman-shabbir-6a0163235/"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
