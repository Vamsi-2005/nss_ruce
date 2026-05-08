const CategoryTabs = ({ categories, active, setActive }) => {
  return (
    <div className="flex gap-2 mb-4">
      {categories.map((cat, i) => (
        <button
          key={i}
          onClick={() => setActive(cat)}
          className={`px-3 py-1 rounded ${
            active === cat ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;