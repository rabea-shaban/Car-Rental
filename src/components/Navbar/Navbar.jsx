import { Link } from "react-router-dom";
import Logo from "../../assets/nav/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg mt-2 ">
      <div className="container-fluid mx-5 ">
        <Link className="navbar-brand" to="#">
          <img src={Logo} alt="" />
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

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul
            style={{ marginRight: "auto" }}
            className="navbar-nav ms-auto mb-2 mb-lg-0"
          >
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">
                Become a rintal
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                How it work
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Rinatal deals
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="#">
                Why choose us
              </Link>
            </li>
          </ul>

          <div className="login d-flex align-items-center justify-content-center ">
            <button className="btn btn-lg  m-1" type="submit">
              Sign in
            </button>
            <button className="btn btn-primary btn-lg    m-1" type="submit">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
