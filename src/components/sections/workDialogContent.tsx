import diagonalArrow from "../../assets/diagonalArrow.svg";
import LazyVideo from "../LazyVideo";

export default function WorkDialogContent({
  project,
  tech,
}: {
  project: any;
  tech: string[];
}) {
  // const apiUrl = import.meta.env.VITE_STRAPI_API_URL;

  let mediaUrl = "";
  if (project.featured_media.data) {
    mediaUrl = `${project.featured_media.data.attributes.url}`;
  }

  return (
    <div className="dialog-content">
      {/* Description */}
      <div className="flex flex-col gap-6 pb-8">
        {/* Image */}
        {project.featured_media.data &&
          project.featured_media.data.attributes.mime == "video/mp4" && (
            <LazyVideo videoSrc={mediaUrl} classes="w-full" />
          )}

        {project.featured_media.data &&
          project.featured_media.data.attributes.mime == "image/png" && (
            <img
              src={mediaUrl}
              className="w-full"
              loading="lazy"
              alt={`${project.title} featured image`}
            ></img>
          )}
        <div>
          <h4 className="h3 mb-2">{project.title}</h4>
          {project.agency && (
            <h6 className="text-xs mb-4">Agency: {project.agency}</h6>
          )}
          <p className="p1 mb-4">{project.description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_2fr] gap-y-4">
          <h6>Tech Stack:</h6>
          <ul className="flex gap-x-4 gap-y-2 p2 flex-wrap">
            {tech.map((tool: string, index: number) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
          {/* Contributions */}
          <h6>My&nbsp;Contributions:</h6>
          <ul className="p2 flex gap-x-4 gap-y-2 flex-wrap">
            {project.contributions.map((cont: string, index: number) => (
              <li key={index}>{cont}</li>
            ))}
          </ul>
        </div>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            className="flex gap-2 p1__medium items-center button button--primary group mt-6"
            aria-label={`Visit ${project.title}'s website (opens in a new window)`}
            rel="noopener noreferrer"
          >
            <span className="uppercase">Visit Site</span>
            <img
              src={diagonalArrow}
              alt=""
              className="md:w-4 group-hover:rotate-45 transition-all duration-200"
            />
          </a>
        )}
      </div>
    </div>
  );
}
