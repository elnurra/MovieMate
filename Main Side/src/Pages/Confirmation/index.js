import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { accountService } from "../../APIs/Services/AccountService";
import "./index.scss";

function Confirmation() {
  const location = useLocation();
  const search = decodeURIComponent(location.search);
  const searchParams = new URLSearchParams(search);
  const userId = searchParams.get("userId");
  const token = searchParams.get("token");
  const sanitizedToken = token.replace(/ /g, "+");
  console.log(sanitizedToken);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        const response = await accountService.confirmEmail(
          userId,
          sanitizedToken
        );
        if (response.statusMessage === "Success") {
          setMessage("Email confirmed successfully!");
          setIsError(false);
          const timer = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
          }, 1000);

          if (countdown === 0) {
            clearInterval(timer);
            navigate("/login");
          }

          return () => clearInterval(timer);
        } else {
          const errorMessage = response.errors
            ? response.errors.join(", ")
            : "Token session was expired";
          setMessage(errorMessage);
          setIsError(true);
        }
      } catch (error) {
        setMessage(
          "There was an error confirming your email. Please try again."
        );
        setIsError(true);
      }
    };

    confirmEmail();
  }, [countdown, userId, token, navigate]);

  return (
    <div className="email-confirmation-container">
      <h2
        className="email-confirmation-title"
        style={{ color: isError ? "red" : "green" }}
      >
        {message}
      </h2>
      {!isError && (
        <p className="email-confirmation-message">
          You will redirected to Login in few seconds.
        </p>
      )}
    </div>
  );
}

export default Confirmation;
