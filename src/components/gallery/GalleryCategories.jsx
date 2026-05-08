import React from "react";

const GalleryCategories = ({ categories, active, setActive }) => {
  return (
    <div className="flex justify-center gap-6 border-b mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`pb-2 font-medium transition ${
            active === cat
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-500 hover:text-green-500"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default GalleryCategories;