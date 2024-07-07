import React, { useState, useContext } from "react";
import "../../Pages/Catalog/index.scss";
import background from "../../Pages/Catalog/section.jpg";
import Carousel from "react-bootstrap/Carousel";
import ExpectedCard from "../ExpectedCard";
import "../ExpectedFilms/index.scss";
import { BeatLoader } from "react-spinners";
import { MovieContext } from "../../Contexts/movieContext";
import { useNavigate } from "react-router-dom";

import Popup from "../Popup";

function ExpectedFilms() {
  const navigate = useNavigate();

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  const token = localStorage.getItem("token");

  const [loading, setLoading] = useState(true);
  const movies = useContext(MovieContext);
  const [showPopup, setShowPopup] = React.useState(false);
  const handleOpenPopup = () => {
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  React.useEffect(() => {
    if (movies.length) {
      setLoading(false);
    }
  }, [movies]);
  return (
    <section
      className="section section--bg"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        height: "600px",
      }}
    >
      <div className="container">
        <div className="row">
          {/* section title */}
          <div className="col-12">
            <h2 className="section__title">Expected premiere</h2>
          </div>
          {/* end section title */}
        </div>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <BeatLoader
              color="hsla(308, 67%, 53%, 1)"
              cssOverride={{}}
              loading
              margin={20}
              size={20}
              speedMultiplier={1}
            />
          </div>
        ) : (
          <Carousel>
            <Carousel.Item>
              <div
                className="d-flex justify-content-center"
                style={{ gap: "80px", height: "600px !important" }}
              >
                {movies.slice(0, 3).map((movie, idx) => (
                  <li
                    className="carousel-list-item"
                    key={idx}
                    onClick={() => {
                      if (token) {
                        handleMovieClick(movie.id);
                      } else {
                        handleOpenPopup();
                      }
                    }}
                  >
                    <ExpectedCard
                      key={movie.name}
                      name={movie.name}
                      imageUrl={movie.imageUrl}
                      genre={movie.genre}
                      rating={movie.raiting}
                    />
                  </li>
                ))}
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                className="d-flex justify-content-center"
                style={{ gap: "80px", height: "600px !important" }}
              >
                {movies.slice(3, 6).map((movie, idx) => (
                  <li
                    className="carousel-list-item"
                    key={idx}
                    onClick={() => {
                      if (token) {
                        handleMovieClick(movie.id);
                      } else {
                        handleOpenPopup();
                      }
                    }}
                  >
                    <ExpectedCard
                      key={movie.name}
                      name={movie.name}
                      imageUrl={movie.imageUrl}
                      genre={movie.genre}
                      rating={movie.raiting}
                    />
                  </li>
                ))}
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                className="d-flex justify-content-center"
                style={{ gap: "80px", height: "600px !important" }}
              >
                {movies.slice(6, 9).map((movie, idx) => (
                  <li
                    className="carousel-list-item"
                    key={idx}
                    onClick={() => {
                      if (token) {
                        handleMovieClick(movie.id);
                      } else {
                        handleOpenPopup();
                      }
                    }}
                  >
                    <ExpectedCard
                      key={movie.name}
                      name={movie.name}
                      imageUrl={movie.imageUrl}
                      genre={movie.genre}
                      rating={movie.raiting}
                    />
                  </li>
                ))}
              </div>
            </Carousel.Item>
          </Carousel>
        )}
        {showPopup && <div className="overlay" onClick={handleClosePopup} />}
        {showPopup && <Popup onClose={handleClosePopup} />}
        <style>
          {`
            .carousel-indicators {
              display: none;
            }
          `}
        </style>
      </div>
    </section>
  );
}
export default ExpectedFilms;
