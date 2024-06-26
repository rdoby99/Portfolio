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
import { useState, useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

function App() {
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  const headerContainer = useRef(null);

  const [showOverlay, setShowOverlay] = useState(false);
  const [workLoaded, setWorkLoaded] = useState(false);

  const handleOverlayStateChange = (newState) => {
    setShowOverlay(newState);
  };

  const handleWorkLoadChange = (newState) => {
    setWorkLoaded(newState);
  };

  useGSAP(() => {
    let smoother = ScrollSmoother.create({
      wrapper: "#scroll-wrapper",
      content: "#scroll-content",
      smooth: 2,
      effects: true,
    });
  });

  useGSAP(() => {
    if (showOverlay) {
      const tl = gsap.timeline({
        onComplete: () => {
          setShowOverlay(false);
        },
      });

      tl.set("#scrollOverlay__inner", {
        width: "100vw",
      });

      tl.to(".scrollOverlay", {
        width: "100vw",
        duration: 0.5,
        stagger: 0.2,
        ease: "expo.out",
      });

      tl.set("#scrollOverlay__inner", {
        width: "0vw",
        delay: 0.75,
      });

      tl.to(".scrollOverlay", {
        width: "0vw",
        duration: 0.5,
        stagger: {
          amount: 0.2,
          from: "end",
        },
        ease: "expo.out",
      });
    }
  }, [showOverlay]);

  return (
    <div className="relative">
      <Header
        onOverlayStateChange={handleOverlayStateChange}
        workLoaded={workLoaded}
      />
      <div id="scroll-wrapper">
        <div id="scroll-content">
          <Intro />
          <Hero />
          <About />
          <FeaturedWork onWorkLoadChange={handleWorkLoadChange} />
          <Work />
          <Footer onOverlayStateChange={handleOverlayStateChange} />
        </div>
      </div>
      <div className="fixed z-50 w-full h-full pointer-events-none">
        <div
          id="scrollOverlay__inner"
          className="h-full w-0 bg-background absolute top-0 left-0"
        ></div>
        <div className="scrollOverlay h-full w-0 bg-text inline-block absolute top-0 left-0"></div>
        <div className="scrollOverlay h-full w-0 bg-background inline-block absolute top-0 left-0"></div>
      </div>
    </div>
  );
}

export default App;
