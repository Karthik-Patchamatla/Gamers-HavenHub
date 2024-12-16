import React from 'react';
import hardwareData from '../data/hardwareData';
import underlineImage from '../assets/underline.png';

function PCHardwares() {
    return (
        <div className="w-full mt-10 px-5 md:px-12 lg:px-44 text-white h-auto bg-[#121212]">
            <div className="mb-2">
                {/* Title and Underline Image */}
                <h2 className="text-2xl font-semibold">PC Hardware</h2>
                <img src={underlineImage} alt="Underline" className="w-16 md:w-30 h-auto mt-2" />
            </div>
            <div className="scrollbar-none overflow-x-auto flex space-x-6 py-6 scrollbar-thin scrollbar-thumb-gray-300 scroll-smooth">
                {hardwareData.map((hardware, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col items-center rounded-lg bg-[#1e1e1e] py-5 min-w-[240px] text-left"
                    >
                        <img 
                            src={hardware.src}
                            className="w-[200px] h-[240px] object-cover mb-4 shadow-lg"
                        />
                        <div className="mt-2 w-full pl-3 pr-3">
                            <p className="font-semibold line-clamp-2">{hardware.desc}</p>
                            <p className="font-semibold mt-4">{hardware.prize}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PCHardwares;
