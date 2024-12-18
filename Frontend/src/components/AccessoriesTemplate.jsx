import React, { useEffect, useState } from "react";
import { BASE_URL } from "../config";

function AccessoriesTempate({ platform }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/accessories?platform=${encodeURIComponent(platform)}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchGames();
  }, [platform]);

  return (
    <div className="grid bg-[#121212] gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
      {games.map((game) => (
        <div key={game._id} className="bg-[#191919] p-2 rounded-lg">
          <img
            src={`/assets/${game.image}`}
            alt={game.image}
            className="shadow-lg rounded-lg align-center w-full h-[200px] object-contain"
          />
          <h3 className="font-semibold text-[13px] line-clamp-1 mt-2">
            {game.name}
          </h3>
          <p className="font-semibold text-sm my-2">{game.price}</p>
        </div>
      ))}
    </div>
  );
}

export default AccessoriesTempate;
