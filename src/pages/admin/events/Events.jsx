import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../../features/eventSlice";

import EventSearch from "./EventSearch";
import EventFilter from "./EventFilter";
import DataTable from "../../../components/admin/DataTable";

const Events = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((s) => s.events);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  // 🔍 Search + Filter
  const filtered = list
    .filter((e) =>
      e.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((e) => (filter ? e.category === filter : true));

  return (
    <div className="container-page">
      <h1 className="section-title">Events</h1>

      <div className="flex gap-4 mb-4">
        <EventSearch value={search} onChange={setSearch} />
        <EventFilter value={filter} onChange={setFilter} />
      </div>

      <DataTable
        columns={["Title", "Date", "Category"]}
        data={filtered.map((e) => [
          e.title,
          new Date(e.date).toLocaleDateString(),
          e.category,
        ])}
      />
    </div>
  );
};

export default Events;