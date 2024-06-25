import React, { useEffect, useRef } from "react";
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
  const container = useRef(null);

  useGSAP(
    () => {
      const headSplit = new SplitText("#aboutHeading", {
        type: "lines",
        linesClass: "overflow-hidden",
      });
      const descSplit = new SplitText("#aboutDesc", {
        type: "lines",
        linesClass: "overflow-hidden",
      });
      const statementSplit = new SplitText("#statement", {
        type: "words",
        wordsClass: "mx-2 statementWord",
      });
      const aboutTL = gsap.timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      const statementTL = gsap.timeline();
      let mm = gsap.matchMedia();

      const about = document.querySelector("#about-container");
      let aboutWidth = about.offsetWidth;
      const screenWidth = window.innerWidth;
      let scrollWidth = aboutWidth - screenWidth;
      const extraXPercent = 100 * (screenWidth / aboutWidth);

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

      mm.add("(min-width: 768px)", () => {
        let scrollTween = gsap.fromTo(
          "#about-container",
          {
            xPercent: 0,
          },
          {
            xPercent: () => {
              return -100 + extraXPercent;
            },
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

        gsap.fromTo(
          ".aboutShape",
          { scale: 0 },
          {
            scale: 1,
            stagger: 1,
            ease: "back",
            scrollTrigger: {
              containerAnimation: scrollTween,
              trigger: "#statement-container",
              start: "left center",
              end: "right right",
              toggleActions: "play none reverse none",
              scrub: true,
            },
          },
          "<"
        );

        gsap.fromTo(
          statementSplit.words,
          { opacity: 0 },
          {
            opacity: 1,
            stagger: 1,
            ease: "back",
            scrollTrigger: {
              containerAnimation: scrollTween,
              trigger: "#statement-container",
              start: "left center",
              end: "right right",
              toggleActions: "play none reverse none",
              scrub: true,
            },
          },
          "<"
        );
      });
    },
    { scope: container }
  );

  return (
    <section id="section-about" ref={container}>
      <div id="about" className="md:h-screen">
        <div
          id="about-container"
          className="relative flex w-fit h-full items-center pb-14 pt-28"
        >
          <div className="min-w-[100vw]">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-12 max-w-7xl mx-auto">
              <div className="flex flex-col gap-8">
                <p className="h5 overflow-hidden">
                  <span id="aboutSubhead" className="inline-block relative">
                    &#123; I’m Ramona &#125;
                  </span>
                </p>
                <h2 id="aboutHeading" className="h2">
                  <span className="font-secHeader uppercase">Front-End</span>{" "}
                  <br /> Web Developer
                </h2>
                <p id="aboutDesc" className="max-w-sm">
                  For the past 3 years, I've specialized in crafting engaging
                  web experiences using platforms such as Shopify, Shopify Plus,
                  WordPress, and React. My expertise covers every part of the
                  process—from solution planning through development to
                  deployment. To ensure the highest quality outcomes, I lead my
                  projects with a commitment to delivering organized, reliable,
                  and user-focused solutions, always aiming to exceed
                  expectations and enhance user engagement.
                </p>
              </div>
              <ShapeCollage className="hidden md:block" />
            </div>
          </div>
          <div
            id="statement-container"
            className="h2 whitespace-nowrap pl-64 pr-12 relative h-full hidden md:block"
          >
            <img
              src={cylinder}
              alt=""
              className="aboutShape threedShape absolute left-[15%] top-8 w-[200px]"
            />
            <img
              src={circle}
              alt=""
              className="aboutShape absolute left-[15%] bottom-8 w-[100px]"
            />
            <img
              src={knot}
              alt=""
              className="aboutShape threedShape absolute left-1/3 bottom-8 w-[200px]"
            />
            <img
              src={torus}
              alt=""
              className="aboutShape threedShape absolute left-1/2 top-4 w-[200px]"
            />
            <img
              src={circle}
              alt=""
              className="aboutShape absolute left-[65%] top-32 w-[50px]"
            />
            <img
              src={icosphere}
              alt=""
              className="aboutShape threedShape absolute left-2/3 bottom-2 w-[200px]"
            />
            <img
              src={ball}
              alt=""
              className="aboutShape threedShape absolute left-[85%] top-4 w-[200px]"
            />
            <img
              src={blueCircle}
              alt=""
              className="aboutShape absolute left-[95%] bottom-8 w-[100px]"
            />
            <div id="statement" className="flex items-center h-full">
              Let's build <span className="highlight">impactful</span> web
              experiences that{" "}
              <span className="curveUnderline relative">connect</span>, empower,
              and <span className="drawn-circle relative mx-12">inspire</span>
              our users.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
