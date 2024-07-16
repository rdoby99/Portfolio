import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default function Intro() {
  const container = useRef<HTMLDivElement>(null);
  const containerInner = useRef<HTMLDivElement>(null);
  const floatingR = useRef<SVGSVGElement>(null);
  const floatingRContainer = useRef<HTMLDivElement>(null);
  const amonaO = useRef<HTMLDivElement>(null);
  const introSubtext = useRef<HTMLDivElement>(null);
  let trigger = 0;

  useGSAP(() => {
    var introTL = gsap.timeline({
      scrollTrigger: {
        trigger: containerInner.current,
        end: "bottom 20%",
        toggleActions: "play reset play none",
      },
    });

    introTL.fromTo(
      floatingR.current,
      { top: 200 },
      { top: 0, duration: 1, delay: 0.25, ease: "expo", stagger: 0.1 }
    );

    introTL.fromTo(
      ".amona__letter",
      { top: 150 },
      { top: 0, duration: 0.75, ease: "expo", stagger: 0.1 },
      ">-0.85"
    );

    introTL.fromTo(
      amonaO.current,
      { backgroundPosition: "50% -200%" },
      {
        backgroundPosition: "50% 33%",
        duration: 2.75,
        ease: "expo.out",
      },
      ">-0.90"
    );

    introTL.fromTo(
      introSubtext.current,
      { top: 50 },
      {
        top: 0,
        duration: 1.5,
        ease: "power3",
        onComplete: heroScroll,
      },
      "<0.25"
    );

    function heroScroll() {
      if (trigger == 1) return;
      trigger = 1;
      gsap.to(window, { duration: 1, scrollTo: "#hero" });
    }

    // Define the animation as a function so it can be called or re-called
    function createAnimation() {
      gsap.to(floatingRContainer.current, {
        x: () => {
          const rect = floatingRContainer.current!.getBoundingClientRect();
          return -(rect.left - 32);
        },
        width: "3rem",
        fill: "#0061FE",
        immediateRender: false,
        scrollTrigger: {
          trigger: containerInner.current,
          start: "center 45%",
          end: "center 10%",
          invalidateOnRefresh: true,
          onLeave: () => {
            document.querySelectorAll(".floatingR").forEach((el) => {
              el.classList.add("hidden");
            });
          },
          onEnterBack: () => {
            document.querySelectorAll(".floatingR").forEach((el) => {
              el.classList.remove("hidden");
            });
          },
          scrub: true,
        },
      });
    }

    // Initial call to the function
    createAnimation();

    // Add a resize event listener to the window to refresh ScrollTrigger
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <section id="section-intro" ref={container}>
      <div
        ref={containerInner}
        id="intro"
        className="relative inline-block w-full h-[95vh] text-bg z-20 bg-waves500 sm:bg-waves1000 lg:bg-waves1500 2xl:bg-waves3000  bg-bottom md:bg-center bg-cover"
      >
        <div>
          <div
            className="absolute bottom-1/2 floatingR overflow-hidden inline-block w-[63px] md:w-[126px] h-fit"
            ref={floatingRContainer}
          >
            <svg
              width="126"
              height="158"
              viewBox="0 0 126 158"
              fill="white"
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
          <span className="amona overflow-hidden absolute inline-block h-fit bottom-1/2 pt-12">
            <span className="amona__inner relative flex gap-2 md:gap-5 items-end">
              {/* a */}
              <svg
                width="84"
                height="101"
                viewBox="0 0 84 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="amona__letter w-[42px] md:w-[84px] h-[50.5px] md:h-[101px]"
              >
                <path
                  d="M65.2243 39.618V37.299C65.2243 19.8041 55.397 13.9199 43.4211 13.9199C30.0231 13.9199 22.155 21.2397 21.4283 33.0081H4.63347C6.24501 12.3108 24.4775 0.700165 43.2473 0.700165C69.6955 0.700165 81.6715 13.3678 81.4977 40.3121L81.3239 62.445C81.1501 78.5043 82.0349 89.5786 83.8202 98.681H67.373C66.8358 95.1158 66.2986 91.1877 66.1248 85.477C60.2317 95.2893 50.2148 101 33.2304 101C15.1717 101 0.162231 90.9984 0.162231 73.33C0.162231 50.6608 25.7257 44.0667 65.2243 39.6022V39.618ZM18.221 72.9829C18.221 82.0853 25.1885 88.1588 36.8169 88.1588C52.0159 88.1588 66.4882 81.2019 66.4882 58.5327V52.4592C36.9907 55.488 18.2368 59.7789 18.2368 72.9829H18.221Z"
                  fill="white"
                />
              </svg>
              {/* m */}
              <svg
                width="138"
                height="98"
                viewBox="0 0 138 98"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="amona__letter w-[69px] md:w-[138px] h-[49px] md:h-[98px]"
              >
                <path
                  d="M0.797241 97.681V1.67209H17.0549V16.1223C22.6005 7.01994 31.5271 0.0629997 46.0152 0.0629997C60.5033 0.0629997 69.43 6.48358 73.7274 17.0215C81.4059 5.23732 92.6709 0.0629997 106.085 0.0629997C128.425 0.0629997 137.178 15.0496 137.178 37.0089V97.681H120.92V41.8204C120.92 27.0073 118.061 14.1504 100.365 14.1504C86.4302 14.1504 77.1243 25.0354 77.1243 45.5592V97.6652H60.8667V41.8046C60.8667 26.9916 58.007 14.1346 40.3116 14.1346C26.3765 14.1346 17.0707 25.0196 17.0707 45.5434V97.6495H0.813056L0.797241 97.681Z"
                  fill="white"
                />
              </svg>
              {/* o */}
              <div
                ref={amonaO}
                className="amona__letter amona__o w-[50px] md:w-[100px] h-[47px] md:h-[94px] bg-o bg-repeat-y bg-cover bg-[50%_33%]"
              ></div>
              {/* n */}
              <svg
                width="80"
                height="98"
                viewBox="0 0 80 98"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="amona__letter w-[40px] md:w-[80px] h-[49px] md:h-[98px]"
              >
                <path
                  d="M48.1157 0.0629987C71.3566 0.0629987 79.7461 15.0496 79.7461 37.0089V97.681H63.4885V41.8204C63.4885 27.0073 60.9922 14.1504 42.3963 14.1504C26.66 14.1504 17.0224 25.0354 17.0224 45.5592V97.6652H0.764771V1.65631H17.0224V16.1066C22.568 7.00417 31.858 0.047226 48.1157 0.047226V0.0629987Z"
                  fill="white"
                />
              </svg>
              {/* a */}
              <svg
                width="84"
                height="101"
                viewBox="0 0 84 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="amona__letter w-[42px] md:w-[84px] h-[50.5px] md:h-[101px]"
              >
                <path
                  d="M65.2243 39.618V37.299C65.2243 19.8041 55.397 13.9199 43.4211 13.9199C30.0231 13.9199 22.155 21.2397 21.4283 33.0081H4.63347C6.24501 12.3108 24.4775 0.700165 43.2473 0.700165C69.6955 0.700165 81.6715 13.3678 81.4977 40.3121L81.3239 62.445C81.1501 78.5043 82.0349 89.5786 83.8202 98.681H67.373C66.8358 95.1158 66.2986 91.1877 66.1248 85.477C60.2317 95.2893 50.2148 101 33.2304 101C15.1717 101 0.162231 90.9984 0.162231 73.33C0.162231 50.6608 25.7257 44.0667 65.2243 39.6022V39.618ZM18.221 72.9829C18.221 82.0853 25.1885 88.1588 36.8169 88.1588C52.0159 88.1588 66.4882 81.2019 66.4882 58.5327V52.4592C36.9907 55.488 18.2368 59.7789 18.2368 72.9829H18.221Z"
                  fill="white"
                />
              </svg>
            </span>
          </span>
        </div>
        <div className="overflow-hidden absolute top-[52%] md:top-[54%] left-1/2 -translate-x-1/2 inline-block">
          <div
            ref={introSubtext}
            className="intro__subtext relative h5 text-white"
          >
            &#123;&nbsp;Front&#8209;End&nbsp;Engineer&nbsp;&#125;
          </div>
        </div>
      </div>
    </section>
  );
}
