
import React, { useState } from "react";

const Banner = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    }

    return (
        <div className="relative bg-cover " style={{ backgroundImage: "url('../banner.png ')" }}>
            <div className="absolute inset-0 bg-white opacity-90"></div>
            <div className="text-center items-center h-screen flex flex-col justify-center relative z-10 max-h-80 max-w-screen-xl mx-auto ">
                <h1 className="font-bold text-5xl mb-5 px-5">
                    I Grow By Helping People In Need
                </h1>
                <form onSubmit={handleSubmit} className="flex mt-5 ">
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="px-4 py-2 border border-slate-300 rounded-l-lg w-88 md:w-96 outline-none"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                    <input type="submit" className="bg-red px-4 py-2 rounded-r-lg text-white bg-[#FF444A]" />
                </form>
            </div>
        </div>
    );
};

export default Banner;
