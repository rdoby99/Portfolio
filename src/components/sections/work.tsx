import React from "react";

export default function Work() {
  return (
    <section id="work">
      <div className="px-16 py-16 flex flex-col gap-8">
        <h2 className="h5">&#123; More Select Work &#125;</h2>
        <ul>
          <li className="workRow flex justify-between">
            <div className="flex gap-1">
              <div className="p1__medium">01.</div>
              <h3 className="h2">Spare Food</h3>
            </div>
            <ul className="p1">
              <li>Squarespace</li>
              <li>CSS</li>
            </ul>
            <button>Learn More</button>
          </li>
        </ul>
      </div>
    </section>
  );
}
