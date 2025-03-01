import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header/Header";
import Home from "./components/HomePage/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <section>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </section>
    </>
  );
}

export default App;
