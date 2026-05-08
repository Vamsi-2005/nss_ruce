const Objectives = () => {
  const objectives = [
    "Understand community needs and problems",
    "Develop social responsibility",
    "Apply knowledge for community service",
    "Develop leadership qualities",
    "Promote national integration"
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">
        Objectives
      </h2>

      <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {objectives.map((item, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Objectives;