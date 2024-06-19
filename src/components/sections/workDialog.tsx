import React from "react";
import diagonalArrow from "../../assets/diagonalArrow.svg";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import sitePic from "/src/assets/site.png";
import WorkDialogContent from "./workDialogContent";

export default function WorkDialog({ project, loopIndex }) {
  project = project.attributes;
  const tech_stack = project.tech_stack.split(", ");
  let videoUrl = "";
  if (project.featured_media.data) {
    videoUrl = `http://localhost:1337${project.featured_media.data.attributes.url}`;
  }

  return (
    <Dialog>
      <DialogTrigger>
        <div className="workRow__inner group flex md:items-center flex-row gap-4 items-start justify-between">
          {project.featured_media.data && (
            <video
              width="320"
              height="240"
              autoPlay
              loop
              muted
              className="w-full"
            >
              <source src={videoUrl} type="video/mp4"></source>
              Your browser does not support the video tag.
            </video>
          )}
          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-start gap-4 md:gap-12">
            <div className="flex gap-1 md:w-96">
              <div className="p1__medium">0{loopIndex + 1}.</div>
              <h3 className="h3 text-left">{project.title}</h3>
            </div>
            <ul className="ml-8 md:ml-0 flex gap-4">
              {tech_stack.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <span className="hidden md:inline-block uppercase">Learn More</span>
            <img
              src={diagonalArrow}
              alt=""
              className="md:w-4 group-hover:rotate-45 transition-all duration-200"
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
