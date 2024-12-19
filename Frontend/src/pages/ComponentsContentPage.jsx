import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../config";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loader.json";

function ComponentsContentPage() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/api/pccontent/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch game details");
        }
        const data = await response.json();
        setGame(data);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#121212]">
        <Lottie
          className="w-20 h-20"
          animationData={loadingAnimation}
          loop={true}
        />
      </div>
    );
  }

  if (!game) {
    return <div className="text-white text-center">Game not found</div>;
  }

  return (
    <div className=" px-5 md:px-12 lg:px-44 bg-[#121212] text-white">
    <div className="bg-[#121212] text-white min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        {/* Product Image and Title */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Product Image */}
          <div>
            <img
              src={`/assets/${game.image}`}
              alt="Product"
              className="rounded-lg w-full"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              GIGABYTE AORUS - FI25F - 24.5 inch FHD 240Hz (Pre-owned)
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-green-500">
              ₹ 16,499
            </p>
            <p className="text-md md:text-lg line-through text-gray-400">
              ₹ 20,099
            </p>
            <p className="text-md md:text-lg text-green-400">Save 18%</p>

            {/* Variant Selection */}
            <div className="mt-4">
              <label
                htmlFor="variant"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Variant
              </label>
              <select
                id="variant"
                className="bg-[#1e1e1e] text-white p-2 rounded border border-gray-700 w-full md:w-1/2"
              >
                <option>STANDARD</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded w-full sm:w-auto">
                ADD TO CART
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full sm:w-auto">
                SELL NOW
              </button>
            </div>
          </div>
        </div>

        {/* Delivery Check */}
        <div className="mt-8">
          <div className="flex flex-wrap items-center gap-4">
            <input
              type="text"
              placeholder="Pin Code"
              className="p-2 bg-[#1e1e1e] text-white rounded border border-gray-700 w-full sm:w-auto"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded w-full sm:w-auto">
              Check
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
          <div className="flex flex-col items-center text-center">
            <img
              src="/icons/free-delivery.svg"
              alt="Free Delivery"
              className="w-10 h-10"
            />
            <p className="mt-2 font-semibold">Free Delivery</p>
            <p className="text-gray-400 text-sm">Free shipping on all orders</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/icons/trade-in.svg"
              alt="Trade In"
              className="w-10 h-10"
            />
            <p className="mt-2 font-semibold">Trade In</p>
            <p className="text-gray-400 text-sm">Buy → Play → Sell → Repeat</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/icons/support.svg"
              alt="Support"
              className="w-10 h-10"
            />
            <p className="mt-2 font-semibold">Support</p>
            <p className="text-gray-400 text-sm">10AM - 6PM (Mon-Sat)</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/icons/returns.svg"
              alt="Easy Returns"
              className="w-10 h-10"
            />
            <p className="mt-2 font-semibold">Easy Returns</p>
            <p className="text-gray-400 text-sm">7 Days Return Policy</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ComponentsContentPage;
