import React, { useEffect } from "react";
import ShapeCollage from "./shapeCollage";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function About() {
  useGSAP(() => {
    // const headSplit = new SplitText("#aboutHeading", {
    //   type: "lines",
    //   linesClass: "overflow-hidden",
    // });
    // const descSplit = new SplitText("#aboutDesc", {
    //   type: "lines",
    //   linesClass: "overflow-hidden",
    // });
    // const aboutTL = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: "#about",
    //     start: "top 75%",
    //     toggleActions: "play none none none",
    //   },
    // });

    const about = document.querySelector("#about-container");
    let aboutWidth = about.offsetWidth;

    // aboutTL.fromTo(
    //   "#aboutSubhead",
    //   {
    //     y: 100,
    //   },
    //   {
    //     y: 0,
    //     duration: 1,
    //     stagger: 0.05,
    //   }
    // );

    // aboutTL.from(
    //   headSplit.lines,
    //   {
    //     duration: 1,
    //     y: 100,
    //     stagger: 0.05,
    //   },
    //   "<0.25"
    // );

    // aboutTL.from(
    //   descSplit.lines,
    //   {
    //     duration: 1,
    //     y: 50,
    //     stagger: 0.05,
    //   },
    //   "<0.25"
    // );

    gsap.fromTo(
      "#about-container",
      {
        xPercent: 0,
      },
      {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: "#about",
          end: () => `+=${aboutWidth}`,
          scrub: true,
          pin: true,
          pinType: "transform",
          anticipatePin: 1,
        },
      }
    );
  });

  return (
    <section id="about" className="h-screen">
      <div
        id="about-container"
        className="relative flex w-fit f-full items-center py-28"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-12 min-w-[100vw]">
          <div className="flex flex-col gap-8">
            <p className="h5 overflow-hidden">
              <span id="aboutSubhead" className="inline-block relative">
                &#123; I’m Ramona &#125;
              </span>
            </p>
            <h2 id="aboutHeading" className="h2">
              <span className="font-secHeader uppercase">Front-End</span> <br />{" "}
              Web Developer
            </h2>
            <p id="aboutDesc" className="max-w-sm">
              For the past 3 years, I've specialized in crafting engaging web
              experiences using platforms such as Shopify, Shopify Plus,
              WordPress, and React. My expertise covers every part of the
              process—from solution planning through development to deployment.
              To ensure the highest quality outcomes, I lead my projects with a
              commitment to delivering organized, reliable, and user-focused
              solutions, always aiming to exceed expectations and enhance user
              engagement.
            </p>
          </div>
          <ShapeCollage className="hidden md:block" />
        </div>
        <div id="statement" className="h1 whitespace-nowrap pl-64">
          Let's build impactful web experiences that connect, empower, and
          inspire, our users.
        </div>
      </div>
    </section>
  );
}
