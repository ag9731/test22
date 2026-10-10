import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ReactGA from "react-ga4";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import TawkTo from "./components/TawkTo";
import FloatingSocialMedia from "./components/FloatingSocialMedia";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./components/HomePage/Home";
import Privacypolicy from "./components/PrivacyPolicy/Privacypolicy";
import AboutUs from "./pages/AboutUs";
import ServicesOverview from "./pages/ServicesOverview";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";

// Service Pages
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import BusinessWebsiteDevelopment from "./pages/services/BusinessWebsiteDevelopment";
import EcommerceWebsiteDevelopment from "./pages/services/EcommerceWebsiteDevelopment";
import WebsiteRedesign from "./pages/services/WebsiteRedesign";
import WebApplicationDevelopment from "./pages/services/WebApplicationDevelopment";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import GoogleAdsManagement from "./pages/services/GoogleAdsManagement";
import MetaAdsManagement from "./pages/services/MetaAdsManagement";
import SocialMediaMarketing from "./pages/services/SocialMediaMarketing";
import LeadGeneration from "./pages/services/LeadGeneration";
import SeoServices from "./pages/services/SeoServices";
import LocalSeo from "./pages/services/LocalSeo";
import TechnicalSeo from "./pages/services/TechnicalSeo";
import OnPageSeo from "./pages/services/OnPageSeo";
import GoogleBusinessProfileOptimization from "./pages/services/GoogleBusinessProfileOptimization";
import GoogleMapsRanking from "./pages/services/GoogleMapsRanking";
import GoogleBusinessProfileManagement from "./pages/services/GoogleBusinessProfileManagement";
import AiAutomation from "./pages/services/AiAutomation";
import AiChatbotDevelopment from "./pages/services/AiChatbotDevelopment";
import BusinessProcessAutomation from "./pages/services/BusinessProcessAutomation";

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
        {/* <TawkTo /> */}
        <GAListener />
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<Privacypolicy />} />
          
          {/* Services Routes */}
          <Route path="/website-development" element={<WebsiteDevelopment />} />
          <Route path="/business-website-development" element={<BusinessWebsiteDevelopment />} />
          <Route path="/ecommerce-website-development" element={<EcommerceWebsiteDevelopment />} />
          <Route path="/website-redesign" element={<WebsiteRedesign />} />
          <Route path="/web-application-development" element={<WebApplicationDevelopment />} />
          <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/google-ads-management" element={<GoogleAdsManagement />} />
          <Route path="/meta-ads-management" element={<MetaAdsManagement />} />
          <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/lead-generation" element={<LeadGeneration />} />
          <Route path="/seo-services" element={<SeoServices />} />
          <Route path="/local-seo" element={<LocalSeo />} />
          <Route path="/technical-seo" element={<TechnicalSeo />} />
          <Route path="/on-page-seo" element={<OnPageSeo />} />
          <Route path="/google-business-profile-optimization" element={<GoogleBusinessProfileOptimization />} />
          <Route path="/google-maps-ranking" element={<GoogleMapsRanking />} />
          <Route path="/google-business-profile-management" element={<GoogleBusinessProfileManagement />} />
          <Route path="/ai-automation" element={<AiAutomation />} />
          <Route path="/ai-chatbot-development" element={<AiChatbotDevelopment />} />
          <Route path="/business-process-automation" element={<BusinessProcessAutomation />} />
        </Routes>

        <Footer />
        <ToastContainer position="top-center" autoClose={3000} />
      </Router>
      <FloatingSocialMedia />
    </section>
  );
}

export default App;
