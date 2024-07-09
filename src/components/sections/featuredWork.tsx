import { useRef } from "react";
import FeaturedWorkDialog from "./featuredWorkDialog";
// @ts-ignore
import useFetchProjects from "../../hooks/useFetchProjects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/src/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// import Image from "../image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type FeaturedWorkProps = {
  onWorkLoadChange: (newState: boolean) => void;
};

export default function FeaturedWork({ onWorkLoadChange }: FeaturedWorkProps) {
  const apiUrl = import.meta.env.VITE_STRAPI_API_URL;

  const { loading, error, data } = useFetchProjects(
    `${apiUrl}/api/projects?populate=featured_media`
  );

  const container = useRef<HTMLDivElement>(null);
  const containerInner = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: container });
  let firstTrigger = false;

  const animateFlips = contextSafe((completeCall: boolean) => {
    const flips = document.querySelectorAll(".workCard__project__inner");
    const totalDuration = flips.length * 6 + 0.2;

    if (firstTrigger && !completeCall) {
      return;
    }

    Array.from(flips)
      .reverse()
      .forEach((flip, index) => {
        let delay = index * 6;

        gsap
          .timeline({
            delay: delay,
            onComplete: function () {
              if (index === flips.length - 1) {
                setTimeout(animateFlips, totalDuration + 3000, true); // Adjust timing as needed
              }
            },
          })
          .to(flip, { rotateY: 180, duration: 0.1, ease: "none" })
          .to(flip, { rotateY: 0, duration: 0.1, ease: "none", delay: 2.5 });
      });
  });

  useGSAP(
    () => {
      if (!data) return;

      onWorkLoadChange(true);
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.fromTo(
          ".featured-work-headings",
          { top: 200 },
          {
            top: 0,
            duration: 2,
            ease: "power3",
            stagger: 0.2,
            scrollTrigger: {
              trigger: containerInner.current,
              start: "top center",
              toggleActions: "play reverse play reverse",
            },
            onComplete: () => {
              animateFlips(false);
              firstTrigger = true;
            },
          }
        );
      });

      mm.add("(max-width: 768px)", () => {
        gsap.fromTo(
          ".featured-work-headings",
          { top: 200 },
          {
            top: 0,
            duration: 2,
            ease: "power3",
            stagger: 0.2,
            scrollTrigger: {
              trigger: containerInner.current,
              start: "top center",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    },
    { scope: container, dependencies: [data] }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const featuredProject1 = data.find(
    (project: any) => project.attributes.featured_order === 1
  );
  const featuredProject2 = data.find(
    (project: any) => project.attributes.featured_order === 2
  );
  const featuredProject3 = data.find(
    (project: any) => project.attributes.featured_order === 3
  );
  const featuredProject4 = data.find(
    (project: any) => project.attributes.featured_order === 4
  );
  const featuredProject5 = data.find(
    (project: any) => project.attributes.featured_order === 5
  );

  return (
    <section id="section-featuredWork" ref={container}>
      <div
        ref={containerInner}
        id="featuredWork"
        className="relative overflow-hidden h-[90vh] bg-waves500 sm:bg-waves1000 lg:bg-waves1500 2xl:bg-waves3000  bg-bottom md:bg-center bg-cover"
      >
        {/* <Image
          classes="absolute top-0 left-0 object-cover w-full h-full object-bottom md:object-center"
          image="/background-1000w.webp"
          loading="lazy"
          srcSet="/background-500w.webp 500w, /background-1000w.webp 1000w, /background-1500w.webp 1500w, /background-3000w.webp 3000w"
          sizes="100vw"
        /> */}
        <div className="grid grid-cols-2 md:grid-cols-[2fr_3fr_2fr_2fr_3fr_1fr] grid-rows-[3fr_2fr_3fr_3fr_2fr_3fr] md:grid-rows-[repeat(16,_minmax(0,_1fr))] text-white relative h-[90vh]">
          {/* Col 1 */}
          <div className="workCard col-start-1 md:row-start-1 col-span-2 md:row-span-7 pl-4 md:pl-16 flex flex-col justify-center">
            <div className="overflow-hidden">
              <p className="featured-work-headings relative h5">
                &#123; Featured &#125;
              </p>
            </div>
            <div className="overflow-hidden">
              <h2 className="featured-work-headings pt-8 xl:!leading-tight relative h1 uppercase md:!text-[9.5vw] xl:!text-9xl">
                Work
              </h2>
            </div>
          </div>
          <div className="workCard md:row-start-8 col-start-1 md:row-span-4 workCard__empty"></div>
          <div className="workCard md:row-start-12 col-start-1 col-span-2 md:col-span-1 md:row-span-5 workCard__project">
            {featuredProject1 && (
              <FeaturedWorkDialog project={featuredProject1} />
            )}
          </div>

          {/* Col 2 */}
          <div className="workCard md:row-start-8 col-start-2 md:row-span-4 workCard__accent"></div>
          <div className="workCard md:row-start-12 col-start-2 md:row-span-5 workCard__empty"></div>

          {/* Col 3 */}
          <div className="group workCard md:row-start-1 col-start-2 md:col-start-3 md:row-span-4 workCard__project">
            {featuredProject2 && (
              <FeaturedWorkDialog project={featuredProject2} />
            )}
          </div>
          <div className="workCard md:row-start-5 col-start-3 md:row-span-3 workCard__empty"></div>
          <div className="workCard md:row-start-8 col-start-3 md:row-span-5 workCard__empty"></div>
          <div className="group workCard md:row-start-13 col-start-1 md:col-start-3 md:row-span-4 workCard__project">
            {featuredProject3 && (
              <FeaturedWorkDialog project={featuredProject3} />
            )}
          </div>

          {/* Col 4 */}
          <div className="workCard md:row-start-1 col-start-4 md:row-span-4 workCard__empty"></div>
          <div className="group workCard md:row-start-5 col-start-1 col-span-2 md:col-span-1 md:col-start-4 md:row-span-3 workCard__project">
            {featuredProject4 && (
              <FeaturedWorkDialog project={featuredProject4} />
            )}
          </div>
          <div className="workCard md:row-start-8 col-start-4 md:row-span-5 workCard__empty"></div>
          <div className="workCard md:row-start-13 col-start-4 md:row-span-2 workCard__accent"></div>
          <div className="workCard md:row-start-15 col-start-4 md:row-span-2 workCard__empty"></div>

          {/* Col 5 */}
          <div className="workCard md:row-start-1 col-start-5 md:row-span-6 workCard__empty"></div>
          <div className="workCard md:row-start-7 col-start-5 md:row-span-1 workCard__empty"></div>
          <div className="group workCard md:row-start-8 col-start-2 md:col-start-5 md:row-span-4 workCard__project">
            {featuredProject5 && (
              <FeaturedWorkDialog project={featuredProject5} />
            )}
          </div>
          <div className="workCard md:row-start-12 col-start-5 md:row-span-3 workCard__empty"></div>
          <div className="workCard md:row-start-15 col-start-5 md:row-span-1 workCard__accent"></div>
          <div className="workCard md:row-start-16 col-start-5 md:row-span-1 workCard__empty"></div>

          {/* Col 6 */}
          <div className="workCard md:row-start-1 col-start-6 md:row-span-7 workCard__accent"></div>
          <div className="workCard md:row-start-8 col-start-6 md:row-span-4 workCard__empty"></div>
          <div className="workCard md:row-start-12 col-start-6 md:row-span-4 workCard__empty"></div>
          <div className="workCard md:row-start-16 col-start-6 md:row-span-1 workCard__empty"></div>
        </div>
      </div>
    </section>
  );
}
