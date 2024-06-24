import React, { useEffect } from "react";
import logo from "/logo.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Header({ onOverlayStateChange }) {
  const { contextSafe } = useGSAP();

  const aboutScroll = contextSafe(() => {
    onOverlayStateChange(true);
    gsap.to(window, { duration: 1, scrollTo: "#about" });
  });

  const workScroll = contextSafe(() => {
    onOverlayStateChange(true);
    gsap.to(window, { duration: 1, scrollTo: "#featuredWork" });
  });

  const contactScroll = contextSafe(() => {
    onOverlayStateChange(true);
    gsap.to(window, { duration: 1, scrollTo: "#contact" });
  });

  useGSAP(() => {
    gsap.fromTo(
      "header",
      {
        opacity: 0,
        backgroundColor: "#FDF5ED",
        color: "#0061fe",
      },
      {
        opacity: 1,
        backgroundColor: "#FDF5ED",
        color: "#0061fe",
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "#intro",
          start: "bottom 50px",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.to("#header__border", {
      scrollTrigger: {
        trigger: "#intro",
        start: "bottom 50px",
        toggleActions: "play none none reverse",
      },
      width: "100%",
      backgroundColor: "#0061fe",
      duration: 0.75,
      ease: "none",
    });

    // Change header to blue background at Featured Work section
    gsap.to("header", {
      backgroundColor: "#0061fe",
      color: "#fff",
      duration: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: "#featuredWork",
        start: "top 84px",
        end: "bottom 84px",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.to("#header__border", {
      backgroundColor: "#fff",
      duration: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: "#featuredWork",
        start: "top 84px",
        end: "bottom 84px",
        toggleActions: "play reverse play reverse",
      },
    });
  }, []);

  return (
    <header
      id="header"
      className="header text-text top-0 flex justify-end items-center w-full px-4 md:px-8 py-8 fixed z-40 bg-background"
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
