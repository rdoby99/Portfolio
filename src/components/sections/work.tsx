import React from "react";
import WorkDialog from "./workDialog";
import useFetchProjects from "../../hooks/useFetchProjects";

export default function Work() {
  const { loading, error, data } = useFetchProjects(
    "http://localhost:1337/api/projects"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section id="work" className="snap-section">
      <div className="px-4 md:px-16 py-16 flex flex-col gap-8">
        <h2 className="h5">&#123; More Select Work &#125;</h2>
        <ul>
          {data
            .filter((project) => !project.attributes.featured_order)
            .map((project, index) => (
              <li key={project.id} className="workRow">
                <WorkDialog project={project} loopIndex={index} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
