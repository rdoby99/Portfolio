import React, { useEffect } from "react";
import logo from "/logo.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Header() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      "nav",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "#intro",
          start: "bottom 50px",
        },
      }
    );

    gsap.to("#header__border", {
      scrollTrigger: {
        trigger: "#intro",
        start: "bottom 50px",
      },
      width: "100%",
      duration: 0.75,
      ease: "none",
    });
  }, []);

  return (
    <header className="header fixed text-text top-0 flex justify-end items-center w-full px-8 py-8">
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
