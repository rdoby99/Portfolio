import { useRef, useState } from "react";
import WorkDialog from "./workDialog";
// @ts-ignore
import useFetchProjects from "../../hooks/useFetchProjects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Work() {
  const apiUrl = import.meta.env.VITE_STRAPI_API_URL;

  const { loading, error, data } = useFetchProjects(
    `${apiUrl}/api/projects?populate=featured_media`
  );

  const container = useRef<HTMLDivElement>(null);
  const containerInner = useRef<HTMLDivElement>(null);
  const [hoveredRowIndex, setHoveredRowIndex] = useState(null);

  const handleMouseEnter = (index: any) => {
    setHoveredRowIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredRowIndex(null);
  };

  useGSAP(
    () => {
      if (!data) return;

      gsap.fromTo(
        ".workRow",
        { top: 50, opacity: 0 },
        {
          top: 0,
          opacity: 1,
          duration: 2,
          ease: "power3",
          stagger: 0.3,
          scrollTrigger: {
            trigger: containerInner.current,
            start: "top center",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: container, dependencies: [data] }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section id="section-work" ref={container}>
      <div ref={containerInner} id="work">
        <div className="px-4 md:px-10 lg:px-16 py-16 flex flex-col gap-8">
          <h2 className="h5">&#123; More Select Work &#125;</h2>
          <ul onMouseLeave={() => setHoveredRowIndex(null)}>
            {data
              .filter((project: any) => !project.attributes.featured_order)
              .map((project: any, index: number) => (
                <li
                  key={project.id}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave()}
                  className={`relative hover:scale-[1.025] hover:duration-[600ms] transition-all ease-in ${
                    hoveredRowIndex !== null && hoveredRowIndex !== index
                      ? "md:!opacity-60"
                      : ""
                  }`}
                >
                  <div data-index={index} className="workRow relative">
                    <WorkDialog project={project} loopIndex={index} />
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
