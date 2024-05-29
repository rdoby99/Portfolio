import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spiral from "./spiral";

export default function Hero() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".hero__subtext",
      { top: 50 },
      {
        top: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#hero",
          start: "top center",
          toggleActions: "play none reset none",
        },
      }
    );

    gsap.from(".hero__italic", {
      scrollTrigger: {
        trigger: "#hero",
        start: "top center",
        toggleActions: "play none none none",
      },
      x: 50,
      duration: 1,
      ease: "none",
    });
  }, []);

  return (
    <section
      id="hero"
      className="hero text-center flex flex-col gap-2 justify-center items-center min-h-[100vh]"
    >
      <div className="relative">
        <div className="overflow-hidden relative block">
          <div className="hero__subtext relative h6">&#123; Welcome &#125;</div>
        </div>
        <h1 className="text-[10rem]">
          Hi THERE
          <br />
          <span className="hero__italic italic">NICE</span> to
          <br />
          MEET you
        </h1>
        <Spiral />
      </div>
    </section>
  );
}
