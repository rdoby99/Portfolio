import React, { useEffect } from "react";
import ShapeCollage from "./shapeCollage";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import torus from "../../assets/3DShapes/torus.png";
import knot from "../../assets/3DShapes/torus-knot.png";
import ball from "../../assets/3DShapes/sliced-ball.png";
import icosphere from "../../assets/3DShapes/icosphere.png";
import cylinder from "../../assets/3DShapes/cylinder.png";
import circle from "../../assets/circle.svg";
import blueCircle from "../../assets/blue-circle.svg";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function About() {
  useGSAP(() => {
    const headSplit = new SplitText("#aboutHeading", {
      type: "lines",
      linesClass: "overflow-hidden",
    });
    const descSplit = new SplitText("#aboutDesc", {
      type: "lines",
      linesClass: "overflow-hidden",
    });
    const aboutTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    const about = document.querySelector("#about-container");
    let aboutWidth = about.offsetWidth;

    aboutTL.fromTo(
      "#aboutSubhead",
      {
        y: 100,
      },
      {
        y: 0,
        duration: 1,
        stagger: 0.05,
      }
    );

    aboutTL.from(
      headSplit.lines,
      {
        duration: 1,
        y: 100,
        stagger: 0.05,
      },
      "<0.25"
    );

    aboutTL.from(
      descSplit.lines,
      {
        duration: 1,
        y: 50,
        stagger: 0.05,
      },
      "<0.25"
    );

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
        className="relative flex w-fit h-full items-center py-28"
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
        <div
          id="statement"
          className="h2 whitespace-nowrap pl-64 relative h-full"
        >
          <img
            src={cylinder}
            alt=""
            className="threedShape absolute left-[15%] top-8 w-[200px]"
          />
          <img
            src={circle}
            alt=""
            className="absolute left-[15%] bottom-8 w-[100px]"
          />
          <img
            src={knot}
            alt=""
            className="threedShape absolute left-1/3 bottom-8 w-[200px]"
          />
          <img
            src={torus}
            alt=""
            className="threedShape absolute left-1/2 top-4 w-[200px]"
          />
          <img
            src={circle}
            alt=""
            className="absolute left-[65%] top-32 w-[50px]"
          />
          <img
            src={icosphere}
            alt=""
            className="threedShape absolute left-2/3 bottom-2 w-[200px]"
          />
          <img
            src={blueCircle}
            alt=""
            className="absolute left-[95%] bottom-8 w-[100px]"
          />
          <img
            src={ball}
            alt=""
            className="threedShape absolute left-[85%] top-4 w-[200px]"
          />
          <div className="flex items-center h-full">
            Let's build <span className="highlight">impactful</span> web
            experiences that{" "}
            <span className="curveUnderline relative ml-4 mr-1">connect</span>,
            empower, and{" "}
            <span className="drawn-circle relative mx-12">inspire</span>
            our users.
          </div>
        </div>
      </div>
    </section>
  );
}
