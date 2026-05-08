import { useState } from "react";

const EditEvent = () => {
  const [form, setForm] = useState({
    title: "",
    date: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Event Updated");
  };

  return (
    <div className="container-page">
      <h1 className="section-title">Edit Event</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">

        <input
          className="input"
          placeholder="Event Title"
          onChange={(e)=>setForm({...form,title:e.target.value})}
        />

        <input
          type="date"
          className="input"
          onChange={(e)=>setForm({...form,date:e.target.value})}
        />

        <button className="btn">Update</button>
      </form>
    </div>
  );
};

export default EditEvent;