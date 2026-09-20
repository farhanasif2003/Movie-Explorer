import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          🎬 MovieExplorer
        </Link>

        <nav className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          <NavLink to="/movies" className="nav-link">
            Movies
          </NavLink>
        </nav>

        <Link to="/movies" className="nav-button">
          Explore Movies
        </Link>
      </div>
    </header>
  );
}

export default Navbar;