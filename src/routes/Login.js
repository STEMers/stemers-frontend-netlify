import { useState } from 'react';
import { MdHttps } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import FlexBox from '../components/flex-box/FlexBox';
import LoginForm from '../components/login-form/LoginForm';
import { baseUrl } from '../config';

const loginUrl = `${baseUrl}/auth/local`;

const LoginRoute = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  async function handleLoginSubmit(values) {
    setIsLoading(true);

    try {
      const response = await fetch(encodeURI(loginUrl), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: values.username,
          password: values.password
        })
      });

      if (!response.ok) {
        const errorJson = await response.json();
        const message = `\nStatus: ${response.status} \nStatus Text: ${response.statusText} \nMessage:${errorJson.error.message} \nurl-> ${loginUrl}`;

        throw new Error(message);
      }

      const json = await response.json();
      console.log('LOGIN SUCCESS', json);

      navigate('/');
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return (
      <div>
        <p>Loading..</p>
      </div>
    );
  }

  return (
    <FlexBox alignItems="center" flexDirection="column" gap="1rem">
      <div className="stemers-description-section">
        Recognize <span className="stem-highlight">STEM</span> women who go
        above and beyond. Lift up the women who inspire and educate your
        communities with <span className="stem-highlight">STEMers</span>
        program
      </div>

      <LoginForm onSubmit={handleLoginSubmit} />

      <FlexBox>
        <div className="remember-me-section">
          <input
            type="checkbox"
            name="signInCheckbox"
            id="remember-me"
            className="sign-in--checkbox"
          />
          <label
            htmlFor="remember-me"
            className="label-remember-me"
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
      </FlexBox>

      <div className="switch-to-Sign-up-section switch-section">
        <p className="to-sign-up to-another">
          Not register yet?
          <span className="toggle-sign-up" onClick={() => navigate('/register')}>
            Sign Up
          </span>
        </p>
      </div>
    </FlexBox>
  );
}

export default LoginRoute;
