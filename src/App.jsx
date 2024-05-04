import FAQ from "./components/FAQ";
import Branding from "./pages/Branding";
import CallToAction from "./pages/CallToAction";
import Features from "./pages/Features";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Team from "./pages/Team";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Branding />
      <Team />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
