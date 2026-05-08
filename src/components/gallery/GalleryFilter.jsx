import React from "react";

const categories = ["All", "Camp", "Cleanliness", "Awareness", "Plantation"];

const GalleryFilter = ({ selected, setSelected }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelected(cat)}
          className={`px-4 py-2 rounded-full border transition ${
            selected === cat
              ? "bg-green-600 text-white"
              : "bg-white text-gray-700 hover:bg-green-100"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default GalleryFilter;