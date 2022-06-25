import { useState } from "react";
import { MdHttps } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import FlexBox from "../components/flex-box/FlexBox";
import styles from "../components/login-form/LoginForm.module.css"; // style
import LoginForm from "../components/login-form/LoginForm";
import ContinueWithLinkedIn from "../components/continue-with-linked-in/ContinueWithLinkedIn";
import { baseUrl } from "../config";
import swal from 'sweetalert';

const loginUrl = `${baseUrl}/auth/local`;

const LoginRoute = ({ setUserData }) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  async function handleLoginSubmit(values) {
    setIsLoading(true);

    try {
      const response = await fetch(encodeURI(loginUrl), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: values.usernameOrEmail,
          password: values.password,
        }),
      });

      if (!response.ok) {
        const errorJson = await response.json();
        const message = `\nStatus: ${response.status} \nStatus Text: ${response.statusText} \nMessage:${errorJson.error.message} \nurl-> ${loginUrl}`;

        throw new Error(message);
      }

      const json = await response.json();
      localStorage.setItem("jwt-token", json.jwt);
      localStorage.setItem("user-id",json.user.id);
      localStorage.setItem("username",json.user.username);
      swal("Success","Login success!", "success");

      setUserData(json); // store register usr for develop other authenticated feature // TypeError: setUserData is not a function

      navigate("/");
    } catch (err) {
      swal("Wrong credentials","Either username or password is incorrect!", "warning");
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
      <div className={styles.description}>
        Recognize <span className={styles.highlight}>STEM</span> women who go
        above and beyond. Lift up the women who inspire and educate your
        communities with <span className={styles.highlight}>STEMers</span>
        program
      </div>

      <LoginForm onSubmit={handleLoginSubmit} />

      {/* <FlexBox alignItems="center" flexDirection="column" gap="1rem"> */}
      <div className={styles.rememberSection}>
        <input
          type="checkbox"
          name="signInCheckbox"
          id="remember-me"
          className={styles.checkbox}
        />
        <label htmlFor="remember-me" className="label-remember-me">
          Remember me
        </label>
      </div>

      <div className={styles.forgotPasswordSection}>
        <MdHttps className={styles.lock} />
        <span className="span-forgot-password">Forgot your password?</span>
      </div>
      {/* </FlexBox> */}

      <div className={styles.switchSection}>
        <p className={styles.toAnother}>
          Not register yet?
          <span className={styles.switch} onClick={() => navigate("/register")}>
            Sign Up
          </span>
        </p>
      </div>

      <p className={styles.or}>OR</p>
      <ContinueWithLinkedIn />
    </FlexBox>
  );
};

export default LoginRoute;
