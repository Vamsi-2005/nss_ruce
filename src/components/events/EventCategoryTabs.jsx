import React from "react";

const categories = ["All", "Camp", "Awareness", "Blood Donation"];

const EventCategoryTabs = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-4 py-2 rounded-full border ${
            activeCategory === cat
              ? "bg-green-600 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default EventCategoryTabs;