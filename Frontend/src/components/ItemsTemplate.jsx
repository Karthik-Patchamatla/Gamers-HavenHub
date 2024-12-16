import React from 'react';
import underlineImage from '../assets/underline.png';

function ItemsTemplate({ title, data }) {
    return (
        <div className="w-full mt-10 px-5 md:px-12 lg:px-44 text-white h-auto bg-[#121212]">
            <div className="mb-2">
                {/* Title and Underline Image */}
                <h2 className="text-2xl font-semibold">{title}</h2>
                <img src={underlineImage} alt="Underline" className="w-16 md:w-30 h-auto mt-2" />
            </div>
            <div className="scrollbar-none overflow-x-auto flex space-x-6 py-6 scrollbar-thin scrollbar-thumb-gray-300 scroll-smooth">
                {data.map((item, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col items-center rounded-lg bg-[#1e1e1e] py-5 min-h-[150px] min-w-[170px] text-left"
                    >
                        <img 
                            src={item.src}
                            alt={item.desc} 
                            className="w-[170px] h-[150px] object-fill mb-4 shadow-lg"
                        />
                        <div className="mt-2 w-full pl-3 pr-3">
                            <p className="text-[#878789] text-sm text-left">Base Game</p>
                            <p className="font-semibold text-xs line-clamp-1 mt-2">{item.desc}</p>
                            <p className="font-semibold text-sm mt-4">{item.prize}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemsTemplate;
