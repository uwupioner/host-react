import About from "./components/About";
import GreenBtn from "./components/GreenBtn";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Support from "./components/Support";
import Pricing from "./components/Pricing"
import Footer from "./components/Footer";


function App() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Support/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

export default App;
