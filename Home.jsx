import React from "react";

const Home = () => (
  <div className="p-10 flex flex-col items-center text-center">
    <img
      src="./neerajpicture.JPG" alt=""
      className="w-40 h-40 rounded-full shadow-lg border-4 border-blue-500 mb-6"
    />

    <h2 className="text-3xl font-bold">Hi, I'm Neeraj Patidar 👋</h2>
    <p className="mt-2 text-lg text-gray-600">
      Frontend Developer |  AI & Data Science Student
    </p>
  </div>
);

export default Home;

