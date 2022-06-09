import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Profile from "./components/profile/Profile";
import SignInOrSignUP from "./components/sign-in/SignInOrSignUp";

function App() {
  // sign in or sign up states 
  const [userState, setUserState] = useState({needSignIn:true, needSignUp:false});
  const initialValues = { usernameEmail: "", username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [globalError, setGlobalError]=useState(null);

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/signIn" element={<SignInOrSignUP 
          userState={userState}
          setUserState={setUserState}
          formValues={formValues}
          setFormValues={setFormValues}
          globalError={globalError}
          setGlobalError={setGlobalError}
          />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

/* 
  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to STEMers
        </a>
      </header>
*/
