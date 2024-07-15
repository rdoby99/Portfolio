import { useRef } from "react";
import diagonalArrow from "../../assets/diagonalArrow.svg";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import WorkDialogContent from "./workDialogContent";

export default function WorkDialog({
  project,
  loopIndex,
}: {
  project: any;
  loopIndex: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  project = project.attributes;
  const tech_stack = project.tech_stack.split(", ");
  let mediaUrl = "";
  if (project.featured_media.data) {
    mediaUrl = `${project.featured_media.data.attributes.url}`;
  }

  return (
    <Dialog>
      <DialogTrigger>
        <div
          className="workRow__inner group flex md:items-center flex-row gap-4 items-start justify-between"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {project.featured_media.data &&
            project.featured_media.data.attributes.mime == "video/mp4" && (
              <video
                width="320"
                height="240"
                ref={videoRef}
                loop
                muted
                preload="none"
                className="w-[15rem] hidden md:inline-block absolute right-[15%] -bottom-4 opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-200"
              >
                <source src={mediaUrl} type="video/mp4"></source>
                Your browser does not support the video tag.
              </video>
            )}

          {project.featured_media.data &&
            project.featured_media.data.attributes.mime == "image/png" && (
              <img
                src={mediaUrl}
                className="w-[15rem] absolute hidden md:inline-block right-[15%] -bottom-4 opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-200"
                loading="lazy"
                alt={`${project.title} thumbnail`}
              ></img>
            )}
          <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-start gap-4 lg:gap-12">
            <div className="flex gap-1 md:w-96">
              <div className="p1__medium">0{loopIndex + 1}.</div>
              <h3 className="h3 text-left">{project.title}</h3>
            </div>
            <ul className="ml-8 lg:ml-0 flex gap-4">
              {tech_stack.map((tool: string, index: number) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <span className="hidden md:inline-block uppercase">Learn More</span>
            <img
              src={diagonalArrow}
              alt=""
              className="lg:w-4 group-hover:rotate-45 transition-all duration-200"
            />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <WorkDialogContent project={project} tech={tech_stack} />
      </DialogContent>
    </Dialog>
  );
}
