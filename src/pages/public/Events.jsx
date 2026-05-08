import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../features/eventSlice";

import EventCard from "../../components/events/EventCard";
import EventSearch from "../../components/events/EventSearch";
import EventFilter from "../../components/events/EventFilter";

const Events = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Events</h1>

      <EventSearch />
      <EventFilter />

      <div className="grid md:grid-cols-3 gap-4">
        {list.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;