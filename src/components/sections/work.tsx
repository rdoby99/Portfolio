import React, { useRef } from "react";
import WorkDialog from "./workDialog";
import useFetchProjects from "../../hooks/useFetchProjects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Work() {
  const { loading, error, data } = useFetchProjects(
    "http://localhost:1337/api/projects?populate=featured_media"
  );

  const container = useRef(null);

  useGSAP(
    () => {
      if (!data) return;
      var featuredWorkTL = gsap.timeline();

      featuredWorkTL.fromTo(
        ".workRow",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2,
          ease: "power3",
          stagger: 0.5,
          scrollTrigger: {
            trigger: "#work",
            start: "top center",
            toggleActions: "play reverse play none",
          },
          onComplete: () => {
            console.log("Work Animation Complete");
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
      <div id="work">
        <div className="px-4 md:px-16 py-16 flex flex-col gap-8">
          <h2 className="h5">&#123; More Select Work &#125;</h2>
          <ul>
            {data
              .filter((project) => !project.attributes.featured_order)
              .map((project, index) => (
                <li key={project.id} className="workRow relative">
                  <WorkDialog project={project} loopIndex={index} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
