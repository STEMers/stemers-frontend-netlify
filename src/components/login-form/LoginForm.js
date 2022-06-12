import './LoginForm.css';

import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import FlexBox from '../flex-box/FlexBox';

const LoginFormSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be more than 6 characters')
    .max(10, 'Password cannot exceed more than 10 characters')
    .required('Password is required'),
  username: Yup.string()
    .email('This is not a valid email format!')
    .required('Username/Email is required!')
});

const LoginForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ password: '', username: '' }}
      validationSchema={LoginFormSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <FlexBox alignItems="center" flexDirection="column">
            <label className="sign-in--label" htmlFor="userNameOrEmail">
              Username/Email:
            </label>
            <Field
              className="username-or-email user-input"
              id="UsernameField"
              name="username"
              placeholder="Enter username or email"
              required
            />
            {errors.username && touched.username && (
              <p className="validation-error error">{errors.username}</p>
            )}

            <label htmlFor="password" className="sign-in--label">
              Password:
            </label>
            <Field
              className="sign-in--password user-input"
              id="PasswordField"
              name="password"
              placeholder="Enter Password"
              required
              type="password"
            />
            {errors.password && touched.password &&(
              <p className="validation-error error">{errors.password}</p>
            )}

            <button className="sign-in--button btn" type="submit">
              Sign In
            </button>
          </FlexBox>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm;
