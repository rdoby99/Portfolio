import React, { useRef } from "react";
import x from "../../assets/3DShapes/x.png";
import torus from "../../assets/3DShapes/torus.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/src/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const container = useRef(null);

  useGSAP(
    () => {
      var footerTL = gsap.timeline();

      footerTL.fromTo(
        ".connect",
        { top: 200 },
        {
          top: 0,
          duration: 10,
          ease: "power3",
          stagger: 0.2,
          scrollTrigger: {
            trigger: "#contact",
            start: "top center",
            toggleActions: "play reverse play none",
          },
          onComplete: () => {
            console.log("Animation complete!");
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <footer id="section-contact" ref={container}>
      <div
        id="contact"
        className="relative pb-48 overflow-x-hidden md:overflow-visible"
      >
        <div className="md:grid md:-cols-[1fr_3fr] md:grid-rows-[1fr_4fr_1fr] flex flex-col gap-4 px-4 md:px-16">
          {/* Col 1 */}
          <div className="row-start-1 col-start-1 footerGrid__item h5 text-center hidden md:flex md:items-center md:justify-center">
            &#123; Follow &#125;
          </div>
          <ul className="row-start-2 col-start-1 footerGrid__item h4 text-center justify-around hidden md:flex md:flex-col">
            <li>LinkedIn</li>
            <li>Github</li>
            <li>CV</li>
          </ul>
          <p className="row-start-3 col-start-1 footerGrid__item text-center p2 hidden md:flex md:items-center md:justify-center">
            &copy; 2024 Ramona Doby
          </p>

          {/* Col 2 */}
          <div className="md:col-start-2 md:row-span-2 footerGrid__item w-full">
            <div className="overflow-hidden">
              <div className="h5 mb-16 connect">&#123; Contact &#125;</div>
            </div>
            <div className="overflow-hidden">
              <h3 className="h2 mb-4 connect">
                <span className="h2__italic">Let's</span> Connect!
              </h3>
            </div>
            <div>
              <p className="mb-12 p1 md:max-w-[60%] overflow-hidden connect">
                Interested in working together? Reach out to discuss how we can
                turn your vision into a digital reality.
              </p>
            </div>
            <div className="overflow-hidden">
              <h4 className="p1__medium connect">Email</h4>
            </div>
            <div className="overflow-hidden">
              <p className="p1 mb-16 connect">ramonadoby@gmail.com</p>
            </div>
          </div>

          {/* Mobile Social */}
          <div className="md:hidden footerGrid__item flex flex-col gap-4">
            <h3 className="h5">&#123; Follow &#125;</h3>
            <ul className="h4 flex justify-between">
              <li>LinkedIn</li>
              <li>Github</li>
              <li>CV</li>
            </ul>
          </div>
          <a
            href="#"
            role="button"
            className="row-start-3 md:col-start-2 footerGrid__item h5 !rounded-full hover:bg-text hover:text-white cursor-pointer transition-colors duration-150"
          >
            &#123; Back to Top &#125;
          </a>
        </div>
        <img
          src={x}
          alt=""
          data-speed="0.75"
          className="threedShape heroShape hidden md:inline-block max-w-[125px] md:max-w-[235px] absolute right-[-4rem] md:right-48 top-32 md:top-16 z-10"
        />
        <img
          src={torus}
          alt=""
          data-speed="0.55"
          className="threedShape heroShape hidden md:inline-block max-w-[125px] md:max-w-[235px] absolute right-[-2rem] md:right-24 top-[35%]"
        />
      </div>
    </footer>
  );
}
