import { useState } from "react";
import { addDonor } from "../../../services/donorService";

const AddDonor = () => {
  const [form, setForm] = useState({
    name: "",
    blood: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDonor(form);
    alert("Donor Added");

    setForm({ name: "", blood: "", phone: "" });
  };

  return (
    <div className="container-page">
      <h1 className="section-title">Add Donor</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">

        <input
          className="input"
          placeholder="Name"
          value={form.name}
          onChange={(e)=>setForm({...form,name:e.target.value})}
        />

        <select
          className="input"
          value={form.blood}
          onChange={(e)=>setForm({...form,blood:e.target.value})}
        >
          <option value="">Select Blood Group</option>
          <option>A+</option>
          <option>B+</option>
          <option>O+</option>
        </select>

        <input
          className="input"
          placeholder="Phone"
          value={form.phone}
          onChange={(e)=>setForm({...form,phone:e.target.value})}
        />

        <button className="btn">Add Donor</button>
      </form>
    </div>
  );
};

export default AddDonor;