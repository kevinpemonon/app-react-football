import { useState } from "react";
import { IoLogInOutline, IoSearchOutline, IoClose } from "react-icons/io5";
import "../css/Main.css";

const Header = () => {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="header">
      <p className="header-title">My Football's App</p>
      <div className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item">
            <a href="#">Accueil</a>
          </li>
          <li className="header-nav-item">
            <a href="#">Actualités</a>
          </li>
          <li className="header-nav-item">
            <a href="#">Resultat</a>
          </li>
          <li className="header-nav-item">
            <a href="#">Championnats</a>
          </li>
          <li className="header-nav-item">
            <a href="#">Equipes</a>
          </li>
          <li className="header-nav-item">
            <a href="#">Direct</a>
          </li>
        </ul>
        <input id="search" className="header-nav-search-hide" />
        <div className="header-nav-icons">
          {console.log(isSearching)}
          {isSearching ? (
            <IoClose
              className="header-nav-icons-item"
              onClick={() => {
                console.log("close");
                const searchHtml = document.getElementById("search");
                if (searchHtml) {
                  searchHtml.className = "header-nav-search-hide";
                }
                const navListHtml = document.getElementsByClassName(
                  "header-nav-list"
                );
                if (navListHtml) {
                  navListHtml.item(0).style.display = "inherit";
                }
                setIsSearching(false);
              }}
            />
          ) : (
            <IoSearchOutline
              className="header-nav-icons-item"
              onClick={() => {
                console.log("search");
                const searchHtml = document.getElementById("search");
                if (searchHtml) {
                  searchHtml.className = "header-nav-search-visible";
                }
                const navListHtml = document.getElementsByClassName(
                  "header-nav-list"
                );
                if (navListHtml) {
                  navListHtml.item(0).style.display = "none";
                }
                setIsSearching(true);
              }}
            />
          )}
          <IoLogInOutline
            className="header-nav-icons-item"
            onClick={() => {
              console.log("login");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
