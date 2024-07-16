import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useGSAP } from "@gsap/react";
import spiralMp4 from "../../assets/3DShapes/spiral.mp4";
import spiralMp4_mobile from "../../assets/3DShapes/mobileSpiral.mp4";
import spiralImg from "../../assets/3DShapes/spiral.webp";
import curveMp4_mobile from "../../assets/3DShapes/mobileCurve.mp4";
import curveMp4 from "../../assets/3DShapes/curve.mp4";
import curveImg from "../../assets/3DShapes/curve.webp";
import arrow from "../../assets/arrow.svg";
import LazyVideo from "../LazyVideo";

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

export default function Hero() {
  const container = useRef(null);
  const threeDCurve = useRef(null);
  const hero = useRef(null);
  const heroSubtext = useRef(null);
  const drawnUnderline = useRef(null);
  const heroArrow = useRef(null);
  let mm = gsap.matchMedia();

  useGSAP(
    () => {
      var heroTL = gsap.timeline({
        scrollTrigger: {
          trigger: hero.current,
          start: "top center",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      });

      heroTL.fromTo(
        heroSubtext.current,
        { top: 50 },
        {
          top: 0,
          duration: 1,
        }
      );

      heroTL.fromTo(
        ".hi-there",
        { top: 200 },
        {
          top: 0,
          duration: 1.75,
          ease: "power3",
          stagger: 0.2,
        },
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
        drawnUnderline.current,
        { drawSVG: "0%" },
        { duration: 2, drawSVG: "100%" },
        "<1"
      );

      heroTL.fromTo(
        heroArrow.current,
        { top: 0, opacity: 0 },
        {
          top: 25,
          opacity: 1,
          duration: 0.75,
        },
        "<0.5"
      );

      heroTL.fromTo(
        heroArrow.current,
        { top: 25 },
        {
          top: 0,
          duration: 1.5,
          repeat: -1,
          ease: "power1.inOut",
          yoyo: true,
          scrollTrigger: {
            trigger: hero.current,
            end: "bottom top",
            toggleActions: "play pause resume pause",
          },
        },
        "<0.5"
      );

      mm.add("(min-width: 768px)", () => {
        gsap.to(threeDCurve.current, {
          left: "-8rem",
          width: "175px",
          scrollTrigger: {
            trigger: hero.current,
            start: "bottom center",
            end: "bottom top",
            scrub: true,
            toggleActions: "play none reverse reverse",
          },
        });
      });

      mm.add("(max-width: 768px)", () => {
        gsap.to(threeDCurve.current, {
          left: "70%",
          scrollTrigger: {
            trigger: hero.current,
            start: "bottom center",
            end: "bottom top",
            scrub: true,
            toggleActions: "play none reverse reverse",
          },
        });
      });
    },
    { scope: container }
  );

  return (
    <section id="section-hero" ref={container}>
      <div
        id="hero"
        className="hero text-center flex flex-col md:gap-16 justify-center items-center min-h-[70vh] md:min-h-screen w-full overflow-x-clip"
        ref={hero}
      >
        <div className="relative pt-24 md:pt-28">
          <div className="overflow-hidden relative block mb-8">
            <div className="hero__subtext relative h5" ref={heroSubtext}>
              &#123; Welcome &#125;
            </div>
          </div>
          <h1 className="h1 relative z-10">
            <span className="overflow-hidden inline-block mb-4">
              <span className="hi-there inline-block relative">Hi THERE</span>
            </span>
            <br />
            <span className="overflow-hidden inline-block mb-4">
              <span className="hi-there inline-block relative">
                <span className="font-secHeader mr-4">NICE</span> to
              </span>
            </span>
            <br />
            <span className="overflow-hidden inline-block pb-10">
              <span className="hi-there inline-block relative">
                MEET
                <span className="ml-6">you</span>
              </span>
            </span>
          </h1>
          <div
            data-speed="1.25"
            className="threedShape heroShape w-[125px] md:w-[320px] absolute right-[-4rem] md:right-[-11rem] top-[20rem] md:top-[22rem]"
          >
            <LazyVideo
              videoSrc={spiralMp4}
              imgSrc={spiralImg}
              title="Spiral Shape"
              classes="!hidden md:!block"
            />
            <LazyVideo
              videoSrc={spiralMp4_mobile}
              imgSrc={spiralImg}
              title="Spiral Shape"
              classes="md:!hidden"
            />
          </div>
          <div
            className="absolute left-[-4rem] md:-left-[16rem] top-[7rem] md:top-[5.5rem] inline-block w-[125px] md:w-[335px] threedShape heroShape"
            ref={threeDCurve}
            data-speed="0.18"
          >
            <LazyVideo
              videoSrc={curveMp4}
              imgSrc={curveImg}
              title="Curve Shape"
              classes="!hidden md:!block"
            />
            <LazyVideo
              videoSrc={curveMp4_mobile}
              imgSrc={curveImg}
              title="Curve Shape"
              classes="md:!hidden"
            />
          </div>

          <svg
            width="224"
            height="20"
            viewBox="0 0 224 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-6 -right-8 w-24 md:w-52 overflow-visible"
          >
            <path
              id="drawn-underline"
              strokeWidth="4px"
              stroke="#0061FE"
              strokeLinecap="round"
              d="M2.63405 19.349C16.6065 15.8724 30.7186 12.9837 44.9293 10.6995C59.0249 8.43219 73.211 6.76108 87.4381 5.6862C101.78 4.59452 116.163 4.10746 130.547 4.21663C144.93 4.3258 159.305 5.03119 173.63 6.3412C187.956 7.65122 201.994 9.53227 216.057 12.0347C217.848 12.3538 219.63 12.6813 221.421 13.0172"
              fill="none"
              ref={drawnUnderline}
            />
          </svg>
        </div>
        <img
          id="hero-arrow"
          className="relative"
          src={arrow}
          alt="Arrow"
          ref={heroArrow}
        />
      </div>
    </section>
  );
}
