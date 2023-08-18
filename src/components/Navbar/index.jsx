import React from "react";
import "./navbar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseSquare } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" />
              Verreisen
            </h1>
          </a>
        </div>

        <div className="navBar">
          <ul className="navLists flex">

            <li className="navItem">
              <a href="#" className="navLink">Hauptseite</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Packete</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Firma</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Seite</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Neuigkeiten</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Kontakt</a>
            </li>

            <button className="btn">
              <a href="#">Jetzt buchen</a>
            </button>
          </ul>

          <div className="closeNavbar">
            <AiFillCloseSquare className="icon" />
          </div>

        </div>

        <div className="toggleNavbar">
          <TbGridDots className="icon"/>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
