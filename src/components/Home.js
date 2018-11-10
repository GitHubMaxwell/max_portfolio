import React from "react";

export default function Home() {
  return (
    <main id="home">
      <h1 className="lg-heading">
        Max <span className="text-secondary">Rediker</span>
      </h1>
      <h2 className="sm-heading">Full Stack JavaScript Developer</h2>
      <div className="icons">
        {/* <a href="/">
          <i className="fab fa-twitter fa-2x" />
        </a>
        <a href="/">
          <i className="fab fa-facebook fa-2x" />
        </a> */}
        <a href="https://www.linkedin.com/in/maxwellrediker/" target="_blank">
          <i className="fab fa-linkedin fa-2x" />
        </a>
        <a href="https://github.com/GitHubMaxwell" target="_blank">
          <i className="fab fa-github fa-2x" />
        </a>
      </div>
    </main>
  );
}
