import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/authSlice";

const useAuth = () => {
  const dispatch = useDispatch();

  const { user, loading, error } = useSelector((state) => state.auth);

  // 🔐 Login function
  const handleLogin = async (credentials) => {
    try {
      const result = await dispatch(login(credentials)).unwrap();
      return { success: true, data: result };
    } catch (err) {
      return { success: false, error: err };
    }
  };

  // 🚪 Logout function
  const handleLogout = () => {
    dispatch(logout());
  };

  // 👤 Role check
  const isAdmin = user?.role === "admin";

  return {
    user,
    loading,
    error,
    isAuthenticated: !!user,
    isAdmin,
    login: handleLogin,
    logout: handleLogout,
  };
};

export default useAuth;