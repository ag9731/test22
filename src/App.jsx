import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ReactGA from "react-ga4";

import reactLogo from "./assets/react.svg";
import Header from "./components/Header/Header";
import Home from "./components/HomePage/Home";
import Footer from "./components/Footer/Footer";
import Privacypolicy from "./components/PrivacyPolicy/Privacypolicy";
import ScrollToTop from "./components/ScrollToTop";
import FloatingSocialMedia from "./components/FloatingSocialMedia";

// ✅ Your Google Analytics 4 Tracking ID
const TRACKING_ID = "G-WYY911X1BH";
ReactGA.initialize(TRACKING_ID);

// ✅ Custom component to track route changes
function GAListener() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
}

function App() {
  // ✅ Track the initial page load
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
      </Router>
      <FloatingSocialMedia />
    </section>
  );
}

export default App;
