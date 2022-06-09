import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdHttps } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import "./styles.css";

export default function SignInOrSignUp() {
  const initialValues = {
    usrOrEmail: "",
    username: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const navigate = useNavigate();

  const handleChange = () => {};

  return (
    <div className="sign-in-or-sign-up">
      <form name="sign-in--form" id="sign-in-form" className="sign-in-form">
        <label htmlFor="usr-email">Username/Email:</label>
        <input
          type="text"
          name="usr-email"
          id="usr-email"
          placeholder="Enter username or email"
          className="sign-in--uer-email"
          value={formValues.usrOrEmail}
          onChange={handleChange}
          required
        />
        <p className="error-username error"> email error</p>
        <label htmlFor="password">Password</label>
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
        <input
          type="checkbox"
          name="sign-in--checkbox"
          id="remember-me"
          className="sign-in--checkbox"
        />
        <label htmlFor="remember-me">Remember me</label>
        <br />
        <MdHttps className="sign-in--lock" />
        <span>Forgot your password</span>
        <br />
        <button
          type="submit"
          form="sign-in-form"
          value="Submit"
          name="sign-in"
          className="sign-in--button"
        >
          Sign In
        </button>

        <p>OR</p>
        <div className="sign-in--continue-container">
          <div className="continue-with-github">
            <button>
              <FaGithub className="sign-in--github" /> Continue with Github
            </button>
          </div>

          <div className="continue-with-linkedin">
            <button>
              <FaLinkedinIn className="sign-in--linkedin" /> Continue with
              LinkedIn
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
