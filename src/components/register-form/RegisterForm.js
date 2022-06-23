import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import FlexBox from "../flex-box/FlexBox";
import styles from "../login-form/LoginForm.module.css";

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
            <label className={styles.label} htmlFor="username">
              Username:
            </label>
            <Field
              className={styles.input}
              id="username"
              name="username"
              placeholder="Enter username"
              value={values.username}
              onChange={handleChange("username")}
            />
            {errors.username && touched.username && (
              <p className={styles.error}>{errors.username}</p>
            )}

            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <Field
              className={styles.input}
              id="email"
              name="email"
              placeholder="Enter Email"
              value={values.email}
              onChange={handleChange("email")}
            />
            {errors.email && touched.email && (
              <p className={styles.error}>{errors.email}</p>
            )}

            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <Field
              className={styles.input}
              id="password"
              name="password"
              placeholder="Enter Password"
              type="password"
              value={values.password}
              onChange={handleChange("password")}
            />
            {errors.password && touched.password && (
              <p className={styles.error}>{errors.password}</p>
            )}

            <button className={styles.btn} type="submit">
              Sign Up
            </button>
          </FlexBox>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
