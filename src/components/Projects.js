import React from "react";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h1>
        <span>_</span>projekty<span>_</span>
      </h1>
      <div className="projects__container">
        <a href="#" className="project__redirect"></a>
        <div className="project__box first show">
          <a href="#" className="project__redirect">
            <div className="box__title">
              <h2>
                <span>01</span>bestshop
              </h2>
            </div>
            <div className="box__subtitle">
              <h2>Strona sklepu internetowego</h2>
              <div className="technologies">
                <span>HTML</span>
                <span>SASS</span>
                <span>JavaScript(ES6)</span>
                <span className="software">Adobe XD</span>
                <span className="software">Visual Studio Code</span>
              </div>
            </div>
            <div className="box__image first"></div>
            <div className="box__imageForMobile first"></div>
          </a>
          <a href="#">
            <button className="box__btnForMobile">Szczegóły</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
