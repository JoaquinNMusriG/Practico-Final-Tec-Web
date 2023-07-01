import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { submitLogout } from "../api/user.api";

export function Navbar({ curUser, verify }) {
  const navigate = useNavigate();

  const onClick = async (e) => {
    e.preventDefault();
    await submitLogout();
    verify(false);
    navigate("/home");
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to={"/home"}>
          <span className="navbar-brand">HHAG</span>
        </Link>
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
          {curUser ? (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Generaciones
                </a>
                <ul className="dropdown-menu" id="dropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        navigate("/facts/Baby boomers");
                      }}
                    >
                      Baby boomers
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        navigate("/facts/Generación X");
                      }}
                    >
                      Generación X
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        navigate("/facts/Millennials");
                      }}
                    >
                      Millennials
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        navigate("/facts/Generación Z");
                      }}
                    >
                      Generación Z
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        navigate("/facts/Generación Alpha");
                      }}
                    >
                      Generación Alpha
                    </a>
                  </li>
                </ul>
              </li>
              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-user-circle"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end" id="dropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        navigate("/profile");
                      }}
                    >
                      Mi Perfil
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={onClick}>
                      Cerrar Sesión
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
          ) : (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link>
                  <span
                    className="nav-link"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    Iniciar sesión
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link>
                  <span
                    className="nav-link"
                    data-bs-toggle="modal"
                    data-bs-target="#registerModal"
                  >
                    Registrarse
                  </span>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
