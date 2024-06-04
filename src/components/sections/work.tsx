import React from "react";

export default function Work() {
  return (
    <section id="work">
      <div className="px-16 py-16 flex flex-col gap-8">
        <h2 className="h6">&#123; More Select Work &#125;</h2>
        <ul>
          <li className="workRow flex justify-between">
            <h3>Spare Food</h3>
            <ul>
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
