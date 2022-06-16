import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Profile from "./components/profile/Profile";
// import SignInOrSignUP from './components/sign-in/SignInOrSignUp';
import Stars from "./components/stars/Stars";
import { Login, Register } from "./routes";

function App() {
  // sign in or sign up state
  const [userData, setUserData] = useState(null); // store sign in/sign up user data 

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stars" element={<Stars />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/login" element={<Login setUserData={setUserData} />} />
          <Route
            path="/register"
            element={<Register setUserData={setUserData} />}
          />
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
