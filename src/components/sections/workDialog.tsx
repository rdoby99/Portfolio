import React from "react";
import diagonalArrow from "../../assets/diagonalArrow.svg";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import sitePic from "/src/assets/site.png";

export default function WorkDialog({ project, loopIndex }) {
  // console.log(project);

  project = project.attributes;
  const tech_stack = project.tech_stack.split(", ");

  return (
    <Dialog>
      <DialogTrigger>
        <div className="workRow__inner group flex md:items-center flex-row gap-4 items-start justify-between">
          <div className="flex flex-col md:flex-row justify-between md:min-w-[60%] gap-4 md:gap-12">
            <div className="flex gap-1">
              <div className="p1__medium">0{loopIndex + 1}.</div>
              <h3 className="h2">{project.title}</h3>
            </div>
            <ul className="ml-8 md:ml-0 flex md:flex-col gap-4 items-start">
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
        <div className="dialog-content">
          {/* Description */}
          <div className="flex flex-col gap-6 pb-8">
            {/* Image */}
            <img src={sitePic} alt="" />
            <div>
              <h5 className="h2 mb-2">{project.title}</h5>
              <h6 className="text-xs mb-4">Agency: Smakk Studios</h6>
              <p className="p1 mb-4">{project.description}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-[1fr_2fr] gap-y-4">
              <h6>Tech Stack:</h6>
              <ul className="flex gap-x-4 gap-y-2 p2 flex-wrap">
                {tech_stack.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
              {/* Contributions */}
              <h6 className="mb-4">My&nbsp;Contributions:</h6>
              <ul className="p2 flex gap-x-4 gap-y-2 flex-wrap">
                {project.contributions.map((cont, index) => (
                  <li key={index}>{cont}</li>
                ))}
              </ul>
            </div>
            <a
              href={project.url}
              className="flex gap-2 p1__medium items-center button button--primary group"
            >
              <span className="uppercase">Visit Site</span>
              <img
                src={diagonalArrow}
                alt=""
                className="md:w-4 group-hover:rotate-45 transition-all duration-200"
              />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
