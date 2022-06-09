import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./styles.css";

export default function SignInOrSignUp() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const navigate = useNavigate();

  return (
    <div className="sign-in-or-sign-up">
      <form name="sign-in--form" className="sign-in-form">
      <label htmlFor="usr-email">Username/Email:</label>
        <input
          type="text"
          name="usr-email"
          id="usr-email"
          placeholder="Enter username or email"
          className="sign-in--uer-email"
          value={formValues.email}
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
          required
        />
        <p className="error-password error"> password error</p>
        <input type="checkbox" name="sign-in--checkbox" id="remember-me"/>
        <label htmlFor="remember-me">Remember me</label>

      </form>
    </div>
  );
}
