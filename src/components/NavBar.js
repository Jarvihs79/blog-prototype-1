import React from "react";
import {Route,Routes, Link } from "react-router-dom";
import Anime from "./Anime";
import Creators from "./Creators";
import Esports from "./Esports";
import Gaming from "./Gaming";
import LandingPage from "./LandingPage";
import Details from "./Details";
import "./Post.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            Newsapp
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
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/anime">
                  Anime
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/esports">
                  Esports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gaming">
                  Gaming
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/creators">
                  Creators
                </Link>
              </li>
            </ul>
            <li className="nav-item dropdown li-0">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    BGMI
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    VALORANT
                  </Link>
                </li>
              </ul>
            </li>
          </div>
          
          



        </div>
        
      </nav>


      <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/anime" element={<Anime/>}/>
            <Route path="/esports" element={<Esports/>}/>
            <Route path="/gaming" element={<Gaming/>}/>
            <Route path="/creators" element={<Creators/>}/>
            <Route path="/details" element={<Details/>} />
      </Routes>









    </div>
  );
}
