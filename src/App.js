import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Profile from "./components/profile/Profile";
import Stars from "./components/stars/Stars";
import { Login, Register } from "./routes";
import { NotFound } from "./components/404/NotFound";
import { Invite } from "./components/invitation/Invite";

function App() {
  // sign in or sign up state
  const [userData, setUserData] = useState(null); // store sign in/sign up user data

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invite" element={<Invite />} />
          <Route path="/stars" element={<Stars />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/login" element={<Login setUserData={setUserData} />} />
          <Route
            path="/register"
            element={<Register setUserData={setUserData} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
