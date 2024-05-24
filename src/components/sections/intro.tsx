import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Intro() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".intro__subtext", { duration: 1, top: 50, ease: "power1" });
  }, []);

  return (
    <section
      id="intro"
      className="flex flex-col min-h-[90vh] items-center justify-center bg-text text-bg"
    >
      <div className="text-[18rem]">Ramona</div>
      <div className="overflow-hidden relative block">
        <div className="intro__subtext relative">
          &#123; Web Developer &#125;
        </div>
      </div>
    </section>
  );
}
