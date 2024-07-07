import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Icon from "@mdi/react";
import { mdiVolumeHigh, mdiVolumeOff } from "@mdi/js";
import "../Slider/index.scss";
import { movieService } from "../../APIs/Services/MovieService";
import { useNavigate } from "react-router-dom";
import Popup from "../Popup";
import { throttle } from "lodash"; // Import lodash throttle function

function Slider() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  const handleNavigate = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  const handleUserInteraction = () => {
    setUserInteracted(true);
    document.removeEventListener('click', handleUserInteraction);
    document.removeEventListener('keydown', handleUserInteraction);
    document.removeEventListener('scroll', handleUserInteraction);

    const video = videoRef.current;
    if (video) {
      try {
        video.play();
      } catch (e) {
        console.error('Play attempt failed:', e);
      }
    }
  };

  const handleScroll = throttle(() => {
    const video = videoRef.current;
    if (video) {
      const videoRect = video.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (videoRect.bottom < 0 || videoRect.top > windowHeight) {
        if (!video.paused) {
          video.pause();
        }
      } else {
        if (userInteracted && video.paused) {
          try {
            video.play();
          } catch (e) {
            console.error('Play error:', e);
          }
        }
      }
    }
  }, 200); // Throttle the handleScroll function to fire at most once every 200ms

  const [randomMovie, setRandomMovie] = useState({});
  const [randomVideo, setRandomVideo] = useState({});

  const fetchRandomMovie = async () => {
    const { data } = await movieService.random();
    setRandomMovie(data);
    if (data.length) {
      setRandomVideo(data[0]);
    }
  };

  useEffect(() => {
    fetchRandomMovie();
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);
    document.addEventListener('scroll', handleUserInteraction);

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
      window.removeEventListener("scroll", handleScroll);
      if (videoRef.current) {
        
      }
    };
  }, [userInteracted]);

  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleMuteUnmute = () => {
    const video = videoRef.current;
    if (video) {
      if (video.muted) {
        video.muted = false;
        setIsMuted(false);
      } else {
        video.muted = true;
        setIsMuted(true);
      }
    }
  };

  return (
    <div className="home">
      <div className="video-container">
        {isLoading && randomVideo ? (
          <img
            src={randomVideo.backgroundImage}
            alt="Loading"
            className="loading-image"
            style={{ width: "100%", height: "100%" }}
          />
        ) : null}
        <video
          className={`video-background ${isLoading ? "hide" : ""}`}
          style={{ width: "100%" }}
          autoPlay
          loop
          muted={isMuted}
          onLoadedData={handleVideoLoad}
          ref={videoRef}
        >
          {randomVideo && randomVideo.videoUrl ? (
            <source src={randomVideo.videoUrl} type="video/mp4" />
          ) : null}
        </video>

        <div className="content">
          {randomVideo ? (
            <h1 className="video-title">{randomVideo.name}</h1>
          ) : (
            ""
          )}
          {randomVideo ? (
            <p className="video-description">{randomVideo.description}</p>
          ) : (
            ""
          )}

          <button
            className="watch-now-button"
            onClick={() => {
              if (token) {
                handleNavigate(randomVideo.id);
              } else {
                handleOpenPopup();
              }
            }}
          >
            Watch Now
          </button>
          {showPopup && <div className="overlay" onClick={handleClosePopup} />}
          {showPopup && <Popup onClose={handleClosePopup} />}

          {isLoading ? (
            ""
          ) : (
            <div className="mute-button" onClick={handleMuteUnmute}>
              {isMuted ? (
                <Icon path={mdiVolumeOff} size={2} />
              ) : (
                <Icon path={mdiVolumeHigh} size={2} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Slider;
