import React from "react";
import mainImg from "./Images/main-img.avif";
import artImg1 from "./Images/art-img1.avif";
import artImg2 from "./Images/art-img2.avif";
export default function LandingPage() {
  return (
    <div class="row">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide container-sm col-md-4"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner container-fluid">
          <div className="carousel-item active img-fluid">
            <img src={mainImg} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item img-fluid">
            <img src={artImg1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item img-fluid">
            <img src={artImg2} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
