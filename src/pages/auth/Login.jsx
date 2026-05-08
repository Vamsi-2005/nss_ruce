import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // 🔐 Demo credentials
  const DEMO = {
    email: "admin@nss.com",
    password: "admin123",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await login(form);

    if (res.success) {
      navigate("/admin"); // go to dashboard
    }
  };

  // ⚡ Fill demo credentials
  const fillDemo = () => {
    setForm(DEMO);
  };

  return (
    <div className="max-w-md mx-auto mt-10 card">
      <h1 className="text-xl font-bold mb-4 text-center">Admin Login</h1>

      {/* 🔥 Demo Info */}
      <div className="bg-yellow-100 border border-yellow-300 p-3 rounded mb-4 text-sm">
        <p><b>Demo Credentials:</b></p>
        <p>Email: admin@nss.com</p>
        <p>Password: admin123</p>

        <button
          onClick={fillDemo}
          type="button"
          className="mt-2 text-blue-600 underline"
        >
          Use Demo Login
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="email"
          placeholder="Email"
          className="input"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="input"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button className="btn w-full">
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>

      {error && <p className="text-red-500 mt-3">{error}</p>}
    </div>
  );
};

export default Login;