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
  const [currentUserData, setCurrentUserData] = useState(null); // store sign in/sign up user data
  
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stars" element={<Stars />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route
            path="/login"
            element={<Login />}
            setCurrentUserData={setCurrentUserData}
          />
          <Route
            path="/register"
            element={<Register setCurrentUserData={setCurrentUserData} />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
