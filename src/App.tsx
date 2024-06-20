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
import { useState } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

function App() {
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  const [showOverlay, setShowOverlay] = useState(false);

  const handleOverlayStateChange = (newState) => {
    setShowOverlay(newState);
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

      tl.to("#scrollOverlay__inner", {
        width: "100vw",
        duration: 0,
      });

      tl.to(".scrollOverlay", {
        width: "100vw",
        duration: 0.5,
        stagger: 0.2,
        ease: "expo.out",
      });

      tl.to("#scrollOverlay__inner", {
        width: "0vw",
        delay: 0.75,
        duration: 0,
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
    <div id="scroll-wrapper">
      <div id="scroll-content">
        <Intro />
        <Header onOverlayStateChange={handleOverlayStateChange} />
        <Hero />
        <About />
        <FeaturedWork />
        <Work />
        <Footer onOverlayStateChange={handleOverlayStateChange} />
        <div
          id="scrollOverlay__inner"
          className="h-full w-0 bg-background absolute top-0 left-0 z-50"
        ></div>
        <div className="scrollOverlay h-full w-0 bg-text inline-block absolute top-0 left-0 z-50"></div>
        <div className="scrollOverlay h-full w-0 bg-background inline-block absolute top-0 left-0 z-50"></div>
      </div>
    </div>
  );
}

export default App;
