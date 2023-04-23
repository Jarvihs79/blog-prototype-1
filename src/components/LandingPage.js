import React from "react";
import mainImg from "./Images/main-img.avif";
import {Route,Routes, Link } from "react-router-dom";
import Details from "./Details";
import Post from "./Post";

export default function LandingPage() {
    
  return (
    <div className="row">
      <div className="headline my-6 text-center">
        <h1>Top Headlines</h1>
      </div>
      <div className="col-sm-1">col-sm</div>
      <div className="col-sm-10">
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div class="card h-100">
              <Link className=" stretched-link text-decoration-none text-dark" to="/details">
              <img src={mainImg} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              </Link>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={mainImg} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a short card.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={mainImg} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={mainImg} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-1">col-sm</div>

    </div>
  );
}
