import React, { useEffect, useState } from "react";

function GamesTemplate({ platform }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/games?platform=${encodeURIComponent(platform)}`);
  
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
  
        const data = await response.json();
        console.log("Fetched data:", data);
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
            className="shadow-lg rounded-lg"
          />
          <h3 className="font-semibold text-[13px] line-clamp-1 mt-2">
            {game.name}
          </h3>
          <p className="font-semibold text-sm mt-2">{game.price}</p>
        </div>
      ))}
    </div>
  );
}

export default GamesTemplate;
