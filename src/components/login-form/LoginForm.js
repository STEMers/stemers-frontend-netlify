// import './LoginForm.css';
import "./LoginForm.module.css";

import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import FlexBox from "../flex-box/FlexBox";

const LoginFormSchema = Yup.object().shape({
  usernameOrEmail: Yup.string().required("Username/Email is required!"),
  // username: Yup.string().required("Username is required!"),
  // email: Yup.string()
  //   .email("This is not a valid email format!")
  //   .required("Username/Email is required!"),
  password: Yup.string()
    .min(6, "Password must be more than 6 characters")
    .max(10, "Password cannot exceed more than 10 characters")
    .required("Password is required"),
});

const LoginForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ usernameOrEmail: "", password: "" }}
      validationSchema={LoginFormSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, values, handleChange }) => (
        <Form>
          <FlexBox alignItems="center" flexDirection="column">
            <label className="sign-in--label" htmlFor="userNameOrEmail">
              Username/Email:
            </label>
            <Field
              className="username-or-email user-input"
              id="usernameOrEmail"
              name="usernameOrEmail"
              placeholder="Enter Username or Email"
              value={values.usernameOrEmail}
              onChange={handleChange("usernameOrEmail")}
              // required
            />
            {errors.usernameOrEmail && touched.usernameOrEmail && (
              <p className="validation-error error">{errors.usernameOrEmail}</p>
            )}

            <label htmlFor="password" className="sign-in--label">
              Password:
            </label>
            <Field
              className="sign-in--password user-input"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={values.password}
              onChange={handleChange("password")}
              // required
              // type="password"
            />
            {errors.password && touched.password && (
              <p className="validation-error error">{errors.password}</p>
            )}

            <button className="sign-in--button btn" type="submit">
              Sign In
            </button>
          </FlexBox>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
