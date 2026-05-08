import { useState } from "react";
import { addStudent } from "../../../services/studentService";

const AddStudent = () => {
  const [form, setForm] = useState({ name: "", email: "", department: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudent(form);
    alert("Student Added");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})} className="input"/>
      <input placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})} className="input"/>
      <input placeholder="Department" onChange={(e)=>setForm({...form,department:e.target.value})} className="input"/>

      <button className="btn">Add Student</button>
    </form>
  );
};

export default AddStudent;