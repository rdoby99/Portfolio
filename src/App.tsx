import Header from "./components/sections/header";
import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import FeaturedWork from "./components/sections/featuredWork";
import Footer from "./components/sections/footer";
import Intro from "./components/sections/intro";
import Work from "./components/sections/work";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import ScrollSmoother from "gsap/src/ScrollSmoother";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

function App() {
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  useGSAP(() => {
    let smoother = ScrollSmoother.create({
      wrapper: "#scroll-wrapper",
      content: "#scroll-content",
      smooth: 2,
      effects: true,
    });
  });

  return (
    <div id="scroll-wrapper">
      <div id="scroll-content">
        <Intro />
        <Header />
        <Hero />
        <About />
        <FeaturedWork />
        <Work />
        <Footer />
      </div>
    </div>
  );
}

export default App;
