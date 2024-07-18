import xMp4 from "../../assets/3DShapes/x.mp4";
import xImg from "../../assets/3DShapes/x.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import LazyVideo from "../LazyVideo";

gsap.registerPlugin(ScrollTrigger, SplitText);

type FooterProps = {
  onOverlayStateChange: (newState: boolean) => void;
};

export default function Footer({ onOverlayStateChange }: FooterProps) {
  const connectDesc = useRef(null);
  const contact = useRef(null);
  const connectSub = useRef(null);
  const connectHeading = useRef(null);
  const connectEmailHeading = useRef(null);
  const connectEmail = useRef(null);

  const changeState = () => {
    onOverlayStateChange(true);
  };

  useGSAP(() => {
    const connectDescSplit = new SplitText(connectDesc.current, {
      type: "lines",
      linesClass: "overflow-hidden",
    });

    const footerTL = gsap.timeline({
      scrollTrigger: {
        trigger: contact.current,
        start: "top 85%",
        toggleActions: "play reverse play reverse",
      },
    });

    let mm = gsap.matchMedia();

    footerTL.fromTo(
      connectSub.current,
      { top: 200 },
      {
        top: 0,
        duration: 1.75,
        ease: "power3",
      },
      "<0.2"
    );

    mm.add("(min-width: 768px)", () => {
      footerTL.fromTo(
        ".follow",
        { top: 200 },
        {
          top: 0,
          duration: 1.75,
          stagger: 0.2,
          ease: "power3",
        },
        "<"
      );
    });

    mm.add("(max-width: 768px)", () => {
      footerTL.fromTo(
        ".followMob",
        { top: 200 },
        {
          top: 0,
          duration: 1.75,
          stagger: 0.2,
          ease: "power3",
        },
        "<"
      );
    });

    footerTL.fromTo(
      connectHeading.current,
      { top: 200 },
      {
        top: 0,
        duration: 1.75,
        ease: "power3",
      },
      "<0.2"
    );
    footerTL.fromTo(
      connectDescSplit.lines,
      { top: 200 },
      {
        top: 0,
        duration: 1.75,
        stagger: 0.2,
        ease: "power3",
      },
      "<0.2"
    );

    footerTL.fromTo(
      connectEmailHeading.current,
      { top: 200 },
      {
        top: 0,
        duration: 1.75,
        ease: "power3",
      },
      "<0.2"
    );

    footerTL.fromTo(
      connectEmail.current,
      { top: 200 },
      {
        top: 0,
        duration: 1.75,
        ease: "power3",
      },
      "<0.2"
    );
  });

  return (
    <footer id="section-contact">
      <div
        id="contact"
        className="relative pb-48 overflow-x-hidden md:overflow-visible"
        ref={contact}
      >
        <div className="md:grid md:-cols-[1fr_3fr] md:grid-rows-[1fr_4fr_1fr] flex flex-col gap-4 px-4 md:px-16">
          {/* Col 1 */}
          <div className="row-start-1 col-start-1 footerGrid__item h5 text-center hidden md:flex md:items-center md:justify-center overflow-hidden">
            <h2 className="follow h5">&#123; Follow &#125;</h2>
          </div>
          <ul className="row-start-2 col-start-1 footerGrid__item h4 text-center justify-around hidden md:flex md:flex-col">
            <li className="overflow-hidden">
              <a
                href="https://www.linkedin.com/in/ramona-doby-b04058192"
                className="follow"
                target="_blank"
                aria-label="Resume (Opens in a new window)"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="overflow-hidden">
              <a
                href="https://github.com/rdoby99"
                className="follow"
                target="_blank"
                aria-label="Resume (Opens in a new window)"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li className="overflow-hidden">
              <a
                href="https://drive.google.com/file/d/1Qz6QDg4uDGSlRGVp0uv7PD12I9KCQIWd/view?usp=sharing"
                className="follow"
                target="_blank"
                aria-label="Resume (Opens in a new window)"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
          <div className="row-start-3 col-start-1 footerGrid__item text-center hidden md:flex md:items-center md:justify-center overflow-hidden">
            <p className="p2">&copy; 2024 Ramona Doby</p>
          </div>

          {/* Col 2 */}
          <div className="md:col-start-2 md:row-span-2 footerGrid__item w-full">
            <div className="mb-16">
              <div className="overflow-hidden">
                <h2 className="h5 mb-14 connect connectSub" ref={connectSub}>
                  &#123; Contact &#125;
                </h2>
              </div>
              <div className="overflow-hidden">
                <h3
                  className="h2 mb-4 connect connectHeading pt-2"
                  ref={connectHeading}
                >
                  <span className="h2__italic">Let's</span> Connect!
                </h3>
              </div>
              <div>
                <p
                  className="mb-12 p1 lg:max-w-[60%] overflow-hidden connect connectDesc"
                  ref={connectDesc}
                >
                  Interested in working together? Reach out to discuss how we
                  can turn your vision into a digital reality.
                </p>
              </div>
              <div className="overflow-hidden">
                <h4
                  className="p1__medium connect connectEmailHeading"
                  ref={connectEmailHeading}
                >
                  Email
                </h4>
              </div>
              <div className="overflow-hidden">
                <a
                  href="mailto:ramonadoby@gmail.com"
                  className="p1 connect connectEmail"
                  ref={connectEmail}
                >
                  ramonadoby@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Social */}
          <div className="md:hidden footerGrid__item flex flex-col gap-4">
            <div className="overflow-hidden">
              <h3 className="h5 followMob">&#123; Follow &#125;</h3>
            </div>
            <ul className="h4 flex justify-between">
              <li className="overflow-hidden">
                <a
                  href="https://www.linkedin.com/in/ramona-doby-b04058192"
                  className="followMob"
                  target="_blank"
                  aria-label="Resume (Opens in a new window)"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className="overflow-hidden">
                <a
                  href="https://github.com/rdoby99"
                  className="followMob"
                  target="_blank"
                  aria-label="Resume (Opens in a new window)"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li className="overflow-hidden">
                <a
                  href="https://drive.google.com/file/d/1Qz6QDg4uDGSlRGVp0uv7PD12I9KCQIWd/view?usp=sharing"
                  className="followMob"
                  target="_blank"
                  aria-label="Resume (Opens in a new window)"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
          <a
            href="#"
            onClick={changeState}
            className="no-underline row-start-3 md:col-start-2 footerGrid__item h5 !rounded-full hover:bg-text hover:text-white cursor-pointer transition-colors duration-150 text-center my-auto"
          >
            &#123; Back to Top &#125;
          </a>
          <div className="md:hidden text-center">
            <p className="p2">&copy; 2024 Ramona Doby</p>
          </div>
        </div>
        <div
          className="threedShape heroShape hidden lg:inline-block max-w-[14vw] 2xl:max-w-[235px] absolute right-[-4rem] md:right-48 top-[30%] 2xl:top-[20%] z-10"
          data-speed="0.75"
        >
          <LazyVideo videoSrc={xMp4} imgSrc={xImg} title="X Shape" />
        </div>

        {/* <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          data-speed="0.55"
          className="threedShape heroShape hidden lg:inline-block max-w-[14vw] 2xl:max-w-[235px] absolute right-[-2rem] md:right-24 top-[50%] 2xl:top-[35%]"
          title="Knot Shape"
        >
          <source src={torus} type="video/webm" />
          <img src={torusImg} alt="No video support" />
          Your browser does not support the video tag.
        </video> */}
      </div>
    </footer>
  );
}
