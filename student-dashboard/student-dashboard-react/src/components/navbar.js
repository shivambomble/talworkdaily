import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex gap-6">
      
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 font-semibold"
            : "hover:text-blue-300"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/tasks"
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 font-semibold"
            : "hover:text-blue-300"
        }
      >
        Tasks
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 font-semibold"
            : "hover:text-blue-300"
        }
      >
        About
      </NavLink>

    </nav>
  );
}

export default Navbar;
