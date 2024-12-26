import React from 'react';

const Intro = () => {
    const introData = [
        {
            heading: "Intro",
            img: "https://i.pinimg.com/originals/f7/8d/ee/f78dee32fa0c0f465c7042fb590fcede.jpg",
            something: "Hello..! I’m Ragini Vanakhade, and I recently completed a three-month internship in React.js. During this time, I worked on building dynamic web applications, learned React fundamentals like state, props, and hooks, and integrated APIs for real-world functionality. This experience enhanced my front-end development skills, and I’m excited to apply what I’ve learned to new projects and challenges.",
        },
        {
            heading: "Education",
            img: "https://tse2.mm.bing.net/th?id=OIP.ufOF1hL02jU_mTQXgPJdNQHaHa&pid=Api&P=0&h=180",
            something: "I have completed a Bachelor of Computer Application degree from SNDT University.",
        },
        {
            heading: "Work",
            img: "https://tse1.mm.bing.net/th?id=OIP.jF8e4Cu-Inyia_09WvLCgQHaEH&pid=Api&P=0&h=180",
            something: "About my work.",
        },
        {
            heading: "Social",
            img: "https://tse1.mm.bing.net/th?id=OIP.IZbotS_lEAh-V9QHwOhPTAHaFQ&pid=Api&P=0&h=180",
            something: "About my social.",
        },
    ];

    return (
        <div className="text-white ">
            <div className="flex">
                {introData.map((item, index) => (
                    <article
                        key={index}
                        className="bg-gray-800 w-96 md:96 md:h-96 m-5 rounded-lg text-center"
                    >
                        <h3 className="">{item.heading}</h3>
                        <img
                            src={item.img}
                            alt={`${item.heading} illustration`}
                            className="w-16 h-16 rounded-full " 
                        />
                        <p className="">{item.something}</p>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Intro;

