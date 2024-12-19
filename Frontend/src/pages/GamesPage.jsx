import React, { useState } from 'react';
import underlineImage from '../assets/underline.png';
import GamesTemplate from '../components/GamesTemplate';

function GamesPage() {
  const [activeButton, setActiveButton] = useState('PS5');

  const platforms = [
    { label: 'PlayStation5', id: 'PS5' },
    { label: 'PlayStation4', id: 'PS4' },
    { label: 'Xbox Series X', id: 'Xbox Series X' },
    { label: 'Xbox One', id: 'Xbox One' },
  ];

  return (
    <div className="w-full mt-10 px-5 md:px-12 lg:px-44 text-white h-auto bg-[#121212]">
      {/* Page Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Games</h2>
        <img
          src={underlineImage}
          alt="Underline"
          className="w-16 md:w-30 h-auto mt-2"
        />
      </div>

      {/* Platform Buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        {platforms.map((platform) => (
          <button
            key={platform.id}
            onClick={() => setActiveButton(platform.id)}
            className={`px-6 py-2 text-sm font-medium rounded-lg transition-colors ${
              activeButton === platform.id
                ? 'bg-[#962e69] text-white'
                : 'bg-[#191919] text-gray-300 hover:bg-[#333333]'
            }`}
          >
            {platform.label}
          </button>
        ))}
      </div>

      {/* Games List */}
      <GamesTemplate platform={activeButton} />
    </div>
  );
}

export default GamesPage;
