import React from "react";

const EventFilter = ({ filter, setFilter }) => {
  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
    >
      <option value="all">All Events</option>
      <option value="upcoming">Upcoming</option>
      <option value="past">Past</option>
    </select>
  );
};

export default EventFilter;