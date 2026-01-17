import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h3 className="logo">MyApp</h3>

      <div className="nav-links">
        <NavLink to="/" className="nav-link">
          Posts
        </NavLink>

        <NavLink to="/users" className="nav-link">
          Users
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
