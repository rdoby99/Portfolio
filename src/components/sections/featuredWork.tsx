import React from "react";
import FeaturedWorkDialog from "./featuredWorkDialog";
import useFetchProjects from "../../hooks/useFetchProjects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/src/ScrollTrigger";

export default function FeaturedWork() {
  const { loading, error, data } = useFetchProjects(
    "http://localhost:1337/api/projects"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const featuredProject1 = data.find(
    (project) => project.attributes.featured_order === 1
  );
  const featuredProject2 = data.find(
    (project) => project.attributes.featured_order === 2
  );
  const featuredProject3 = data.find(
    (project) => project.attributes.featured_order === 3
  );
  const featuredProject4 = data.find(
    (project) => project.attributes.featured_order === 4
  );
  const featuredProject5 = data.find(
    (project) => project.attributes.featured_order === 5
  );

  gsap.registerPlugin(ScrollTrigger);

  return (
    <section
      id="featuredWork"
      className="snap-section relative overflow-hidden h-[90vh]"
    >
      {/* <div
        id="featuredWork__bg"
        data-speed="auto"
        className="absolute inline-block h-[115%] w-full bg-waves bg-cover bottom-0 object-cover"
      ></div> */}
      <div className="grid grid-cols-2 md:grid-cols-[2fr_3fr_2fr_2fr_3fr_1fr] grid-rows-[3fr_2fr_3fr_3fr_2fr_3fr] md:grid-rows-[repeat(16,_minmax(0,_1fr))] text-white relative h-[90vh] bg-waves bg-cover">
        {/* Col 1 */}
        <div className="workCard col-start-1 md:row-start-1 col-span-2 md:row-span-7 pl-16 flex flex-col justify-center">
          <p className="h5">&#123; Featured &#125;</p>
          <h2 className="h1 uppercase md:!text-[9.5vw] xl:!text-9xl">Work</h2>
        </div>
        <div className="workCard md:row-start-8 col-start-1 md:row-span-4 workCard__empty"></div>
        <div className="group workCard md:row-start-12 col-start-1 col-span-2 md:col-span-1 md:row-span-5 workCard__project">
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
    </section>
  );
}
