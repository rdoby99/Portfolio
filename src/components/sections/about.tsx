import React from "react";
import logo from "/logo.png";

export default function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-2 px-12 max-w-screen-xl mx-auto"
    >
      <div className="flex flex-col gap-8">
        <p className="h6">&#123; About Me &#125;</p>
        <h2 className="h2">
          RELIABLE
          <br />
          Innovative
        </h2>
        <p className="max-w-sm">
          Hi! I'm Ramona and I'm a web developer. I love creating beautiful and
          functional websites. I'm also a huge fan of cats and I love to travel.
        </p>
      </div>
      <img src={logo} alt="Logo" />
    </section>
  );
}
