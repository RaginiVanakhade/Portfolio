// import React from "react";

const experiences = [
  {
    role: "Software Developer",
    company: "Carmel Info System (Freelancing)",
    duration: "Dec 2025 – Present",
    points: [
      "Developing and maintaining a responsive customer and vendor portal for a logistics support system using React.js, Material UI, Tailwind CSS, and Ant Design.",
      "Implemented dynamic workflow features including ticket management, AMC validation, vendor assignment, quotation approval, and real-time status tracking.",
      "Integrated REST APIs, optimized UI performance, and ensured seamless deployment on AWS with scalable architecture support.",
    ],
  },
  {
    role: "Software Developer",
    company: "Bayanat Technology (Al Madina, Middle East)",
    duration: "Mar 2025 – Dec 2025",
    points: [
      "Developed and maintained a full-stack logistics management application for Al Madina, the largest logistics provider in the Middle East, using React.js, Material UI, Tailwind CSS, and Ant Design.",
      "Engineered robust back-end solutions with Node.js and Express.js, ensuring seamless integration with MySQL databases and optimizing data retrieval.",
      "Deployed applications on AWS, implementing best practices for cloud infrastructure management and high availability.",
    ],
  },
  {
    role: "Front End Developer (Internship)",
    company: "KAS Global Commerce Inc",
    duration: "May 2024 – Aug 2024",
    points: [
      "Built responsive web interfaces using HTML5, CSS3, JavaScript (ES6+), and React.js.",
      "Integrated REST APIs and optimized UI performance to deliver a smoother user experience.",
      "Collaborated using GitHub for version control and utilized Postman for API testing.",
      "Gained hands-on experience in frontend architecture, component-based design, and code reusability.",
    ],
  },
];

const stats = [
  { value: "1.5+", labelTop: "years", labelBottom: "Experience" },
  { value: "3+", labelTop: "completed", labelBottom: "Projects" },
  { value: "3", labelTop: "companies", labelBottom: "Work" },
];

const Experience = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          My <span className="text-yellow-500">Experience</span>
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          A quick look at where I have worked and what I have built along the way.
        </p>
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-10 sm:gap-16 py-6 mb-12 flex-wrap">
        {stats.map((item, index) => (
          <div key={index} className="text-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center bg-blue-100 dark:bg-gray-800">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow">
                <span className="text-xl sm:text-2xl font-bold dark:text-white">
                  {item.value}
                </span>
              </div>
            </div>
            <p className="mt-3 text-gray-700 dark:text-gray-300">{item.labelTop}</p>
            <p className="text-orange-500 font-semibold">{item.labelBottom}</p>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-yellow-400 pl-6 sm:pl-10 space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Dot marker */}
            <span className="absolute -left-[31px] sm:-left-[43px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 shadow-md ring-4 ring-white dark:ring-gray-900"></span>

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-5 sm:p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-lg sm:text-xl font-bold dark:text-white">
                  {exp.role}
                </h3>
                <span className="text-sm font-semibold text-orange-500 whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>

              <p className="text-yellow-600 dark:text-yellow-400 font-medium mt-1">
                {exp.company}
              </p>

              <ul className="mt-3 space-y-2 list-disc list-inside text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
