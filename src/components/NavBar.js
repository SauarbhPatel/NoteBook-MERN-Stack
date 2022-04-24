import React, { useContext } from "react";
import logo from "./image/logo.png";
import { Link, useLocation, useHistory } from "react-router-dom";
import noteContext from "../context/notes/noteContext";
import back from "./image/bg.jpg";

const NavBar = () => {
  const context = useContext(noteContext);
  const { notes } = context;
  let location = useLocation();
  let history = useHistory();

  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [])

  const handalLogOut = () => {
    sessionStorage.removeItem("token");
    history.push("/");
    // setTimeout(() => {
    //   history.push("/");
    // }, 2);
  };

  return (
    <>
      <div className="nav-container ">
        <div className="nav-left ">
          <Link to="/" className="toggle">
            <div className="nav-image">
              <img src={logo} alt="" />
            </div>
            <div className="nav-title">
              <h2>NOTEBOOK</h2>
            </div>
          </Link>
          <ul className="flex">
            <li>
              <Link
                className={` nav-link ${
                  location.pathname === "/" ? "nav-active" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                style={{ cursor:"not-allowed" }}
                className={` nav-link ${
                  location.pathname === "/aboutUs" ? "nav-active" : ""
                }`}
                to="#"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <ul>
            <li
              style={{ display: sessionStorage.getItem("token") ? "" : "none" }}
            >
              <Link
                className={` ${
                  location.pathname === "/about" ? "nav-active" : ""
                }`}
                to="/about"
              >
                <div className="profile-icon ">
                  <span
                    style={{ backgroundImage: `url(${back})` }}
                    className="image-icon"
                  ></span>
                </div>
              </Link>
            </li>
            <li
              style={{ display: sessionStorage.getItem("token") ? "" : "none" }}
            >
              <Link
                className={` ${
                  location.pathname === "/notes" ? "nav-active" : ""
                }`}
                to="/notes"
              >
                <div className="note-icon">
                  <div className="line"></div>
                  <div className="count flex">{notes.length}</div>
                </div>
              </Link>
            </li>
            <li>
              {!sessionStorage.getItem("token") ? (
                <Link
                  className={`loginButton ${
                    location.pathname === "/login" ? "make ackive class" : ""
                  }`}
                  to="/login"
                >
                  SignIn/SignUp
                </Link>
              ) : (
                <button onClick={handalLogOut} className={`logout `}>
                  <i className="fa-solid fa-right-from-bracket"></i>
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
