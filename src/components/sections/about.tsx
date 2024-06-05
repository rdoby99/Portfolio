import React from "react";
import logo from "/logo.png";
import ShapeCollage from "./shapeCollage";

export default function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-12 max-w-screen-xl mx-auto pb-28 md:min-h-screen items-center"
    >
      <div className="flex flex-col gap-8">
        <p className="h5">&#123; I’m Ramona &#125;</p>
        <h2 className="h2">
          <span className="font-secHeader uppercase">Front-End</span> <br /> Web
          Developer
        </h2>
        <p className="max-w-sm">
          For the past 3 years, I've specialized in crafting engaging web
          experiences using platforms such as Shopify, Shopify Plus, WordPress,
          and React. My expertise covers every part of the process—from solution
          planning through development to deployment. To ensure the highest
          quality outcomes, I lead my projects with a commitment to delivering
          organized, reliable, and user-focused solutions, always aiming to
          exceed expectations and enhance user engagement.
        </p>
      </div>
      <ShapeCollage className="hidden md:block" />
    </section>
  );
}
