const Activities = () => {
  const activities = [
    "Blood Donation Camps",
    "Tree Plantation Drives",
    "Cleanliness Campaigns",
    "Health Awareness Programs",
    "Rural Development Activities"
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">
        Activities
      </h2>

      <ul className="max-w-3xl mx-auto space-y-3 text-gray-700">
        {activities.map((activity, index) => (
          <li
            key={index}
            className="p-3 border rounded-md hover:bg-green-50 transition"
          >
            {activity}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Activities;