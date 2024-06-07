import React from "react";
import diagonalArrow from "../../assets/diagonalArrow.svg";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import WorkDialogContent from "./workDialogContent";

export default function FeaturedWorkDialog({ project }) {
  project = project.attributes;
  const tech_stack = project.tech_stack.split(", ");

  return (
    <Dialog>
      <DialogTrigger>
        <div className="hidden group-hover:block p1">
          <ul className="mb-8">
            {tech_stack.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
          <button className="flex gap-2 items-center">
            <span className="uppercase">Learn More</span>
            <img src={diagonalArrow} alt="" className="md:w-4" />
          </button>
        </div>
        <span className="group-hover:hidden">{project.title}</span>
      </DialogTrigger>
      <DialogContent>
        <WorkDialogContent project={project} tech={tech_stack} />
      </DialogContent>
    </Dialog>
  );
}
