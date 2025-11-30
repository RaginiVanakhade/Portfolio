// // import React from "react";

// const Skills = () => {
//   const services = [
//     {
//       emoji: "😎",
//       title: "Developer",
//       description: "Html, Css, JavaScript, React.js, Node.js, MySql, Restful APIs",
//     },
//   ];

//   return (
//     <section className="w-full px-6 md:px-20 py-20 flex flex-col md:flex-row items-start justify-between gap-16">
      
//       {/* LEFT CONTENT */}
//       <div className="max-w-lg">
//         <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
//           Skills & <br />
//           <span className="text-yellow-500">Services</span>
//         </h1>

//         <p className="mt-4 text-gray-600 dark:text-gray-300 text-base md:text-lg">
//           Expert in development, UI/UX design, and prompt engineering services.
//           Offering innovative solutions for your projects with precision and creativity.
//         </p>

//         <button className="mt-8 px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full shadow-lg hover:opacity-90">
//           Download CV
//         </button>
//       </div>

//       {/* RIGHT CARDS */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {services.map((item, index) => (
//           <div
//             key={index}
//             className="w-[230px] bg-white dark:bg-gray-900 rounded-2xl shadow-[0_0_20px_rgba(255,200,0,0.4)] border border-yellow-300 p-6 text-center"
//           >
//             <div className="text-5xl">{item.emoji}</div>

//             <h3 className="mt-4 font-semibold text-xl">{item.title}</h3>

//             <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
//               {item.description}
//             </p>

//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;
