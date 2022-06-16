import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import FlexBox from "../flex-box/FlexBox";
import "./RegisterForm.module.css";

const RegisterFormSchema = Yup.object().shape({
  username: Yup.string().required("Username is required!"),
  email: Yup.string()
    .email("This is not a valid email format!")
    .required("Email is required!"),
  password: Yup.string()
    .min(6, "Password must be more than 6 characters")
    .max(10, "Password cannot exceed more than 10 characters")
    .required("Password is required"),
});

const RegisterForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={RegisterFormSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, values, handleChange }) => (
        <Form>
          <FlexBox alignItems="center" flexDirection="column">
            <label className="sign-up--label" htmlFor="username">
              Username:
            </label>
            <Field
              className="username user-input"
              id="username"
              name="username"
              placeholder="Enter username"
              value={values.username}
              onChange={handleChange("username")}
              //   required
            />
            {errors.username && touched.username && (
              <p className="validation-error error">{errors.username}</p>
            )}

            <label htmlFor="email" className="sign-up--label">
              Email:
            </label>
            <Field
              className="sign-up--email user-input"
              id="email"
              name="email"
              placeholder="Enter Email"
              value={values.email}
              onChange={handleChange("email")}
              //   required
              //   type="email"
            />
            {errors.email && touched.email && (
              <p className="validation-error error">{errors.email}</p>
            )}

            <label htmlFor="password" className="sign-up--label">
              Password:
            </label>
            <Field
              className="sign-up--password user-input"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={values.password}
              onChange={handleChange("password")}
              //   required
              //   type="password"
            />
            {errors.password && touched.password && (
              <p className="validation-error error">{errors.password}</p>
            )}

            <button className="sign-up--button btn" type="submit">
              Sign Up
            </button>
          </FlexBox>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
