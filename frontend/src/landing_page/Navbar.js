import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Navbar() {
  const navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(["token"]);
  const isAuthenticated = Boolean(cookies.token);
  const dashboardUrl = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";

  const handleLogout = () => {
    removeCookie("token", { path: "/" });
    navigate("/login", { replace: true });
  };
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom sticky-top"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container d-flex justify-content-between align-items-center p-1">
        <Link className="navbar-brand m-0" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "120px" }}
            alt="logo"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex ms-auto" role="search">
            <ul className="navbar-nav mb-lg-0">
              {!isAuthenticated && (
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/login">
                    Login
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="https://zerodha-clone-2-sb2n.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
              {isAuthenticated && (
                <li className="nav-item">
                  <button
                    className="btn btn-outline-primary ms-2"
                    type="button"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
