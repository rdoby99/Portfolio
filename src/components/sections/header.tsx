import { useRef } from "react";
import logo from "/logo.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Header({ onOverlayStateChange, workLoaded }) {
  const { contextSafe } = useGSAP();
  const container = useRef<HTMLDivElement>(null);
  const containerInner = useRef<HTMLDivElement>(null);
  const floatingR = useRef<SVGSVGElement>(null);

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
      containerInner.current,
      {
        backgroundColor: "transparent",
        color: "transparent",
      },
      {
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

    // gsap.fromTo(
    //   floatingR.current,
    //   { top: 200 },
    //   { top: 0, duration: 1, delay: 0.25, ease: "expo" }
    // );

    gsap.fromTo(
      ".header-floatingR",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.1,
        scrollTrigger: {
          trigger: "#section-hero",
          start: "top 60%",
          end: "top top",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      floatingR.current,
      {
        fill: "#fff",
      },
      {
        fill: "#0061FE",
        duration: 0.1,
        scrollTrigger: {
          trigger: "#section-hero",
          start: "top 40px",
          end: "top top",
          toggleActions: "play none reverse none",
        },
      }
    );
  }, []);

  useGSAP(() => {
    if (!workLoaded) return;
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
  }, [workLoaded]);

  return (
    <header id="header" ref={container}>
      <div
        className="header text-text top-0 flex justify-between items-center w-full px-4 md:px-8 py-4 fixed z-40 bg-background"
        ref={containerInner}
      >
        <div className="header-floatingR w-[63px] md:w-12 h-fit z-30">
          <svg
            width="126"
            height="158"
            viewBox="0 0 126 158"
            fill="#0061FE"
            xmlns="http://www.w3.org/2000/svg"
            ref={floatingR}
            className="relative w-full h-auto"
          >
            <path d="M125.021 157.139C125.021 157.139 124.989 156.239 125.084 156.224L125.021 157.139Z" />
            <path d="M69.6596 90.8977C56.0089 92.633 47.967 81.7322 36.4966 76.3844C36.2912 78.8769 35.9436 81.0696 35.9278 83.2624C35.8804 98.391 35.8489 113.535 35.9278 128.664C36.0226 148.667 40.5413 153.526 60.417 155.403C62.3919 155.593 64.351 155.987 66.2311 157.833C55.4401 157.833 44.6491 157.833 33.8581 157.833C23.0671 157.833 12.5131 157.833 1.84848 157.833C1.75368 157.375 1.67469 156.902 1.57989 156.444C2.85964 156.018 4.1078 155.514 5.40335 155.198C14.6618 153.053 19.0383 148.604 19.6544 139.076C20.2706 129.453 20.1442 119.782 20.16 110.128C20.2074 82.7261 20.239 55.34 20.16 27.9382C20.0968 9.71763 17.9323 6.76764 0.0157471 0.899199C2.82805 0.489039 4.1868 0.126206 5.52975 0.126206C26.2902 0.0946548 47.0664 -0.189302 67.8269 0.205082C84.8903 0.536365 100.042 5.80534 109.68 20.9181C127.233 48.4146 110.391 82.3632 77.0538 87.4114C74.3837 87.8215 71.9505 89.8408 69.4068 91.1028L69.6438 90.8977H69.6596ZM69.8966 85.5814C79.4553 84.7926 86.3754 81.1643 91.1311 74.5544C103.376 57.517 103.707 39.0283 95.4443 20.4922C87.9712 3.69144 72.9459 1.32513 56.4513 2.33476C42.5004 3.18663 36.9706 7.79304 36.307 21.8962C35.6593 35.6681 35.9594 49.4874 35.912 63.2908C35.8804 73.7341 42.7532 80.833 54.6976 82.0793V68.2443H69.8966V85.5656V85.5814Z" />
            <path d="M85.5854 112.747H100.911V136.631L101.085 136.473C96.2659 135.842 91.447 135.195 85.8224 134.454C85.8224 126.992 85.8224 119.751 85.8224 112.494L85.5854 112.747Z" />
            <path d="M69.4226 91.1028C74.5574 90.8819 79.708 90.6453 85.5854 90.3771C85.5854 98.3752 85.5854 105.553 85.5854 112.747L85.8224 112.494C80.9562 112.494 76.0742 112.494 69.6754 112.494C69.6754 105.001 69.6754 97.9335 69.6754 90.8819L69.4226 91.1028Z" />
            <path d="M100.911 136.631C106.014 136.173 111.133 135.731 116.932 135.227V157.249H102.428C101.985 150.182 101.559 143.319 101.116 136.457L100.927 136.631H100.911Z" />
          </svg>
        </div>
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
      </div>
    </header>
  );
}
