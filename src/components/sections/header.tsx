import React, { useEffect } from "react";
import logo from "/logo.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Header({ onOverlayStateChange }) {
  const aboutScroll = () => {
    onOverlayStateChange(true);
    gsap.to(window, { duration: 1, scrollTo: "#about" });
  };

  const workScroll = () => {
    onOverlayStateChange(true);
    gsap.to(window, { duration: 1, scrollTo: "#featuredWork" });
  };

  const contactScroll = () => {
    onOverlayStateChange(true);
    gsap.to(window, { duration: 1, scrollTo: "#contact" });
  };

  useGSAP(() => {
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
    <header
      id="header"
      className="header relative text-text top-0 flex justify-end items-center w-full px-4 md:px-8 py-8"
    >
      <nav>
        <ul className="flex gap-4 h6">
          <li className="menu-link" onClick={aboutScroll}>
            About
          </li>
          <li className="menu-link" onClick={workScroll}>
            Work
          </li>
          <li className="menu-link" onClick={contactScroll}>
            Contact
          </li>
        </ul>
      </nav>
      <div
        id="header__border"
        className="absolute bottom-0 left-0 inline-block w-0 h-[1px] bg-text"
      ></div>
    </header>
  );
}
