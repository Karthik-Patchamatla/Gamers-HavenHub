import React, { useEffect, useState } from "react";
import { BASE_URL } from "../config";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loader.json";
import { useNavigate } from "react-router-dom";

function ComponentsTemplate({ platform }) {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGames = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${BASE_URL}/api/components?platform=${encodeURIComponent(platform)}`);
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

    const handleClick = (id) => {
        navigate(`/pccontent/${id}`);
    };

    return (
        <div className="relative">
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#121212] z-50">
                    <Lottie className="w-10 h-10" animationData={loadingAnimation} loop={true} />
                </div>
            )}

            <div className={`grid bg-[#121212] gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
                {games.map((game) => (
                    <div
                        key={game._id}
                        className="bg-[#1e1e1e] p-2 rounded-lg cursor-pointer"
                        onClick={() => handleClick(game._id)}
                    >
                        <img
                            src={`/assets/${game.image}`}
                            alt={game.image}
                            className="shadow-lg rounded-lg align-center w-full h-[200px] object-contain"
                        />
                        <h3 className="font-semibold text-white text-[13px] line-clamp-1 mt-2">{game.name}</h3>
                        <span className="font-semibold text-white my-2">₹ {game.price}</span>
                        <span className="font-semibold line-through text-sm text-[#888888] ml-3 my-2">{game.oldprice}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ComponentsTemplate;
