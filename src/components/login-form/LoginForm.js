import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import FlexBox from "../flex-box/FlexBox";
// import "./LoginForm.module.css";  // not work. how to use style from it?
import styles from "./LoginForm.module.css"; // works

const LoginFormSchema = Yup.object().shape({
  usernameOrEmail: Yup.string().required("Username/Email is required!"),
  password: Yup.string()
    .min(6, "Password must be more than 6 characters")
    .max(10, "Password cannot exceed more than 10 characters")
    .required("Password is required"),
});

const localStorageBody = JSON.parse(localStorage.getItem("stemers")); //
console.log("localStorageBody", localStorageBody);

const LoginForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ usernameOrEmail: "", password: "" }}
      validationSchema={localStorageBody ? null : LoginFormSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, values, handleChange }) => (
        <Form>
          <FlexBox alignItems="center" flexDirection="column">
            <label className={styles.label} htmlFor="userNameOrEmail">
              Username/Email:
            </label>
            <Field
              className={styles.input}
              id="usernameOrEmail"
              name="usernameOrEmail"
              placeholder="Enter Username or Email"
              value={
                localStorageBody
                  ? localStorageBody.identifier
                  : values.usernameOrEmail
              }
              onChange={handleChange}
            />
            {errors.usernameOrEmail && touched.usernameOrEmail && (
              <p className={styles.error}>{errors.usernameOrEmail}</p>
            )}

            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <Field
              className={styles.input}
              id="password"
              name="password"
              placeholder="Enter Password"
              value={
                localStorageBody ? localStorageBody.password : values.password
              }
              onChange={handleChange}
              type="password"
            />
            {errors.password && touched.password && (
              <p className={styles.error}>{errors.password}</p>
            )}

            <button className={styles.btn} type="submit">
              Sign In
            </button>
          </FlexBox>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
