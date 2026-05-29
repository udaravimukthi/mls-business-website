import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero"; // ← import Hero
import SuccessStories from "./components/SuccessStories/SuccessStories";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <SuccessStories />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;