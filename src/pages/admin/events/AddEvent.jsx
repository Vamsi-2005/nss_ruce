import { useState } from "react";
import { addEvent } from "../../../services/eventService";

const AddEvent = () => {
  const [form, setForm] = useState({
    title: "",
    date: "",
    category: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addEvent(form);
    alert("Event Added");

    setForm({ title: "", date: "", category: "" });
  };

  return (
    <div className="container-page">
      <h1 className="section-title">Add Event</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">

        <input
          className="input"
          placeholder="Event Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <input
          type="date"
          className="input"
          value={form.date}
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
        />

        <select
          className="input"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        >
          <option value="">Select Category</option>
          <option>Camp</option>
          <option>Awareness</option>
          <option>Cleanliness</option>
        </select>

        <button className="btn">Add Event</button>
      </form>
    </div>
  );
};

export default AddEvent;