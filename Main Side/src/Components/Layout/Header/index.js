import React, { useContext } from "react";
import "../Header/index.scss";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { mdiLogin } from "@mdi/js";
import { mdiDotsHorizontal } from "@mdi/js";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { movieService } from "../../../APIs/Services/MovieService";
import { accountService } from "../../../APIs/Services/AccountService";
import { TokenContext } from "../../../Contexts/tokenContext";
import ExpectedCard from "../../ExpectedCard";
import Popup from "../../Popup";

function Header() {
  const [userName, setUserName] = React.useState("");
  const { token, setToken } = useContext(TokenContext);
  const [isActiveSearch, setIsActiveSearch] = React.useState(false);
  const [isActiveMore, setIsActiveMore] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [searchData, setSearchData] = React.useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = React.useState(false);
  const handleOpenPopup = () => {
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const navigate = useNavigate();
  const handleNavigate = (movieId) => {
    navigate(`/movies/${movieId}`);
    window.location.reload();
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const moreHandleClick = () => {
    setIsActiveMore(!isActiveMore);
  };
  const logOut = () => {
    accountService.clearToken();
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setUserName();
    setToken("");
  };
  const fetchSearch = async () => {
    console.log("Searching");
    if (inputValue.length > 0) {
      const { data } = await movieService.searchFilter(inputValue);
      console.log(data);
      data.length > 0 ? setSearchData(data) : setSearchData(null);
      console.log(searchData);
    } else {
      setSearchData(null);
    }
  };
  React.useEffect(() => {
    const user = localStorage.getItem("userName");
    setUserName(user);
  }, [token]);

  const activeSearch = () => {
    setIsActiveSearch(!isActiveSearch);
    setInputValue("");
  };

  const search = (event) => {
    console.log("success");
    setInputValue(event.target.value);
    fetchSearch();
  };
  return (
    <header className="header">
      <div className="header__wrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header__content">
                {/* header logo */}
                <a
                  className="header__logo"
                  href="/"
                  style={{ textDecoration: "none" }}
                >
                  <span>MovieMate</span>
                </a>
                {/* end header logo */}
                {/* header nav */}
                <ul className="header__nav">
                  {/* dropdown */}
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to="/">
                      {""}
                      Home
                    </Link>
                  </li>
                  {/* end dropdown */}
                  {/* dropdown */}
                  <li className="header__nav-item">
                    <Link className=" header__nav-link" to="/movies">
                      Movies
                    </Link>
                  </li>
                  {/* end dropdown */}
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to="/plans">
                      Pricing Plans
                    </Link>
                  </li>
                  {userName != null ? (
                    <li className="header__nav-item">
                      <Link className="header__nav-link">{userName}</Link>
                    </li>
                  ) : (
                    <li className="header__nav-item">
                      <Link className="header__nav-link" to="/help"></Link>
                    </li>
                  )}

                  {/* dropdown */}
                  <li
                    className={
                      isActiveMore
                        ? "header__nav-item show"
                        : "dropdown header__nav-item "
                    }
                  >
                    <a
                      className=" header__nav-link header__nav-link--more"
                      onClick={moreHandleClick}
                      href="#"
                      role="button"
                      id="dropdownMenuMore"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <Icon path={mdiDotsHorizontal} size={1} />
                    </a>
                    <ul
                      className={
                        isActiveMore
                          ? " header__dropdown-menu show"
                          : "dropdown-menu header__dropdown-menu"
                      }
                      aria-labelledby="dropdownMenuMore"
                    >
                      <li>
                        <Link style={{ textDecoration: "none" }} to="/about">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link style={{ textDecoration: "none" }} to="/contact">
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link style={{ textDecoration: "none" }} to="/help">
                          Help
                        </Link>
                      </li>
                      {userName ? (
                        <li onClick={logOut}>
                          <Link style={{ textDecoration: "none" }} to="/login">
                            Log out
                          </Link>
                        </li>
                      ) : (
                        <li>
                          <Link style={{ textDecoration: "none" }} to="/login">
                            Login
                          </Link>
                        </li>
                      )}
                    </ul>
                  </li>
                  {/* end dropdown */}
                </ul>
                {/* end header nav */}
                {/* header auth */}
                <div className="header__auth">
                  <button
                    onClick={activeSearch}
                    className={
                      isActiveSearch
                        ? "header-search-btn active"
                        : "header-search-btn "
                    }
                    type="button"
                  >
                    <Icon path={mdiMagnify} size={1.5} />
                  </button>
                  {userName ? (
                    <Link
                      className="header__sign-in"
                      style={{ textDecoration: "none", color: "white" }}
                      to="/login"
                      onClick={logOut}
                    >
                      Log out
                    </Link>
                  ) : (
                    <div>
                      <Link
                        className="header__sign-in"
                        to="/login"
                        style={{ textDecoration: "none" }}
                      >
                        <Icon className="icon" path={mdiLogin} size={1} />
                        <span> sign in</span>
                      </Link>
                    </div>
                  )}
                </div>
                {/* end header auth */}
                {/* header menu btn */}
                <div className="header__btn">
                  <div className="burger-menu">
                    <div
                      className={`burger-icon ${isOpen ? "open" : ""}`}
                      onClick={toggleMenu}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    {isOpen && (
                      <ul
                        className="menu-items"
                        style={{ backgroundColor: "#2b2b31" }}
                      >
                        <li>
                          <Link
                            to="/"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/movies"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Movies
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/plans"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Pricing PLans
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/help"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Help
                          </Link>
                        </li>
                        {userName ? (
                          <li>
                            <Link
                              to="/login"
                              style={{ textDecoration: "none" }}
                              onClick={logOut}
                            >
                              Log out
                            </Link>
                          </li>
                        ) : (
                          <li>
                            <Link
                              to="/login"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              Sign in
                            </Link>
                          </li>
                        )}
                      </ul>
                    )}
                  </div>
                </div>
                {/* end header menu btn */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header search */}
      <form
        action="#"
        className={
          isActiveSearch
            ? " header__search header__search--active"
            : " header__search "
        }
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header__search-content">
                <input
                  onChange={search}
                  onBlur={(event) => {
                    setInputValue(event.target.value);
                    fetchSearch();
                  }}
                  value={inputValue}
                  type="text"
                  placeholder="Search for a movie, TV Series that you are looking for"
                />
                <button type="button">search</button>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {searchData && inputValue && isActiveSearch ? (
                  searchData.map((movie) => (
                    <div style={{ width: "400px" }}>
                      <li
                        style={{
                          width: "50%",
                          color: "white",
                          backgroundColor: "#28282d",
                          fontSize: "16px",
                        }}
                        onClick={() => {
                          if (token) {
                            handleNavigate(movie.id);
                          } else {
                            handleOpenPopup();
                          }
                        }}
                      >
                        <ExpectedCard
                          name={movie.name}
                          imageUrl={movie.imageUrl}
                        />
                      </li>
                    </div>
                  ))
                ) : inputValue.length < 2 && inputValue.length > 0 ? (
                  <li
                    style={{
                      color: "white",
                      backgroundColor: "#28282d",
                      fontSize: "16px",
                    }}
                  >
                    En azi 2 herf daxil edin
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </div>
      </form>
      {showPopup && <div className="overlay" onClick={handleClosePopup} />}
      {showPopup && <Popup onClose={handleClosePopup} />}

      {/* end header search */}
    </header>
  );
}
export default Header;
