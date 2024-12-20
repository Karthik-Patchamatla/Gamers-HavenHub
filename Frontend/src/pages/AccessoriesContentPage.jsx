import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../config";
import Loader from "../components/Loader";
import ProductImage from "../components/ProductImage";
import ProductInfo from "../components/ProductInfo";
import FeaturesCard from "../components/FeaturesCard";
import SimilarProducts from "../components/SimilarProducts";
import delivery from "../assets/delivery.svg";
import tradeIn from "../assets/trade.svg";
import returnPolicy from "../assets/return.svg";
import support from "../assets/support.svg";
import AccessoriesDescriptionSection from "../components/AccessoriesDescriptionSection";

const AccessoriesContentPage = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/api/accessoriescontent/${id}`);
        if (!response.ok) throw new Error("Failed to fetch game details");
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

  if (loading) return <Loader />;
  if (!game)
    return <div className="text-white text-center">Game not found</div>;

  return (
    <div className="px-5 md:px-12 lg:px-52 bg-[#121212] text-white">
      <div className="bg-[#1e1e1e] text-white min-h-screen mt-10 rounded-3xl px-5 md:px-10 py-5 md:py-10">
        <div className="max-w-6xl mx-auto">
          {/* Product Image and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProductImage src={`/assets/${game.image}`} alt={game.name} />
            <ProductInfo
              name={game.name}
              price={game.price}
              oldPrice={game.oldprice}
              discount={game.discount}
            />
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <FeaturesCard
              imageSrc={delivery}
              title="Free Delivery"
              description="Free shipping on all orders"
            />
            <FeaturesCard
              imageSrc={tradeIn}
              title="Trade In"
              description="Buy → Play → Enjoy → Repeat"
            />
            <FeaturesCard
              imageSrc={support}
              title="Support"
              description="10AM - 6PM (Mon-Sat)"
            />
            <FeaturesCard
              imageSrc={returnPolicy}
              title="Easy Returns"
              description="7 Days Return Policy"
            />
          </div>

          {/* Description Sections */}
          <AccessoriesDescriptionSection
            title="Description"
            description1={game.description1}
            description2={game.description2}
            description3={game.description3}
            description4={game.description4}
            title1="Warranty"
            warranty={game.warranty}
          />
        </div>
      </div>

      {/* Similar Products */}
      <SimilarProducts />
    </div>
  );
};

export default AccessoriesContentPage;
