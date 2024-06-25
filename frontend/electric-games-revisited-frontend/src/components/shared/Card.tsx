import React from "react";
import Rating from "./Rating";

interface CardProps {
  image: string;
  title: string;
  description: string;
  id: string;
  genre: string;
  rating: string[];
  platform: string[];
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  id,
  genre,
  rating,
  platform,
}) => {
  return (
    <div className="w-80 h-auto p-4 m-2 bg-gray-900 shadow-lg rounded-lg">
      <img className="h-48 w-full object-contain" alt={title} src={image} />
      <h3 className="text-xl font-bold text-white mt-2">{title}</h3>
      <p className="text-white">{description}</p>
      <p className="text-sm text-white">id: {id}</p>
      <p className="text-sm text-white">genre: {[genre]}</p>

      <p className="text-sm text-neutral-200">
        platform: [{platform.join(", ")}]
      </p>
    </div>
  );
};

export default Card;
