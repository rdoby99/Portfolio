import React from "react";
import diagonalArrow from "../../assets/diagonalArrow.svg";

export default function Work() {
  return (
    <section id="work">
      <div className="px-4 md:px-16 py-16 flex flex-col gap-8">
        <h2 className="h5">&#123; More Select Work &#125;</h2>
        <ul>
          <li className="workRow flex flex-col md:flex-row gap-4 items-start md:justify-between">
            <div className="flex gap-1">
              <div className="p1__medium">01.</div>
              <h3 className="h2">Spare Food</h3>
            </div>
            <ul className="ml-8 md:ml-0 flex md:flex-col gap-4">
              <li>Squarespace</li>
              <li>CSS</li>
            </ul>
            <button className="flex">
              <span className="hidden md:inline-block uppercase">
                Learn More
              </span>
              <img src={diagonalArrow} alt="" />
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}
