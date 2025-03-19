import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header/Header";
import Home from "./components/HomePage/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Privacypolicy from "./components/PrivacyPolicy/Privacypolicy";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <section>
        <Router>
          <ScrollToTop/>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<Privacypolicy/>}/>
          </Routes>
          <Footer />
        </Router>
      </section>
    </>
  );
}

export default App;
