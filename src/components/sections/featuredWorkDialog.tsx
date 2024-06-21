import React from "react";
import diagonalArrow from "../../assets/diagonalArrow.svg";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import WorkDialogContent from "./workDialogContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function FeaturedWorkDialog({ project }) {
  project = project.attributes;
  const tech_stack = project.tech_stack.split(", ");

  return (
    <Dialog>
      <DialogTrigger>
        <div className="workCard__project__inner p1 w-full h-full items-start flex-col justify-between">
          <div className="workCard__project__front text-left">
            {project.title}
          </div>
          <div className="workCard__project__back">
            <ul className="text-left flex flex-col gap-2">
              {tech_stack.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
            <div className="flex gap-2 items-center">
              <span className="uppercase">Learn More</span>
              <img
                src={diagonalArrow}
                alt=""
                className="md:w-4 brightness-200"
              />
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <WorkDialogContent project={project} tech={tech_stack} />
      </DialogContent>
    </Dialog>
  );
}
