const StatCard = ({ title, value, icon: Icon, color }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
      <div>
        <div className={`p-2 rounded-lg mb-2 ${color}`}>
          <Icon size={18} />
        </div>

        <h2 className="text-2xl font-bold">{value}</h2>
        <p className="text-gray-500">{title}</p>
      </div>

      <span className="text-green-600 text-sm">+12%</span>
    </div>
  );
};

export default StatCard;