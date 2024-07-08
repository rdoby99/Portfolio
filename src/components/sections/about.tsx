import { useRef } from "react";
import ShapeCollage from "./shapeCollage";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useGSAP } from "@gsap/react";
import torusMp4 from "../../assets/3DShapes/torus.mp4";
import torusImg from "../../assets/3DShapes/torus.webp";
import knotMp4 from "../../assets/3DShapes/knot.mp4";
import knotImg from "../../assets/3DShapes/torus-knot.webp";
import ballMp4 from "../../assets/3DShapes/sliced-ball.mp4";
import ballImg from "../../assets/3DShapes/sliced-ball.webp";
import icosphereMp4 from "../../assets/3DShapes/icosphere.mp4";
import icosphereImg from "../../assets/3DShapes/icosphere.webp";
import cylinderMp4 from "../../assets/3DShapes/cylinder.mp4";
import cylinderImg from "../../assets/3DShapes/cylinder.webp";
import circle from "../../assets/circle.svg";
import blueCircle from "../../assets/blue-circle.svg";

gsap.registerPlugin(SplitText, ScrollTrigger, DrawSVGPlugin);

export default function About() {
  const container = useRef(null);
  const aboutHeading = useRef(null);
  const aboutDesc = useRef(null);
  const about = useRef(null);
  const aboutContainer = useRef<HTMLDivElement>(null);
  const aboutSubhead = useRef(null);
  const statement = useRef(null);
  const statementContainer = useRef(null);
  const highlightBackground = useRef<HTMLDivElement>(null);
  const drawnUnderline = useRef<SVGPathElement>(null);
  const drawnCircle = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      // Heading split
      new SplitText(aboutHeading.current, {
        type: "lines",
        linesClass: "aboutHeading-lines pt-2 relative line++",
      });
      new SplitText(aboutHeading.current, {
        type: "lines",
        linesClass: "overflow-hidden",
      });

      // Description split
      new SplitText(aboutDesc.current, {
        type: "lines",
        linesClass: "aboutDesc-lines relative",
      });
      new SplitText(aboutDesc.current, {
        type: "lines",
        linesClass: "overflow-hidden",
      });

      const statementSplit = new SplitText(statement.current, {
        type: "words",
        wordsClass: "mx-2 statementWord",
      });
      const aboutTL = gsap.timeline({
        scrollTrigger: {
          trigger: about.current,
          start: "top center",
          toggleActions: "play reverse play reverse",
        },
      });

      let mm = gsap.matchMedia();

      let aboutWidth = aboutContainer.current!.offsetWidth + 200;
      const screenWidth = window.innerWidth;
      const extraXPercent = 100 * (screenWidth / aboutWidth);

      aboutTL.fromTo(
        aboutSubhead.current,
        {
          top: 100,
        },
        {
          top: 0,
          duration: 1,
        }
      );

      aboutTL.fromTo(
        ".aboutHeading-lines",
        {
          top: 100,
        },
        {
          duration: 1,
          top: 0,
          stagger: 0.2,
        },
        "<0.25"
      );

      aboutTL.fromTo(
        ".aboutDesc-lines",
        {
          top: 50,
        },
        {
          duration: 1,
          top: 0,
          stagger: 0.08,
        },
        "<0.25"
      );

      mm.add("(min-width: 768px)", () => {
        let scrollTween = gsap.fromTo(
          aboutContainer.current,
          {
            xPercent: 0,
          },
          {
            xPercent: () => {
              return -100 + extraXPercent;
            },
            ease: "none",
            scrollTrigger: {
              trigger: about.current,
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
              trigger: statementContainer.current,
              start: "left center",
              end: "right right",
              toggleActions: "play none reverse none",
              scrub: true,
            },
          }
        );

        gsap.from(drawnCircle.current, {
          duration: 2,
          drawSVG: 0,
          scrollTrigger: {
            containerAnimation: scrollTween,
            trigger: statementContainer.current,
            start: "center 30%",
            end: "right right",
            toggleActions: "play none none reverse",
          },
        });

        gsap.from(drawnUnderline.current, {
          duration: 2,
          drawSVG: 0,
          scrollTrigger: {
            containerAnimation: scrollTween,
            trigger: statementContainer.current,
            start: "center 70%",
            end: "right right",
            toggleActions: "play none none reverse",
          },
        });

        gsap.from(highlightBackground.current, {
          width: 0,
          duration: 0.5,
          scrollTrigger: {
            containerAnimation: scrollTween,
            trigger: statementContainer.current,
            start: "center 125%",
            end: "right right",
            toggleActions: "play none none reverse",
          },
        });

        gsap.fromTo(
          statementSplit.words,
          { opacity: 0 },
          {
            opacity: 1,
            stagger: 1,
            ease: "back",
            scrollTrigger: {
              containerAnimation: scrollTween,
              trigger: statementContainer.current,
              start: "left center",
              end: "right right",
              toggleActions: "play none reverse none",
              scrub: true,
            },
          }
        );
      });
    },
    { scope: container }
  );

  return (
    <section id="section-about" ref={container}>
      <div id="about" className="md:h-screen" ref={about}>
        <div
          id="about-container"
          className="relative flex w-fit h-full items-center pb-14 pt-28"
          ref={aboutContainer}
        >
          <div id="about__summary" className="min-w-[100vw]">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-12 max-w-7xl mx-auto">
              <div className="flex flex-col gap-8">
                <p className="h5 overflow-hidden">
                  <span
                    id="aboutSubhead"
                    className="inline-block relative"
                    ref={aboutSubhead}
                  >
                    &#123; I’m Ramona &#125;
                  </span>
                </p>
                <h2 id="aboutHeading" className="h2" ref={aboutHeading}>
                  Front-End
                  <br /> Engineer
                </h2>
                <p id="aboutDesc" className="max-w-sm" ref={aboutDesc}>
                  For the past 3 years, I've specialized in crafting engaging
                  web experiences using platforms such as Shopify, Shopify Plus,
                  and React. My expertise covers every part of the process—from
                  solution planning through development to deployment. I lead
                  every project with a commitment to delivering organized,
                  reliable, and user-focused solutions.
                </p>
              </div>
              <ShapeCollage className="hidden md:block" />
            </div>
          </div>
          <div
            id="statement-container"
            className="h2 whitespace-nowrap pl-64 pr-12 relative h-full hidden md:block"
            ref={statementContainer}
          >
            <div className="aboutShape threedShape absolute left-[15%] top-8 w-[200px]">
              <video
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
                title="Cylinder Shape"
              >
                <source src={cylinderMp4} type="video/mp4" />
                <img src={cylinderImg} alt="No video support" />
                Your browser does not support the video tag.
              </video>
            </div>
            <img
              src={circle}
              alt=""
              className="aboutShape absolute left-[15%] bottom-8 w-[100px]"
            />
            <div className="aboutShape threedShape absolute left-1/3 bottom-8 w-[200px]">
              <video
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
                title="Knot Shape"
              >
                <source src={knotMp4} type="video/mp4" />
                <img src={knotImg} alt="No video support" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="aboutShape threedShape absolute left-1/2 top-4 w-[200px]">
              <video
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
                title="Knot Shape"
              >
                <source src={torusMp4} type="video/mp4" />
                <img src={torusImg} alt="No video support" />
                Your browser does not support the video tag.
              </video>
            </div>

            <img
              src={circle}
              alt=""
              className="aboutShape absolute left-[65%] top-32 w-[50px]"
            />
            <div className="aboutShape threedShape absolute left-2/3 bottom-2 w-[200px]">
              <video
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
                title="Knot Shape"
              >
                <source src={icosphereMp4} type="video/mp4" />
                <img src={icosphereImg} alt="No video support" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="aboutShape threedShape absolute left-[85%] top-4 w-[200px]">
              <video
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
                title="Knot Shape"
              >
                <source src={ballMp4} type="video/mp4" />
                <img src={ballImg} alt="No video support" />
                Your browser does not support the video tag.
              </video>
            </div>

            <img
              src={blueCircle}
              alt=""
              className="aboutShape absolute left-[95%] bottom-8 w-[100px]"
            />
            <div
              id="statement"
              className="flex items-center h-full"
              ref={statement}
            >
              Let's build
              <span className="highlight relative">
                <span className="relative z-10">impactful</span>
                <span
                  id="highlight-background"
                  className="inline-block absolute left-1/2 -translate-x-1/2 -top-1/2 translate-y-1/2 h-full w-full"
                  ref={highlightBackground}
                ></span>
              </span>
              web experiences that
              <span className="relative">
                connect
                <svg
                  width="224"
                  height="20"
                  viewBox="0 0 224 20"
                  fill="none"
                  className="absolute w-full h-8 left-0 -bottom-8 overflow-visible"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_191_235)">
                    <path
                      id="drawn-underline"
                      strokeWidth="4px"
                      stroke="#0061FE"
                      strokeLinecap="round"
                      d="M2.63405 19.349C16.6065 15.8724 30.7186 12.9837 44.9293 10.6995C59.0249 8.43219 73.211 6.76108 87.4381 5.6862C101.78 4.59452 116.163 4.10746 130.547 4.21663C144.93 4.3258 159.305 5.03119 173.63 6.3412C187.956 7.65122 201.994 9.53227 216.057 12.0347C217.848 12.3538 219.63 12.6813 221.421 13.0172"
                      fill="none"
                      ref={drawnUnderline}
                    />
                  </g>
                </svg>
              </span>
              , empower, and
              <span className="relative mx-12">
                inspire
                <svg
                  width="237"
                  height="72"
                  viewBox="0 0 237 72"
                  fill="none"
                  className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-[140%] h-28 overflow-visible"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_232_433)">
                    <path
                      id="drawn-circle"
                      strokeWidth="4px"
                      stroke="#0061FE"
                      strokeLinecap="round"
                      d="M113.704 10.4213C90.6754 10.26 67.2464 10.4005 44.8201 15.6315C34.1288 18.1235 23.5135 21.7469 14.2168 27.1289C7.38453 31.0879 -0.766228 37.5831 0.0582022 45.6157C0.619517 51.0886 5.18897 54.967 10.3256 57.5266C16.2048 60.4556 22.8616 62.1229 29.4015 63.4183C35.117 64.5499 40.9055 65.3406 46.6882 66.134C59.271 67.8638 72.0088 68.8315 84.6998 69.6638C101.162 70.7433 117.689 71.4769 134.192 71.724C151.923 71.9919 169.762 71.6382 187.336 69.3517C195.191 68.3294 203.032 66.8962 210.542 64.5733C217.328 62.4741 224.414 59.6648 229.519 55.0372C232.787 52.0745 235.351 48.3469 236.038 44.1902C236.69 40.2546 235.813 36.41 233.933 32.8307C229.966 25.2716 222.081 19.6348 214.03 15.7043C197.126 7.45069 177.697 3.89484 158.706 1.98555C138.946 -0.00177574 118.975 -0.0381928 99.1273 0.713557C94.7391 0.880035 90.3538 1.08813 85.9686 1.32744"
                      fill="none"
                      ref={drawnCircle}
                    />
                  </g>
                </svg>
              </span>
              our users.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
