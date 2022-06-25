import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FlexBox from "../components/flex-box/FlexBox";
import styles from "../components/login-form/LoginForm.module.css"; // not work
import RegisterForm from "../components/register-form/RegisterForm";
import ContinueWithLinkedIn from "../components/continue-with-linked-in/ContinueWithLinkedIn";
import { baseUrl } from "../config";

const SignUpUrl = `${baseUrl}/auth/local/register`;

const RegisterRoute = ({ setUserData }) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  async function handleSignUpSubmit(values) {
    setIsLoading(true);

    try {
      const response = await fetch(encodeURI(SignUpUrl), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: values.username,
          email: values.email,
          password: values.password,
        }),
      });

      if (!response.ok) {
        const errorJson = await response.json();
        const message = `\nStatus: ${response.status} \nStatus Text: ${response.statusText} \nMessage:${errorJson.error.message} \nurl-> ${SignUpUrl}`;

        throw new Error(message);
      }

      const json = await response.json();
      console.log("SIGN UP SUCCESS", json); 

      navigate("/");
    } catch (err) {
      alert(err);
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

      <RegisterForm onSubmit={handleSignUpSubmit} />

      <div className={styles.switchSection}>
        <p className={styles.toAnother}>
          Already have an account?
          <span className={styles.switch} onClick={() => navigate("/login")}>
            Sign In
          </span>
        </p>
      </div>

      <p className={styles.or}>OR</p>
      <ContinueWithLinkedIn />
    </FlexBox>
  );
};

export default RegisterRoute;
