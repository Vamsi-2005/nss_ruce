const DashboardCards = () => {
  const data = [
    { title: "Students", value: 120 },
    { title: "Events", value: 25 },
    { title: "Donors", value: 60 },
    { title: "Messages", value: 15 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded shadow text-center"
        >
          <h3 className="text-gray-500">{item.title}</h3>
          <p className="text-2xl font-bold text-green-700">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;