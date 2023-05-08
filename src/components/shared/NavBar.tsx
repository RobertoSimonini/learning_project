import { NavLink } from "react-router-dom";

const isActive = (obj: { isActive: Boolean }) => {
  return obj.isActive ? "text-white nav-link active" : "nav-link";
};

export const NavBar = () => {
  return (
    <>
      <nav className="navbar nav-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white">VideoGames</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="home_page" className={isActive}>
                  Home Page
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="contact_page" className={isActive}>
                  Contatti
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
