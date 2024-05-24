import React, { useEffect } from "react";
import logo from "/logo.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Header() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("nav", {
      scrollTrigger: {
        trigger: "#intro",
        start: "bottom 50px",
        toggleActions: "play none none reset",
      },
      color: "#0061fe",
      duration: 1,
      ease: "none",
    });

    gsap.to("#header__border", {
      scrollTrigger: {
        trigger: "#intro",
        start: "bottom 50px",
        toggleActions: "play none none reset",
      },
      width: "100%",
      duration: 0.75,
      ease: "none",
    });
  }, []);

  return (
    <header className="header fixed text-bg top-0 flex justify-between items-center w-full px-8 py-4">
      <img src={logo} alt="Ramona Doby Logo" className="w-12" />
      <nav>
        <ul className="flex gap-4 h6">
          <li>About</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div
        id="header__border"
        className="absolute bottom-0 left-0 inline-block w-0 h-[1px] bg-text"
      ></div>
    </header>
  );
}
