import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Profile from "./components/profile/Profile";
import SignInOrSignUP from "./components/sign-in/SignInOrSignUp";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/signIn" element={<SignInOrSignUP />} />
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
