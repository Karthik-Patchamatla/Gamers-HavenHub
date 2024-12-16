import React from 'react';
import brand1 from '../assets/asus.png';
import brand2 from '../assets/razer.png';
import brand3 from '../assets/hyperx.png';
import brand4 from '../assets/logitech.png';
import brand5 from '../assets/lenovo.png';
import brand6 from '../assets/zebronics.avif';
import brand7 from '../assets/msi.png';
import brand8 from '../assets/hp.svg';
import underlineImage from '../assets/underline.png';

const brands = [brand1, brand2, brand4, brand3, brand8, brand6, brand7, brand5];

function Brands() {
    return (
        <div className="w-full px-5 mt-10 md:px-12 lg:px-44">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-white">Shop for Accessories by Platform</h2>
            {/* Underline Image */}
            <img src={underlineImage} alt="Underline" className="w-16 md:w-20 h-auto mb-7 ml-0" />
            
            <div className="w-full flex justify-center items-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-x-16 gap-y-12 md:gap-10">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="flex justify-center items-center"
                        >
                            <img
                                src={brand}
                                className="w-20 h-20 md:w-32 md:h-32 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Brands;