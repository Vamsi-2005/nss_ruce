import React, { useState } from "react";

const BloodFilter = ({ onFilter }) => {
  const [bloodGroup, setBloodGroup] = useState("");

  const handleFilter = () => {
    onFilter(bloodGroup);
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 mb-4">
      <select
        value={bloodGroup}
        onChange={(e) => setBloodGroup(e.target.value)}
        className="border p-2 rounded-lg"
      >
        <option value="">Select Blood Group</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
      </select>

      <button
        onClick={handleFilter}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Filter
      </button>
    </div>
  );
};

export default BloodFilter;