import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";
const validationSchema = Yup.object().shape({
  name: Yup.mixed().required("Name is required"),
});

function MovieUpdate() {
  const { movieId } = useParams();
  const [movie, setMovie] = React.useState(null);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/movie");
  };

  const getMovie = async () => {
    const { data } = await axios.get(`https://localhost:5001/api/Movie/Get/${movieId}`);
    setMovie(data);
    console.log(data);
  };

  const [successSB, setSuccessSB] = React.useState(false);
  const closeSuccessSB = () => setSuccessSB(false);
  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      content="Movie is updated"
      dateTime="2 second agp"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  React.useEffect(() => {
    getMovie();
  }, []);
  const handleSubmit = async (values) => {
    console.log("isleyir");
    console.log(values);
    const { data } = await axios.post(
      `https://https://localhost:5001/api/Movie/Update/${movieId}`,
      values
    );
    if (data.errors === null) {
      setSuccessSB(true);
      console.log("succcess");
    }
  };
  if (!movie) return <div>loading ....</div>;
  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        Movie Update Form
      </h1>
      <div
        style={{
          marginTop: "50px",
          marginLeft: "0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Formik
          initialValues={{
            name: genre.name,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div
                className="form-group"
                style={{
                  width: "400px",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <label
                  style={{ marginRight: "5px", position: "relative", bottom: "20px" }}
                  htmlFor="name"
                  className="form-label"
                >
                  Name
                </label>
                <Field
                  style={{ width: "300px", position: "relative", bottom: "20px" }}
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                />
                <div style={{ height: "20px" }}>
                  <ErrorMessage
                    component="div"
                    name="name"
                    style={{ color: "red", fontSize: "14px", marginTop: "-10px" }}
                  />
                </div>
              </div>
              <Button
                variant="contained"
                color="secondary"
                style={{
                  backgroundColor: "#FEEA8C",
                }}
                onClick={handleClick}
              >
                Cancel
              </Button>
              <Button
                style={{
                  marginTop: "10px",
                  position: "relative",
                  left: "200px",
                  color: "white",
                }}
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
              {renderSuccessSB}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default MovieUpdate;
