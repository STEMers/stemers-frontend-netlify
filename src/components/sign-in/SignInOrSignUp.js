import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdHttps } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import "./styles.css";
import { baseUrl } from "../../config";

// const [userState, setUserState] = useState({needSignIn:true, forgotPassword:false}); // for toggle sign in or sign up
// const formInitialValues = { usrOrEmail: "", username: "", email: "", password: "" };
// const [formValues, setFormValues] = useState(formInitialValues); // collect form data
// const [userData, setUserData]= useState(null); // data from sign in or sign up, in case other components needed it.
// const [globalError, setGlobalError]=useState(null); // display error msg

export default function SignInOrSignUp({
  userState, 
  setUserState,
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

  /* switch section on: sign in -> sign up */
  const handleToggleSignUp = () => {
    setUserState({...userState, needSignIn:false});
  };

  /* switch section on: sign up -> sign in */
  const handleToggleSignIn = () => {
    setUserState({...userState, needSignIn:true});
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
      const body = userState.needSignIn ? signInBody : signUpBody;
      const url = userState.needSignIn ? SignInUrl : SignUpUrl;

      /* fetch data */
      const response = await fetch(encodeURI(url), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        const errorJson = await response.json();
        const message = `\nStatus: ${response.status} \nStatus Text: ${response.statusText} \nMessage:${errorJson.error.message} \nurl-> ${url}`;
        throw new Error(message);
      }

      const json = await response.json();
      console.log("sign in or sign up json:", json);
      setUserData(json);

      setFormValues(formInitialValues); // clear input fields
      navigate("/"); // redirect to home;
    } catch (err) {
      alert(err);
      //   setGlobalError(err);  //  globalError didn't use!
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
        <div className="stemers-description-section">
          Recognize <span className="stem-highlight">STEM</span> women who go
          above and beyond. Lift up the women who inspire and educate your
          communities with <span className="stem-highlight">STEMers</span>{" "}
          program
        </div>

        <div className="form-main">
          {userState.needSignIn ? (
            <div className="sign-in-section">
              <label htmlFor="userNameOrEmail" className="sign-in--label">
                Username/Email:
              </label>{" "}
              <br />
              <input
                type="text"
                name="usrOrEmail"
                id="userNameOrEmail"
                placeholder="Enter username or email"
                className="username-or-email user-input"
                value={formValues.usrOrEmail}
                onChange={handleChange}
                required
              />
              <p className="error-username error"> email error</p>
              <label htmlFor="password" className="sign-in--label">
                Password:
              </label>{" "}
              <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                className="sign-in--password user-input"
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
                <label
                  htmlFor="remember-me"
                  className="sign-in--label label-remember-me"
                >
                  Remember me
                </label>
              </div>
              <div className="forgot-password-section">
                <MdHttps className="sign-in--lock" />
                <span className="span-forgot-password">
                  Forgot your password?
                </span>
              </div>
              <button
                type="submit"
                form="entry-form"
                value="Submit"
                name="signIn"
                className="sign-in--button btn"
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
              <label htmlFor="username" className="sign-in--label">
                Username:
              </label>{" "}
              <br />
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter username"
                className="sign-up-username user-input"
                value={formValues.username}
                onChange={handleChange}
                required
              />
              <p className="error-username error"> username error</p>
              <label htmlFor="email" className="sign-in--label">
                Email:
              </label>{" "}
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                className="email user-input"
                value={formValues.email}
                onChange={handleChange}
                required
              />
              <p className="error-username error"> email error</p>
              <label htmlFor="password" className="sign-in--label">
                Password:
              </label>{" "}
              <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                className="sign-up--password user-input"
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
                className="sign-up--button btn"
                onSubmit={handleSubmit}
              >
                Sign Up
              </button>
              <div className="switch-to-Sign-in-section">
                <p className="to-sign-in">
                  Already have an account?
                  <span className="toggle-sign-in" onClick={handleToggleSignIn}>
                    Sign In
                  </span>
                </p>
              </div>
            </div>
          )}

          <p>OR</p>
          <div className="continue-section">
            <div className="continue-with-github">
              <button className="github-continue-button continue-button btn">
                <FaGithub className="continue-github" /> Continue with Github
              </button>
            </div>

            <div className="continue-with-linkedin">
              <button className="linkedin-continue-button continue-button btn">
                <FaLinkedinIn className="continue-linkedin" /> Continue with
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
