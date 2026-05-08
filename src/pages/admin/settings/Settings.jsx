import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="container-page">
      <h1 className="section-title">Settings</h1>

      <div className="space-y-3">
        <Link to="profile" className="btn w-full">Profile</Link>
        <Link to="password" className="btn w-full">Change Password</Link>
      </div>
    </div>
  );
};

export default Settings;