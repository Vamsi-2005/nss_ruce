import { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("");

  const handleSave = () => {
    alert("Profile Updated");
  };

  return (
    <div className="container-page max-w-md">
      <h1 className="section-title">Profile</h1>

      <input
        className="input mb-4"
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <button className="btn" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default Profile;