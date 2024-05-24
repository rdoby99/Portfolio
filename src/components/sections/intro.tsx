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
  }, []);

  return (
    <section
      id="intro"
      className="flex flex-col min-h-[95vh] items-center justify-center bg-text text-bg"
    >
      <div className="text-[18rem]">Ramona</div>
      <div className="overflow-hidden relative block">
        <div className="intro__subtext relative h6">
          &#123; Web Developer &#125;
        </div>
      </div>
    </section>
  );
}
