import React from "react";
import reviews from "./data";
import Testimonial from './components/Testimonial'


const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center item-center bg-gray-200" >
      <div className="text-center">
        <h1 className="text-4xl font-bold capitalize">Our Testimonials</h1>
        <div className="h-[4px] w-1/5 mx-auto mt-1 bg-purple-400"></div>
          <Testimonial reviews={reviews} ></Testimonial> 
      </div>
    </div>
  );
};

export default App;
