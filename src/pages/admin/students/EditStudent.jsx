import { useState } from "react";

const EditStudent = () => {
  const [form, setForm] = useState({ name: "", email: "" });

  return (
    <form className="space-y-4">
      <input className="input" placeholder="Name" />
      <input className="input" placeholder="Email" />
      <button className="btn">Update</button>
    </form>
  );
};

export default EditStudent;