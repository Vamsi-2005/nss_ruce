import React from "react";

const GalleryCard = ({ image, title, category }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-green-600 mt-1">{category}</p>
      </div>
    </div>
  );
};

export default GalleryCard;