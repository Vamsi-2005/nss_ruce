import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={event.image}
        alt={event.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {event.title}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          📅 {event.date} | 📍 {event.location}
        </p>

        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
          {event.description}
        </p>

        <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard;