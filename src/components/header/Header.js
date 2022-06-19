import "./styles.css";

import { FaAngleDown} from "react-icons/fa";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

import { baseUrl, imgUrl } from "../../config";
import useFetch from "../../hooks/useFetch";  // src/hooks/useFetch.js

import logo from "../../json-data/nav/logo.png";
import { useState } from "react";
import { Loading } from "../loading/Loading";


const Header = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true); //start with hidden dropdown menu in mobile menu
  const defaultImgUrl = `${imgUrl}/uploads/default_avatar2_076e77e12e.png`;
  // logging status update based on jwt
  const loggedIn = localStorage.getItem("jwt-token");
  const userId = localStorage.getItem("user-id");
  const username = localStorage.getItem("username");

  // Fetch user photo for navbar
 
    const profileUrl = loggedIn?`${baseUrl}/users/${userId}?populate=*`:`${baseUrl}/users`;
   
   const { data, loading } = useFetch(profileUrl);

  
   //handle logout 
  const handleLogOut = (e) => {
    localStorage.removeItem("jwt-token");
    navigate("/");
  };

// handling a click for a toggle icon for mobile view
  const toggleMenu = () => {
    setToggle(!toggle);
  };
if(loading) return <Loading />
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="desktop-menu">
          <ul className="nav-right">
            <li>
              <Link to="/stars">Stars</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <ul
            className={
              loggedIn
                ? "nav-right-unloggedIn display-none"
                : "nav-right-unloggedIn display-view"
            }
          >
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <ul
            className={
              loggedIn
                ? "nav-right-loggedIn display-view"
                : "nav-right-loggedIn  display-none"
            }
          >
            <li>
              <Link to={data.avatar?`/profile/${userId}`:"/"}>
                <img  src={data.avatar?`${imgUrl}${data.avatar.url}`:defaultImgUrl} alt="avatar" />
              </Link>
            </li>
            <div className="dropdown">
              <div className="angle-down">
                <FaAngleDown />
              </div>
              <div className="dropdown-list">
                <h4>Hello, {username}</h4>
                <li>
                  <Link to={`/profile/${userId}`}>My profile</Link>
                </li>
                <li>
                  <Link to="/">change password</Link>
                </li>
                <li onClick={(e) => handleLogOut(e)}>
                  <Link to="/">logout</Link>
                </li>
              </div>
            </div>
          </ul>
        </div>
        <ul className="toggle-menu">
          <li>
            <button onClick={(e) => toggleMenu(e)}>
              {toggle ? <BsChevronDoubleDown /> : <BsChevronDoubleUp />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
