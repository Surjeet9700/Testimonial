import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Cards = (props) => {

    if (!props.review) {
        return null; // or return some default JSX
    }
    let reviews = props.review;

    return (
        <div className="flex flex-col md:relative">
            {/* Image */}
            <div className="absolute top-[-5rem] z-[10] mx-auto">
                <img
                    className="aspect-square rounded-full w-[140px] h-[140px] z-25"
                    src={reviews.image}
                />
                {/* Background Circle */}
                <div
                    className="w-[140px] h-[140px] bg-purple-700 rounded-full absolute top-[-5px] z-[-10]  left-[9px]"
                ></div>
            </div>

            {/* Name */}
            <div className="text-center mt-7">
                <p className="font-bold text-2xl capitalize tracking-wider ">{reviews.name}</p>
            </div>

            {/* Job */}
            <div className="text-center gap-[-2px]">
                <p className="text-purple-300 uppercase text-sm  ">{reviews.job}</p>
            </div>

            {/* Left Quote Icon */}
            <div className="mx-auto mt-7 text-purple-700">
                <FaQuoteLeft />
            </div>

            {/* Review Text */}
            <div className="text-center mt-4 text-slate-500">{reviews.text}</div>

            {/* Right Quote Icon */}
            <div className="mx-auto mt-7  text-purple-700">
                <FaQuoteRight />
            </div>
        </div>
    );
};

export default Cards;
