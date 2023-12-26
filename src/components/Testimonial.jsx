import React, { useState } from "react";
import Cards from './Cards';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

// Testimonial component
const Testimonial = (props) => {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    // Function to navigate to the previous review
    function leftShiftHandler() {
        try {
            if (index - 1 < 0) {
                setIndex(reviews.length - 1);
            }
            else {
                setIndex(index - 1);
            }
        } catch (error) {
            // Handle the error here
            console.error(error);
        }
    }

    // Function to navigate to the next review
    function rightShiftHandler() {
        try {
            if (index + 1 >= reviews.length) {
                setIndex(0);
            }
            else {
                setIndex(index + 1);
            }
        } catch (error) {
            // Handle the error here
            console.error(error);
        }
    }

    // Function to show a random review
    function surpriseMeHandler() {
        try {
            let randomInt = Math.floor(Math.random() * reviews.length);
            setIndex(randomInt);
        } catch (error) {
            // Handle the error here
            console.error(error);
        }
    }

    return (
        <div className="w-[85vw] md:w-[700px] bg-white hover:shadow-purple-300 flex flex-col justify-center items-center mt-10 pd-10 transition-all duration-700 hover:shadow-lg rounded-[5px] mx-auto">
            {/* Display the first review if reviews array is not empty */}
            {reviews.length > 0 && index < reviews.length && <Cards review={reviews[index]} />}

            <div className="text-purple-600 font-bold flex text-3xl gap-3 mt-5 justify-center ">
                {/* Button to navigate to the previous review */}
                <button onClick={leftShiftHandler}
                    className="curson-pointer hover:text-purple-400 text-center ">
                    <FaChevronLeft />
                </button>
                {/* Button to navigate to the next review */}
                <button onClick={rightShiftHandler}
                    className="curson-pointer hover:text-purple-400 text-center ">
                    <FaChevronRight />
                </button>
            </div>

            <div>
                {/* Button to show a random review */}
                <button onClick={surpriseMeHandler}
                    className="bg-purple-400  hover:bg-purple-700 transition-all duration-200 cursor-pointer px-10 py-2 fonr-bold text-white rounded-[5px] mt-7 mb-7">
                    Surprise Me
                </button>
            </div>
        </div>
    )
}

export default Testimonial;