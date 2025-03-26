import React from "react";
import reviews from "./data";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] items-center justify-center bg-gray-300">
      <div className="text-center ">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="flex mx-auto bg-violet-400 h-[4px] w-[150px] mt-2 mb-10"></div>
        <Testimonials reviews = {reviews}/>
      </div>
    </div>
  )
};

export default App;
