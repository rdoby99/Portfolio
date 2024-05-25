import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default function Intro() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    var introTL = gsap.timeline();

    introTL.fromTo(
      ".intro__subtext",
      { top: 50 },
      { top: 0, duration: 1.5, ease: "power3" }
    );

    introTL.to(window, { duration: 1, scrollTo: "#hero" });

    gsap.fromTo(
      ".intro__subtext",
      { top: 0 },
      {
        top: 50,
        duration: 1.5,
        ease: "power3",
        scrollTrigger: {
          trigger: "#intro",
          start: "center 45%",
          toggleActions: "play none reverse none",
        },
      }
    );

    gsap.to(".floatingR", {
      scrollTrigger: {
        trigger: "#intro",
        start: "center 45%",
        scrub: true,
      },
      top: "1rem",
      left: "2rem",
      fontSize: "6rem",
      lineHeight: "4rem",
    });

    gsap.to(".floatingR", {
      scrollTrigger: {
        trigger: "#intro",
        start: "bottom 50px",
        toggleActions: "play none none reset",
      },
      color: "#0061FE",
    });

    gsap.fromTo(
      ".amona",
      { top: 0 },
      {
        top: 200,
        scrollTrigger: {
          trigger: "#intro",
          start: "center 45%",
          duration: 10,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      id="intro"
      className="inline-block w-full h-[95vh] bg-text text-bg"
    >
      <div className="leading-[12rem]">
        <svg
          width="685"
          height="159"
          viewBox="0 0 685 159"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/4 left-1/4"
        >
          <g clip-path="url(#clip0_71_193)">
            <g className="floatingR fixed font-header text-[16rem]">
              <path
                d="M125.021 157.139C125.021 157.139 124.989 156.239 125.084 156.224L125.021 157.139Z"
                fill="white"
              />
              <path
                d="M69.6596 90.8977C56.0089 92.633 47.967 81.7322 36.4966 76.3844C36.2912 78.8769 35.9436 81.0696 35.9278 83.2624C35.8804 98.391 35.8489 113.535 35.9278 128.664C36.0226 148.667 40.5413 153.526 60.417 155.403C62.3919 155.593 64.351 155.987 66.2311 157.833C55.4401 157.833 44.6491 157.833 33.8581 157.833C23.0671 157.833 12.5131 157.833 1.84848 157.833C1.75368 157.375 1.67469 156.902 1.57989 156.444C2.85964 156.018 4.1078 155.514 5.40335 155.198C14.6618 153.053 19.0383 148.604 19.6544 139.076C20.2706 129.453 20.1442 119.782 20.16 110.128C20.2074 82.7261 20.239 55.34 20.16 27.9382C20.0968 9.71763 17.9323 6.76764 0.0157471 0.899199C2.82805 0.489039 4.1868 0.126206 5.52975 0.126206C26.2902 0.0946548 47.0664 -0.189302 67.8269 0.205082C84.8903 0.536365 100.042 5.80534 109.68 20.9181C127.233 48.4146 110.391 82.3632 77.0538 87.4114C74.3837 87.8215 71.9505 89.8408 69.4068 91.1028L69.6438 90.8977H69.6596ZM69.8966 85.5814C79.4553 84.7926 86.3754 81.1643 91.1311 74.5544C103.376 57.517 103.707 39.0283 95.4443 20.4922C87.9712 3.69144 72.9459 1.32513 56.4513 2.33476C42.5004 3.18663 36.9706 7.79304 36.307 21.8962C35.6593 35.6681 35.9594 49.4874 35.912 63.2908C35.8804 73.7341 42.7532 80.833 54.6976 82.0793V68.2443H69.8966V85.5656V85.5814Z"
                fill="white"
              />
              <path
                d="M85.5854 112.747H100.911V136.631L101.085 136.473C96.2659 135.842 91.447 135.195 85.8224 134.454C85.8224 126.992 85.8224 119.751 85.8224 112.494L85.5854 112.747Z"
                fill="white"
              />
              <path
                d="M69.4226 91.1028C74.5574 90.8819 79.708 90.6453 85.5854 90.3771C85.5854 98.3752 85.5854 105.553 85.5854 112.747L85.8224 112.494C80.9562 112.494 76.0742 112.494 69.6754 112.494C69.6754 105.001 69.6754 97.9335 69.6754 90.8819L69.4226 91.1028Z"
                fill="white"
              />
              <path
                d="M100.911 136.631C106.014 136.173 111.133 135.731 116.932 135.227V157.249H102.428C101.985 150.182 101.559 143.319 101.116 136.457L100.927 136.631H100.911Z"
                fill="white"
              />
            </g>
            <g className="overflow-hidden absolute text-[15rem] inline-block h-fit">
              <g className="amona relative">
                <path
                  d="M197.224 97.618V95.299C197.224 77.8041 187.397 71.9199 175.421 71.9199C162.023 71.9199 154.155 79.2397 153.428 91.0081H136.633C138.245 70.3108 156.478 58.7002 175.247 58.7002C201.696 58.7002 213.671 71.3678 213.498 98.3121L213.324 120.445C213.15 136.504 214.035 147.579 215.82 156.681H199.373C198.836 153.116 198.299 149.188 198.125 143.477C192.232 153.289 182.215 159 165.23 159C147.172 159 132.162 148.998 132.162 131.33C132.162 108.661 157.726 102.067 197.224 97.6022V97.618ZM150.221 130.983C150.221 140.085 157.189 146.159 168.817 146.159C184.016 146.159 198.488 139.202 198.488 116.533V110.459C168.991 113.488 150.237 117.779 150.237 130.983H150.221Z"
                  fill="white"
                />
                <path
                  d="M237.797 156.681V60.6721H254.055V75.1223C259.6 66.0199 268.527 59.063 283.015 59.063C297.503 59.063 306.43 65.4836 310.727 76.0215C318.406 64.2373 329.671 59.063 343.085 59.063C365.425 59.063 374.178 74.0496 374.178 96.0089V156.681H357.92V100.82C357.92 86.0073 355.061 73.1504 337.365 73.1504C323.43 73.1504 314.124 84.0354 314.124 104.559V156.665H297.867V100.805C297.867 85.9916 295.007 73.1346 277.312 73.1346C263.377 73.1346 254.071 84.0196 254.071 104.543V156.649H237.813L237.797 156.681Z"
                  fill="white"
                />
                <path
                  d="M487.665 146.064C487.665 149.708 487.254 153.258 486.512 156.681H472.292C473.335 153.321 473.904 149.756 473.904 146.064C473.904 126.408 457.946 110.459 438.245 110.459C418.543 110.459 402.585 126.392 402.585 146.064C402.585 149.756 403.154 153.321 404.197 156.681H389.977C389.219 153.258 388.824 149.708 388.824 146.064C388.824 118.804 410.943 96.7188 438.245 96.7188C465.546 96.7188 487.665 118.804 487.665 146.064ZM394.591 62.9911H411.149C417.69 70.6264 427.406 75.4852 438.26 75.4852C449.115 75.4852 458.831 70.6264 465.372 62.9911H481.93C473.635 78.5929 457.188 89.2255 438.26 89.2255C419.333 89.2255 402.901 78.5929 394.591 62.9911Z"
                  fill="white"
                />
                <path
                  d="M551.116 59.063C574.357 59.063 582.746 74.0496 582.746 96.0089V156.681H566.488V100.82C566.488 86.0073 563.992 73.1504 545.396 73.1504C529.66 73.1504 520.022 84.0354 520.022 104.559V156.665H503.765V60.6563H520.022V75.1066C525.568 66.0042 534.858 59.0472 551.116 59.0472V59.063Z"
                  fill="white"
                />
                <path
                  d="M666.404 97.618V95.299C666.404 77.8041 656.577 71.9199 644.601 71.9199C631.203 71.9199 623.335 79.2397 622.608 91.0081H605.813C607.425 70.3108 625.657 58.7002 644.427 58.7002C670.875 58.7002 682.851 71.3678 682.678 98.3121L682.504 120.445C682.33 136.504 683.215 147.579 685 156.681H668.553C668.016 153.116 667.478 149.188 667.305 143.477C661.411 153.289 651.395 159 634.41 159C616.352 159 601.342 148.998 601.342 131.33C601.342 108.661 626.906 102.067 666.404 97.6022V97.618ZM619.401 130.983C619.401 140.085 626.368 146.159 637.997 146.159C653.196 146.159 667.668 139.202 667.668 116.533V110.459C638.171 113.488 619.417 117.779 619.417 130.983H619.401Z"
                  fill="white"
                />
              </g>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_71_193">
              <rect width="685" height="159" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="overflow-hidden relative block top-[60%] left-[40%]">
        <div className="intro__subtext relative h6">
          &#123; Web Developer &#125;
        </div>
      </div>
    </section>
  );
}
