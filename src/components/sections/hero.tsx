import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import spiral from "../../assets/3DShapes/spiral.png";
import curve from "../../assets/3DShapes/curve.png";
import arrow from "../../assets/arrow.svg";

export default function Hero() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".hero__subtext",
      { top: 50 },
      {
        top: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#hero",
          start: "top center",
          toggleActions: "play none reset none",
        },
      }
    );

    gsap.from(".hero__italic", {
      scrollTrigger: {
        trigger: "#hero",
        start: "top center",
        toggleActions: "play none none none",
      },
      x: 50,
      duration: 1,
      ease: "none",
    });
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
          Hi THERE
          <br />
          <span className="hero__italic font-secHeader">NICE</span> to
          <br />
          MEET{" "}
          <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:inline-block after:w-full after:h-4 after:bg-[url('../../assets/underline.svg')]">
            you
          </span>
        </h1>
        <img
          src={spiral}
          alt=""
          className="threedShape max-w-[150px] md:max-w-sm absolute right-0 md:right-[-14rem] top-1/4"
        />
        <img
          src={curve}
          alt=""
          className="threedShape max-w-[150px] md:max-w-[350px] absolute left-0 md:-left-[16rem] top-[9rem]"
        />
        <svg
          width="224"
          height="20"
          viewBox="0 0 224 20"
          fill="none"
          className="absolute bottom-0 right-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_191_235)">
            <path
              d="M2.63405 19.349C16.6065 15.8724 30.7186 12.9837 44.9293 10.6995C59.0249 8.43219 73.211 6.76108 87.4381 5.6862C101.78 4.59452 116.163 4.10746 130.547 4.21663C144.93 4.3258 159.305 5.03119 173.63 6.3412C187.956 7.65122 201.994 9.53227 216.057 12.0347C217.848 12.3538 219.63 12.6813 221.421 13.0172C222.513 13.2188 223.639 12.7149 223.951 11.5477C224.222 10.5232 223.614 9.17117 222.513 8.96123C208.262 6.27402 193.895 4.19144 179.479 2.70507C165.079 1.22711 150.647 0.353764 136.198 0.0934401C121.683 -0.175281 107.152 0.169018 92.6623 1.11794C78.1724 2.06686 63.7728 3.6372 49.4307 5.78697C35.1297 7.92834 20.919 10.6743 6.84796 14.0165C5.0819 14.4364 3.31583 14.8647 1.54976 15.3098C-1.0213 15.948 0.0711977 19.9956 2.64226 19.3574L2.63405 19.349Z"
              fill="#0061FE"
            />
          </g>
          <defs>
            <clipPath id="clip0_191_235">
              <rect
                width="223.921"
                height="19.4151"
                fill="white"
                transform="translate(0.0792236 0.00109863)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <img src={arrow} alt="Arrow" />
    </section>
  );
}
