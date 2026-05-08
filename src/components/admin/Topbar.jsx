import { Menu } from "lucide-react";

const Topbar = ({ onMenuClick }) => {
  return (
    <div className="md:hidden flex items-center justify-between p-4 bg-transparent">

      {/* MENU BUTTON */}
      <button
        onClick={onMenuClick}
        className="p-2 rounded transition
                   text-gray-700
                   hover:bg-orange-400 hover:text-white"
      >
        <Menu size={18} />
      </button>

      {/* RIGHT EMPTY */}
      <div></div>

    </div>
  );
};

export default Topbar;