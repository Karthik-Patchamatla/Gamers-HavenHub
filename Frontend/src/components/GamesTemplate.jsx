import React, { useEffect, useState } from "react";
import { BASE_URL } from "../config";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loader.json";

function GamesTemplate({ platform }) {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/api/games?platform=${encodeURIComponent(platform)}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [platform]);

  return (
    <div className="relative">
      {/* Show the Lottie loader for the entire page */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#121212] z-50">
          <Lottie className="w-10 h-10" animationData={loadingAnimation} loop={true} />
        </div>
      )}

      {/* Show the actual content once the data is fetched */}
      <div className={`grid bg-[#121212] gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        {games.map((game) => (
          <div key={game._id} className="bg-[#191919] p-2 rounded-lg">
            <img
              src={`/assets/${game.image}`}
              alt={game.image}
              className="shadow-lg rounded-lg w-full h-[200px] object-contain"
            />
            <h3 className="font-semibold text-[13px] line-clamp-1 mt-2">{game.name}</h3>
            <span className="font-semibold my-2">{game.price}</span>
            <span className="font-semibold line-through text-sm text-[#888888] ml-3 my-2">{game.oldprice}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesTemplate;
