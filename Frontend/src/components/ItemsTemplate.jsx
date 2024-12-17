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
            <div className="scrollbar-none overflow-x-auto flex space-x-3 py-6 scrollbar-thin scrollbar-thumb-gray-300 scroll-smooth">
                {data.map((item, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col items-center rounded-lg bg-[#1e1e1e] px-1 pt-1 min-h-[200px] min-w-[170px] text-left"
                    >
                        <img 
                            src={item.src}
                            alt={item.desc} 
                            className="w-[170px] h-[200px] rounded-lg object-fill shadow-lg"
                        />
                        <div className="mb-3 w-full px-3">
                            <p className="font-semibold text-[13px] line-clamp-1 mt-2">{item.desc}</p>
                            <p className="font-semibold text-sm mt-2">{item.prize}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemsTemplate;
