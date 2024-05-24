import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".hero__subtext", { duration: 1, top: 50, ease: "power1" });
  }, []);

  return (
    <section
      id="hero"
      className="text-center flex flex-col gap-2 justify-center items-center min-h-[80vh]"
    >
      <div className="overflow-hidden relative block">
        <div className="hero__subtext relative">&#123; Welcome &#125;</div>
      </div>
      <h1>
        Hi THERE
        <br />
        <i>NICE</i> to
        <br />
        MEET you
      </h1>
    </section>
  );
}
