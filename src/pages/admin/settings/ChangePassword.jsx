import { useState } from "react";

const ChangePassword = () => {
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password Changed");
  };

  return (
    <div className="container-page max-w-md">
      <h1 className="section-title">Change Password</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="password"
          className="input"
          placeholder="Old Password"
          onChange={(e)=>setForm({...form,oldPassword:e.target.value})}
        />

        <input
          type="password"
          className="input"
          placeholder="New Password"
          onChange={(e)=>setForm({...form,newPassword:e.target.value})}
        />

        <button className="btn">Update Password</button>
      </form>
    </div>
  );
};

export default ChangePassword;