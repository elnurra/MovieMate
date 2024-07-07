import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import MovieCard from "../MovieCard";
import { Grid } from "@mui/material";
import { MovieContext } from "../../Contexts/movieContext";
import "../NewItems/index.scss";
import { useNavigate } from "react-router-dom";
import Popup from "../Popup";

export default function ColorTabs() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const movies = React.useContext(MovieContext);
  const [showPopup, setShowPopup] = React.useState(false);
  const handleOpenPopup = () => {
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const [tab, setTab] = React.useState([]);
  const handleClick = (e) => {
    if (e.target.name === "raiting") {
      setTab(movies.slice(0, 3));
    }
    if (e.target.name === "popular") {
      setTab(movies.slice(3, 6));
    }
    if (e.target.name === "newRelases") {
      setTab(movies.slice(6, 9));
    }
  };
  React.useEffect(() => {
    setTab(movies.slice(6, 9));
  }, [movies]);
  const [value, setValue] = React.useState("two");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleNavigate = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <div>
      <Box
        className="box"
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Tabs
          className="tabs"
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab
            sx={{
              color: "white",
              textAlign: "center",
              marginTop: "20px",
              fontSize: "1.2rem",
            }}
            value="one"
            name="newRelases"
            onClick={handleClick}
            label="  NEW RELEASES"
          />
          <Tab
            sx={{
              color: "white",
              textAlign: "center",
              marginTop: "20px",
              fontSize: "1.2rem",
            }}
            value="two"
            name="raiting"
            onClick={handleClick}
            label="The most raiting Films"
          />
          <Tab
            sx={{
              color: "white",
              textAlign: "center",
              marginTop: "20px",
              fontSize: "1.2rem",
            }}
            className="tab"
            value="three"
            name="popular"
            onClick={handleClick}
            label="Popular Films"
          />
        </Tabs>
      </Box>
      <Grid container spacing={2}>
        {tab
          ? tab.map((movie, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <li
                  style={{ textDecoration: "none" }}
                  onClick={() => {
                    if (token) {
                      handleNavigate(movie.id);
                    } else {
                      handleOpenPopup();
                    }
                  }}
                >
                  <MovieCard
                    key={movie.index}
                    title={movie.name}
                    description={movie.description}
                    imageUrl={movie.imageUrl}
                    action={movie.genre}
                    rating={movie.raiting}
                    ageRestriction={movie.ageRestriction}
                    Year={movie.year}
                    quality={movie.qualities[0].name}
                    releaseYear={movie.year}
                    likeActive={undefined}
                    disLikeActive={undefined}
                  />
                </li>
              </Grid>
            ))
          : ""}
      </Grid>
      {showPopup && <div className="overlay" onClick={handleClosePopup} />}
      {showPopup && <Popup onClose={handleClosePopup} />}
    </div>
  );
}
