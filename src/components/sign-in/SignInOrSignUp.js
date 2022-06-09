import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdHttps } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import "./styles.css";
import { baseUrl } from "../../config";

// const [userState, setUserState] = useState({needSignIn:true, needSignUp:false});
// const initialValues = { usrOrEmail: "", username: "", email: "", password: "" };
// const [formValues, setFormValues] = useState(initialValues);
// const [globalError, setGlobalError]=useState(null);

export default function SignInOrSignUp({
  needSignIn,
  setNeedSignIn,
  formInitialValues,
  formValues,
  setFormValues,
  userData,
  setUserData,
  globalError,
  setGlobalError,
}) {
  const SignInUrl = `${baseUrl}/auth/local`;
  const SignUpUrl = `${baseUrl}/auth/local/register`;
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  /* handle and store user input */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  /* handle toggle sign up section */
  const handleToggleSignUp = () => {
    setNeedSignIn(false);

  };

  /* handle form submit: use async fn */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      /* set up body and url: use ternary */
      const signInBody = {
        identifier: formValues.usrOrEmail,
        password: formValues.password,
      };
      const signUpBody = {
        username: formValues.username,
        email: formValues.email,
        password: formValues.password,
      };
      const body = needSignIn ? signInBody : signUpBody;
      const url = needSignIn ? SignInUrl : SignUpUrl;

      /* fetch data */
      const response = await fetch(encodeURI(url), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error("didn't receive expected data.");
      }

      const json = await response.json();
      console.log("sign in or sign up json:", json);
      setUserData(json);

      setFormValues(formInitialValues); // clear input fields
      navigate("/"); // redirect to home;
    } catch (err) {
      setGlobalError(err);
    } finally {
      setIsLoading(false);
      //   console.log(" sign in or sign up form submitted");
    }
  };

  return (
    <div className="sign-in-or-sign-up">
      <form
        name="entry-form"
        id="entry-form"
        className="entry-form"
        onSubmit={handleSubmit}
      >
        {needSignIn? (
          <div className="sign-in-section">
            <label htmlFor="usr-email">Username/Email:</label>
            <input
              type="text"
              name="usrOrEmail"
              id="usr-email"
              placeholder="Enter username or email"
              className="username-or-email"
              value={formValues.usrOrEmail}
              onChange={handleChange}
              required
            />
            <p className="error-username error"> email error</p>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              className="sign-in--password"
              value={formValues.password}
              onChange={handleChange}
              required
            />
            <p className="error-password error"> password error</p>
            <div className="remember-me-section">
              <input
                type="checkbox"
                name="signInCheckbox"
                id="remember-me"
                className="sign-in--checkbox"
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <div className="forgot-password-section">
              <MdHttps className="sign-in--lock" />
              <span>Forgot your password?</span>
            </div>

            <button
              type="submit"
              form="entry-form"
              value="Submit"
              name="signIn"
              className="sign-in--button"
              onSubmit={handleSubmit}
            >
              Sign In
            </button>

            <div className="switch-to-Sign-up-section">
              <p className="to-sign-up">
                Not register yet?
                <span className="toggle-sign-up" onClick={handleToggleSignUp}>
                  Sign Up
                </span>
              </p>
            </div>
          </div>
        ) : (
          <div className="sign-up-section">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username"
              className="sign-up-username"
              value={formValues.username}
              onChange={handleChange}
              required
            />
            <p className="error-username error"> username error</p>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              className="email"
              value={formValues.email}
              onChange={handleChange}
              required
            />
            <p className="error-username error"> email error</p>

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              className="sign-up--password"
              value={formValues.password}
              onChange={handleChange}
              required
            />
            <p className="error-password error"> password error</p>
            <button
              type="submit"
              form="entry-form"
              value="Submit"
              name="sign-up"
              className="sign-up--button"
              onSubmit={handleSubmit}
            >
              Sign Up
            </button>
          </div>
        )}

        <p>OR</p>
        <div className="continue-container">
          <div className="continue-with-github">
            <button>
              <FaGithub className="continue-github" /> Continue with Github
            </button>
          </div>

          <div className="continue-with-linkedin">
            <button>
              <FaLinkedinIn className="continue-linkedin" /> Continue with
              LinkedIn
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
