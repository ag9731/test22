import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ReactGA from "react-ga4";

import "react-toastify/dist/ReactToastify.css"; // <-- Required
import { ToastContainer } from "react-toastify"; // <-- Required

import reactLogo from "./assets/react.svg";
import Header from "./components/Header/Header";
import Home from "./components/HomePage/Home";
import Footer from "./components/Footer/Footer";
import Privacypolicy from "./components/PrivacyPolicy/Privacypolicy";
import ScrollToTop from "./components/ScrollToTop";
import FloatingSocialMedia from "./components/FloatingSocialMedia";

// Google Analytics
const TRACKING_ID = "G-WYY911X1BH";
ReactGA.initialize(TRACKING_ID);

function GAListener() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <section>
      <Router>
        <GAListener />
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<Privacypolicy />} />
        </Routes>

        <Footer />

        {/* ✅ Toast Popup Component */}
        <ToastContainer position="top-center" autoClose={3000} />
      </Router>

      <FloatingSocialMedia />
    </section>
  );
}

export default App;
