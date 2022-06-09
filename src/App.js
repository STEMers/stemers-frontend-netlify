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
  const [needSignIn, setNeedSignIn] = useState(true); // for toggle sign in or sign up
  const formInitialValues = { usrOrEmail: "", username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(formInitialValues); // collect form data
  const [userData, setUserData]= useState(null); // data from sign in or sign up, in case other components needed it.
  const [globalError, setGlobalError]=useState(null); // display error msg

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/signIn" element={<SignInOrSignUP 
          needSignIn={needSignIn}
          setNeedSignIn={setNeedSignIn}
          formInitialValues={formInitialValues}
          formValues={formValues}
          setFormValues={setFormValues}
          userData={userData}
          setUserData={setUserData}
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
