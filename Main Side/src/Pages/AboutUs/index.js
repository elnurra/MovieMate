import React from "react";
import "./index.scss";
function About() {
  return (
    <>
      <section className="section-class">
        <h2 className="heading-class">Our Team</h2>
        <p className="paragraph-class">
          We are a dedicated team of professionals passionate about developing
          high-performance, scalable systems and websites. Our mission is to
          deliver innovative solutions and unparalleled service to our clients
          and community. Here's a little bit about the people who make it all
          happen:
        </p>
        <div className="cards">
          <div className="card">
            <div className="card-img-wrapper">
              <img
                src="img/us/jahid jabizada.jpg"
                alt="Jahid Jabizada"
                className="image-class"
              ></img>
            </div>
            <a
              href="https://www.linkedin.com/in/jahid-jabizada-b65aab194/"
              className="social-icon"
              target="_blank"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <div className="card-content-wrapper">
              <a
                href="https://www.linkedin.com/in/jahid-jabizada-b65aab194/"
                className="card-content"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <h3 className="card-title">Jahid Jabizada</h3>
                <p className="card-subtitle">Devops Engineer</p>
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="svg-class"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-img-wrapper">
              <img
                src="img/us/Elnur.jpg"
                alt="Elnur Azizov"
                className="image-class"
              ></img>
            </div>
            <a
              href="http://linkedin.com/in/elnur-honored-one"
              className="social-icon"
              target="_blank"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <div className="card-content-wrapper">
              <a
                href="http://linkedin.com/in/elnur-honored-one"
                className="card-content"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <h3 className="card-title">
                  Elnur <br /> Azizov
                </h3>
                <p className="card-subtitle">Fullstack Engineer</p>
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="svg-class"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-img-wrapper">
              <img
                src="img/us/Zabita.jpg"
                alt="Zabita Guliyeva"
                className="image-class"
              ></img>
            </div>
            <a
              href="https://www.linkedin.com/in/zabita-quliyeva"
              className="social-icon"
              target="_blank"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <div className="card-content-wrapper">
              <a
                href="https://www.linkedin.com/in/zabita-quliyeva"
                className="card-content"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <h3 className="card-title">Zabita Guliyeva</h3>
                <p className="card-subtitle">Frontend Developer</p>
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="svg-class"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-img-wrapper">
              <img
                src="img/us/Vali.jpg"
                alt="Vali"
                className="image-class"
              ></img>
            </div>
            <a href="#" className="social-icon" target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <div className="card-content-wrapper">
              <a
                href="#"
                className="card-content"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <h3 className="card-title">Vali Mustafayev</h3>
                <p className="card-subtitle">Backend Developer</p>
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="svg-class"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
