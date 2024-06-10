import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import spiral from "../../assets/3DShapes/spiral.png";
import curve from "../../assets/3DShapes/curve.png";
import arrow from "../../assets/arrow.svg";

export default function Hero() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(DrawSVGPlugin);

    var heroTL = gsap.timeline({
      delay: 4.5,
    });

    heroTL.fromTo(
      ".hero__subtext",
      { top: 50 },
      {
        top: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#hero",
          start: "top center",
          toggleActions: "play reset play none",
        },
      }
    );

    heroTL.fromTo(
      ".hi-there",
      { top: 200 },
      { top: 0, duration: 1.75, ease: "power3", stagger: 0.2 },
      ">-0.85"
    );

    heroTL.fromTo(
      ".heroShape",
      { scale: 0 },
      {
        scale: 1,
        duration: 1.5,
        stagger: 0.25,
        ease: "back",
      },
      "<"
    );

    heroTL.fromTo(
      "#curve",
      { drawSVG: "0%" },
      { duration: 3, drawSVG: "100%" },
      "<1"
    );

    heroTL.fromTo(
      "#hero-arrow",
      { top: 0, opacity: 0 },
      {
        top: 25,
        opacity: 1,
        duration: 1,
      },
      "<0.5"
    );

    heroTL.fromTo(
      "#hero-arrow",
      { top: 25 },
      {
        top: 0,
        duration: 1.5,
        repeat: -1,
        ease: "power1.inOut",
        yoyo: true,
      }
    );
  }, []);

  return (
    <section
      id="hero"
      className="hero text-center flex flex-col gap-16 justify-center items-center min-h-[80vh] md:min-h-screen overflow-hidden"
    >
      <div className="relative">
        <div className="overflow-hidden relative block">
          <div className="hero__subtext relative h5">&#123; Welcome &#125;</div>
        </div>
        <h1 className="h1 relative z-10">
          <span className="overflow-hidden inline-block leading-[1.10]">
            <span className="hi-there inline-block relative">Hi THERE</span>
          </span>
          <br />
          <span className="overflow-hidden inline-block leading-[1]">
            <span className="hi-there inline-block relative">
              <span className="font-secHeader mr-4">NICE</span> to
            </span>
          </span>
          <br />
          <span className="overflow-hidden inline-block leading-[1.10] pb-10">
            <span className="hi-there inline-block relative">
              MEET
              <span className="ml-6">you</span>
            </span>
          </span>
        </h1>
        <img
          src={spiral}
          alt=""
          className="threedShape heroShape max-w-[150px] md:max-w-sm absolute right-0 md:right-[-14rem] top-1/4"
        />
        <img
          src={curve}
          alt=""
          className="threedShape heroShape max-w-[150px] md:max-w-[350px] absolute left-0 md:-left-[16rem] top-[9rem]"
        />

        <svg
          width="224"
          height="20"
          viewBox="0 0 224 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-6 -right-8 w-24 md:w-52"
        >
          <path
            id="curve"
            stroke-width="4px"
            stroke="#0061FE"
            d="M2.63405 19.349C16.6065 15.8724 30.7186 12.9837 44.9293 10.6995C59.0249 8.43219 73.211 6.76108 87.4381 5.6862C101.78 4.59452 116.163 4.10746 130.547 4.21663C144.93 4.3258 159.305 5.03119 173.63 6.3412C187.956 7.65122 201.994 9.53227 216.057 12.0347C217.848 12.3538 219.63 12.6813 221.421 13.0172C222.513 13.2188 223.639 12.7149 223.951 11.5477C224.222 10.5232 223.614 9.17117 222.513 8.96123C208.262 6.27402 193.895 4.19144 179.479 2.70507C165.079 1.22711 150.647 0.353764 136.198 0.0934401C121.683 -0.175281 107.152 0.169018 92.6623 1.11794C78.1724 2.06686 63.7728 3.6372 49.4307 5.78697C35.1297 7.92834 20.919 10.6743 6.84796 14.0165C5.0819 14.4364 3.31583 14.8647 1.54976 15.3098C-1.0213 15.948 0.0711977 19.9956 2.64226 19.3574L2.63405 19.349Z"
          />
        </svg>
      </div>
      <img id="hero-arrow" className="relative" src={arrow} alt="Arrow" />
    </section>
  );
}
