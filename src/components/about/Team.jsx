const Team = () => {
  const team = [
    { name: "Program Officer", role: "Coordinator" },
    { name: "Student Leader", role: "Volunteer Head" },
    { name: "Core Member", role: "Organizer" },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">
        Our Team
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg text-center shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;