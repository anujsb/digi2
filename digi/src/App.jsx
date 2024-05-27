import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Overlaymenu from "./components/ham/FullscreenOverlayNav";
import Land from "./components/Land";
import Payment from "./components/Pages/Payment";
import Tnc from "./components/Tnc";
import Privacy from "./components/Privacy";

// Pages
import About from "./components/Pages/About";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Faq from "./components/Faq";
import Testimonial from "./components/Testimonial";

// Services
import DigitalMarketing from "./components/Services/DigitalMarketing";
import SocialMarketing from "./components/Services/SocialMarketing";
import PaidAdvertising from "./components/Services/PaidAdvertising";
import SEO from "./components/Services/SEO";
import Website from "./components/Services/Website";
import Branding from "./components/Services/Branding";
import GraphicDesigning from "./components/Services/GraphicDesigning";
import VideoProduction from "./components/Services/VideoProduction";

// Layout Component
const Layout = ({ children }) => (
  <div className="justify-center items-center w-full">
    <Navbar />
    {children}
    <Contact />
    <Footer />
    <Overlaymenu />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/Home"
          element={
            <Layout>
              <Hero />
              <Info />
              <Services />
              <Blog />
              <Testimonial />
              <Faq />
            </Layout>
          }
        />
        <Route
          path="/About"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/DigitalMarketing"
          element={
            <Layout>
              <DigitalMarketing />
            </Layout>
          }
        />
        <Route
          path="/SocialMarketing"
          element={
            <Layout>
              <SocialMarketing />
            </Layout>
          }
        />
        <Route
          path="/PaidAdvertising"
          element={
            <Layout>
              <PaidAdvertising />
            </Layout>
          }
        />
        <Route
          path="/SEO"
          element={
            <Layout>
              <SEO />
            </Layout>
          }
        />
        <Route
          path="/Website"
          element={
            <Layout>
              <Website />
            </Layout>
          }
        />
        <Route
          path="/Branding"
          element={
            <Layout>
              <Branding />
            </Layout>
          }
        />
        <Route
          path="/GraphicDesigning"
          element={
            <Layout>
              <GraphicDesigning />
            </Layout>
          }
        />
        <Route
          path="/VideoProduction"
          element={
            <Layout>
              <VideoProduction />
            </Layout>
          }
        />
        <Route
          path="/Services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/Blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/Faq"
          element={
            <Layout>
              <Faq />
            </Layout>
          }
        />
        <Route
          path="/Contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <Land />
              <Services />
              <Info />
              <Testimonial />
            </Layout>
          }
        />
        <Route
          path="/Payment"
          element={
            <Layout>
              <Payment />
            </Layout>
          }
        />
        <Route
          path="/tnc"
          element={
            <Layout>
              <Tnc />
            </Layout>
          }
        />
        <Route
          path="/privacy"
          element={
            <Layout>
              <Privacy />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
