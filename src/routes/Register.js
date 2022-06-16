import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FlexBox from "../components/flex-box/FlexBox";
import RegisterForm from "../components/register-form/RegisterForm";
import ContinueWithLinkedIn from "../components/continue-with-linked-in/ContinueWithLinkedIn";
import { baseUrl } from "../config";

const SignUpUrl = `${baseUrl}/auth/local/register`;

const RegisterRoute = ({ setCurrentUserData }) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  async function handleSignUpSubmit(values) {
    setIsLoading(true);

    try {
      const response = await fetch(encodeURI(SignUpUrl), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: values.username,
          email: values.email,
          password: values.password,
        }),
      });

      if (!response.ok) {
        const errorJson = await response.json();
        const message = `\nStatus: ${response.status} \nStatus Text: ${response.statusText} \nMessage:${errorJson.error.message} \nurl-> ${SignUpUrl}`;

        throw new Error(message);
      }

      const json = await response.json();
      console.log("SIGN UP SUCCESS", json);

      setCurrentUserData(json); // store register usr for develop other authenticated feature

      navigate("/");
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <FlexBox alignItems="center" flexDirection="column" gap="1rem">
      <div className="stemers-description-section">
        Recognize <span className="stem-highlight">STEM</span> women who go
        above and beyond. Lift up the women who inspire and educate your
        communities with <span className="stem-highlight">STEMers</span>
        program
      </div>

      <RegisterForm onSubmit={handleSignUpSubmit} />

      <FlexBox alignItems="center" flexDirection="column" gap="1rem">
        <div className="remember-me-section">
          <input
            type="checkbox"
            name="signInCheckbox"
            id="remember-me"
            className="sign-in--checkbox"
          />
          <label htmlFor="remember-me" className="label-remember-me">
            Remember me
          </label>
        </div>
      </FlexBox>

      <div className="switch-to-Sign-in-section switch-section">
        <p className="to-sign-in to-another">
          Already have an account?
          <span className="toggle-sign-in" onClick={() => navigate("/login")}>
            Sign In
          </span>
        </p>
      </div>

      <p className="or">OR</p>
      <ContinueWithLinkedIn />
    </FlexBox>
  );
};

export default RegisterRoute;
