import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Intro() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".intro__subtext",
      { top: 50 },
      { top: 0, duration: 1.5, ease: "power3" }
    );

    gsap.to(".floatingR", {
      scrollTrigger: {
        trigger: "#intro",
        start: "center 45%",
        markers: true,
        scrub: true,
      },
      top: "1rem",
      left: "2rem",
      fontSize: "6rem",
      lineHeight: "4rem",
    });

    gsap.to(".floatingR", {
      scrollTrigger: {
        trigger: "#intro",
        start: "bottom 50px",
        toggleActions: "play none none reset",
      },
      color: "#0061FE",
    });

    gsap.fromTo(
      ".amona",
      { top: 0 },
      {
        top: 200,
        scrollTrigger: {
          trigger: "#intro",
          start: "center 45%",
          duration: 10,
        },
      }
    );
  }, []);

  return (
    <section
      id="intro"
      className="inline-block w-full h-[95vh] bg-text text-bg"
    >
      <div className="text-[18rem] leading-[12rem]">
        <span className="floatingR fixed top-[35%] left-[10%]">R</span>
        <span className="overflow-hidden absolute inline-block h-fit top-[35%] left-[26%]">
          <span className="amona relative">amona</span>
        </span>
      </div>
      <div className="overflow-hidden relative block top-[60%] left-[40%]">
        <div className="intro__subtext relative h6">
          &#123; Web Developer &#125;
        </div>
      </div>
    </section>
  );
}
