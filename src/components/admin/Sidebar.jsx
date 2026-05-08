import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Calendar,
  Image,
  Heart,
  Settings,
  X,
  LogOut,
} from "lucide-react";

const Sidebar = ({ mobileOpen, setMobileOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const menu = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/admin" },
    { name: "Students", icon: Users, path: "/admin/students" },
    { name: "Events", icon: Calendar, path: "/admin/events" },
    { name: "Gallery", icon: Image, path: "/admin/gallery" },
    { name: "Blood Donors", icon: Heart, path: "/admin/donors" },
    { name: "Settings", icon: Settings, path: "/admin/settings" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      {/* OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed md:static top-0 left-0 h-screen bg-white border-r z-50
          w-64 flex flex-col justify-between
          transition-transform duration-300

          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* HEADER */}
        <div>
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="font-semibold">Admin Panel</h2>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setMobileOpen(false)}
              className="md:hidden p-2 rounded transition
                         text-gray-600
                         hover:bg-orange-400 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          {/* MENU */}
          <nav className="p-3 space-y-2">
            {menu.map((item, i) => {
              const Icon = item.icon;
              const active = location.pathname === item.path;

              return (
                <Link
                  key={i}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200
                    ${
                      active
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:bg-orange-100 hover:text-orange-500"
                    }`}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* FOOTER */}
        <div className="p-4 border-t">
          <p className="font-semibold">NSS Admin</p>
          <p className="text-sm text-gray-500">admin@nss.edu</p>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 mt-4 px-3 py-2 rounded-md
                       text-gray-600 transition
                       hover:bg-orange-100 hover:text-orange-500"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;