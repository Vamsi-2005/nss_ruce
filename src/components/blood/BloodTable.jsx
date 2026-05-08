import React from "react";

const BloodTable = ({ donors }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded-lg">
        <thead className="bg-red-500 text-white">
          <tr>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Blood Group</th>
            <th className="py-2 px-4">Phone</th>
            <th className="py-2 px-4">Location</th>
          </tr>
        </thead>

        <tbody>
          {donors.length > 0 ? (
            donors.map((donor, index) => (
              <tr key={index} className="text-center border-b hover:bg-gray-100">
                <td className="py-2 px-4">{donor.name}</td>
                <td className="py-2 px-4 font-semibold text-red-600">
                  {donor.bloodGroup}
                </td>
                <td className="py-2 px-4">{donor.phone}</td>
                <td className="py-2 px-4">{donor.location}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="py-4 text-gray-500 text-center">
                No donors found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BloodTable;