import React from "react";

const DonorCard = ({ donor }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition">
      <h2 className="text-lg font-semibold text-red-600">
        {donor.name}
      </h2>

      <p className="text-gray-600">
        Blood Group: <span className="font-medium">{donor.bloodGroup}</span>
      </p>

      <p className="text-gray-600">Phone: {donor.phone}</p>
      <p className="text-gray-600">Location: {donor.location}</p>

      <button className="mt-3 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
        Contact
      </button>
    </div>
  );
};

export default DonorCard;