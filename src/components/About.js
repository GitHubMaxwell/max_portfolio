import React from "react";
import picture from "../assets/assets_export.js";

export default function About() {
  return (
    <main id="about">
      <h1 className="lg-heading">
        About <span className="text-secondary">Me</span>
      </h1>
      <h2 className="sm-heading">Some Information About Me</h2>
      <div className="about-info">
        <img
          src={picture.portrait}
          alt="John Doe Profile Picture"
          className="bio-image"
        />
        <div className="bio">
          <h3 className="text-secondary">BIO</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quos
            voluptates unde incidunt! Cupiditate harum, ipsam reprehenderit,
            repellendus mollitia laudantium voluptate quo dignissimos, magni
            eveniet cum tempora voluptatum. Laboriosam, ab.
          </p>
        </div>
        <div className="job job-1">
          <h3>Hack to Give Thanks</h3>
          <h6>Software Developer</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa quo
            asperiores repudiandae perspiciatis eius nemo eaque sed sequi labore
            nostrum.
          </p>
        </div>
        <div className="job job-2">
          <h3>Seattle Give Camp</h3>
          <h6>Software Developer</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa quo
            asperiores repudiandae perspiciatis eius nemo eaque sed sequi labore
            nostrum.
          </p>
        </div>
        <div className="job job-3">
          <h3>TenGun Design</h3>
          <h6>Web Quality Assurance Analyst</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa quo
            asperiores repudiandae perspiciatis eius nemo eaque sed sequi labore
            nostrum.
          </p>
        </div>
      </div>
    </main>
  );
}
