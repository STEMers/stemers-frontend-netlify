import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useState } from "react";

import "./App.css";
import "./normalize.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Profile from "./components/profile/Profile";
import SignInOrSignUP from "./components/sign-in/SignInOrSignUp";
import Stars from "./components/stars/Stars";

function App() {
  // sign in or sign up states 
  const [userState, setUserState] = useState({needSignIn:true, forgotPassword:false}); // for toggle sign in or sign up
  const formInitialValues = { usrOrEmail: "", username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(formInitialValues); // collect form data
  const [userData, setUserData]= useState(null); // data from sign in or sign up, in case other components needed it.
  const [isLoading, setIsLoading] = useState(false);
  const [globalError, setGlobalError]=useState(null); // display error msg

  return (
    <div className="App">      
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stars" element={<Stars />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/signIn" element={<SignInOrSignUP 
          userState={userState}
          setUserState={setUserState}
          formInitialValues={formInitialValues}
          formValues={formValues}
          setFormValues={setFormValues}
          userData={userData}
          setUserData={setUserData}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
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
