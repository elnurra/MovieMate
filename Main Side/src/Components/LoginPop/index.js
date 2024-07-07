import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../../Pages/Login/index.scss";
import { TokenContext } from "../../Contexts/tokenContext";
import { accountService } from "../../APIs/Services/AccountService";
import { Link } from "react-router-dom";
import "../LoginPop/index.scss";
import Icon from "@mdi/react";
import { mdiWindowClose } from "@mdi/js";
import * as Yup from "yup";

function LoginPop({ onClose }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState(null);
  const navigate = useNavigate();
  const { setToken } = useContext(TokenContext);

  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Password is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };

  const handleSubmit = async (values) => {
    setLoading(true);
    setServerError(null); // Clear previous errors

    try {
      const { success, data, error } = await accountService.signIn(values);

      if (success) {
        // Successful login
        setLoading(false);
        setSuccess(true);
        localStorage.setItem("token", data.token);
        localStorage.setItem("userName", data.userName);
        setToken(data.token);

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        // Handle login errors
        setLoading(false);
        setServerError(error);
      }
    } catch (error) {
      // Handle unexpected errors (e.g., network issues)
      setLoading(false);
      setServerError("Произошла ошибка при входе");
    }
  };

  return (
    <>
      <div className="sign section--bg" data-bg="img/section/section.jpg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sign__content" style={{ position: "relative" }}>
                <button
                  className="close-button"
                  style={{ zIndex: 999, position: "absolute", top: "110px" }}
                  onClick={onClose}
                >
                  <Icon path={mdiWindowClose} size={1} />
                </button>
                {/* authorization form */}
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                  validationSchema={validationSchema}
                >
                  <Form className="sign__form">
                    <h2
                      className="section__title"
                      style={{
                        color: "#0ed032",
                        fontSize: "25px",
                        fontWeight: "bold",
                      }}
                    >
                      MovieMate
                    </h2>
                    <div className="sign__group">
                      <Field
                        type="text"
                        name="email"
                        id="email"
                        className="sign__input"
                        placeholder="Email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error"
                      />
                    </div>

                    <div className="sign__group">
                      <Field
                        type="password"
                        name="password"
                        className="sign__input"
                        placeholder="Password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="error"
                      />
                    </div>

                    <div className="sign__group sign__group--checkbox">
                      <Field
                        id="remember"
                        name="remember"
                        type="checkbox"
                        className="sign__checkbox"
                      />
                      <label htmlFor="remember">Remember Me</label>
                    </div>
                    {serverError && (
                      <div className="sign__error" style={{ color: "red" }}>
                        {serverError}
                      </div>
                    )}
                    <Button
                      htmlType="submit"
                      loading={loading}
                      className={
                        success
                          ? "sign__btn success"
                          : serverError
                          ? "sign__btn error"
                          : "sign__btn"
                      }
                    >
                      {success ? (
                        <>
                          Success
                          <span className="success-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="icon-check"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                          </span>
                        </>
                      ) : (
                        "Sign In"
                      )}
                    </Button>
                    <span className="sign__text">
                      Don't have an account?{" "}
                      <Link to={"/register"}> Sign up!</Link>
                    </span>
                    <span className="sign__text">
                      <Link to="/forgetPassword">Forgot password?</Link>
                    </span>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPop;
