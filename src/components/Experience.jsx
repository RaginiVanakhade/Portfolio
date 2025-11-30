// import React from "react";

const stats = [
  { value: "1+", labelTop: "years", labelBottom: "Experience" },
  { value: "3+", labelTop: "completed", labelBottom: "Projects" },
  { value: "2+", labelTop: "companies", labelBottom: "Work" },
];

const Experience = () => {
  return (
    <div className="flex justify-center gap-16 py-10 flex-wrap">
      {stats.map((item, index) => (
        <div key={index} className="text-center">
          {/* Circle */}
          <div className="w-28 h-28 rounded-full flex items-center justify-center bg-blue-100">

            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow">
              <span className="text-2xl font-bold">{item.value}</span>
            </div>
          </div>

          {/* Text */}
          <p className="mt-3 text-gray-700">{item.labelTop}</p>
          <p className="text-orange-500 font-semibold">{item.labelBottom}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
