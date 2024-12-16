import React from 'react';
import consoleData from '../data/consoleData';
import underlineImage from '../assets/underline.png';

function Consoles() {
    return (
        <div className="w-full mt-5 px-5 md:px-12 lg:px-44 text-white h-auto bg-[#121212]">
            <div className="mb-2">
                {/* Title and Underline Image */}
                <h2 className="text-2xl font-semibold">Consoles & Accessories</h2>
                <img src={underlineImage} alt="Underline" className="w-16 md:w-30 h-auto mt-2" />
            </div>
            <div className="scrollbar-none overflow-x-auto flex space-x-6 py-6 scrollbar-thin scrollbar-thumb-gray-300 scroll-smooth">
                {consoleData.map((console, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col items-center rounded-lg bg-[#1e1e1e] py-5 min-w-[240px] text-left"
                    >
                        <img 
                            src={console.src} 
                            alt={console.desc} 
                            className="w-[200px] h-[240px] object-cover mb-4 shadow-lg"
                        />
                        <div className="mt-2 w-full pl-3 pr-3">
                            <p className="font-semibold line-clamp-2">{console.desc}</p>
                            <p className="font-semibold mt-4">{console.prize}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Consoles;
