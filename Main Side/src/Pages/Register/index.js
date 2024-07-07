// Register/index.js
import React, { useState } from "react";
import { Button } from "antd";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../Login/index.scss"; // Предполагаем, что вы используете те же стили, что и для входа
import { accountService } from "../../APIs/Services/AccountService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function Register() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState(null);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Please, enter your full name"),
    username: Yup.string().required("Please, enter your username"),
    email: Yup.string()
      .email("Please, enter a valid email address")
      .required("Please, enter your email address"),
    password: Yup.string()
      .required("Please, enter your password")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please, confirm your password"),
    agreeToPrivacyPolicy: Yup.bool().oneOf(
      [true],
      "You must agree to the Privacy Policy to continue"
    ),
  });

  const initialValues = {
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToPrivacyPolicy: false,
  };

  const handleSubmit = async (values) => {
    setLoading(true);
    setServerError(null); // Reset the error message each time you submit

    try {
      const { data } = await accountService.signUp(values);
      if (data.errors) {
        // Handle specific errors or display a generic message
        setServerError(
          data.errors[0] || "An error occurred during registration"
        ); // Get the first error or provide a generic message
      } else {
        setSuccess(true);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } catch (error) {
      // Handle network or unexpected errors here
      setServerError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false); // Always reset loading state, even after errors
    }
  };

  return (
    <>
      <div className="sign section--bg" data-bg="img/section/section.jpg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sign__content" style={{ marginTop: "50px" }}>
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
                    {/* Поля формы */}
                    <div className="sign__group">
                      <Field
                        type="text"
                        name="fullName"
                        className="sign__input"
                        placeholder="Full Name"
                      />
                      <ErrorMessage
                        name="fullName"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="sign__group">
                      <Field
                        type="text"
                        name="username"
                        className="sign__input"
                        placeholder="User Name"
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="sign__group">
                      <Field
                        type="text"
                        name="email"
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

                    <div className="sign__group">
                      <Field
                        type="password"
                        name="confirmPassword"
                        className="sign__input"
                        placeholder="Re-enter Password"
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="error"
                      />
                    </div>

                    <div className="sign__group sign__group--checkbox">
                      <Field
                        type="checkbox"
                        name="agreeToPrivacyPolicy"
                        id="agreeToPrivacyPolicy"
                        className="sign__checkbox"
                      />
                      <label htmlFor="agreeToPrivacyPolicy">
                        I agree to the <Link to={"/Faq"}>Privacy Policy</Link>
                      </label>
                      <ErrorMessage
                        name="agreeToPrivacyPolicy"
                        component="div"
                        className="error"
                      />
                    </div>
                    {/* Отображение сообщения об ошибке */}
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
                          <span className="success-icon"></span>
                        </>
                      ) : (
                        "Sign Up"
                      )}
                    </Button>
                    <span className="sign__text">
                      Already have an account?{" "}
                      <Link to={"/login"}> Sign In!</Link>
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
export default Register;
