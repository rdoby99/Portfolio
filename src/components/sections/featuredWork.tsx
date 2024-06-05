import React from "react";

export default function FeaturedWork() {
  return (
    <section id="featuredWork" className="overflow-hidden">
      <div className="smoothWrapper">
        <div className="smoothContent">
          {/* <div
            id="featuredWork__bg"
            className="absolute h-[150%] w-full bg-waves bg-cover"
          ></div> */}
          <div className="grid grid-cols-[2fr_3fr_2fr_2fr_3fr_1fr] grid-rows-[repeat(16,_minmax(0,_1fr))] min-h-[90vh] text-white relative h-full bg-waves bg-cover">
            {/* Col 1 */}
            <div className="workCard col-start-1 row-start-1 col-span-2 row-span-7 pl-16 flex flex-col justify-center">
              <p className="h5">&#123; Featured &#125;</p>
              <h2 className="h1 uppercase">Work</h2>
            </div>
            <div className="workCard row-start-8 col-start-1 row-span-4"></div>
            <div className="workCard row-start-12 col-start-1 row-span-5 workCard workCard__project">
              Japanese Reader
            </div>

            {/* Col 2 */}
            <div className="workCard row-start-8 col-start-2 row-span-4 workCard__accent"></div>
            <div className="workCard row-start-12 col-start-2 row-span-5"></div>

            {/* Col 3 */}
            <div className="workCard row-start-1 col-start-3 row-span-4 workCard__project">
              Delightly
            </div>
            <div className="workCard row-start-5 col-start-3 row-span-3"></div>
            <div className="workCard row-start-8 col-start-3 row-span-5"></div>
            <div className="workCard row-start-13 col-start-3 row-span-4 workCard__project">
              Kao
            </div>

            {/* Col 4 */}
            <div className="workCard row-start-1 col-start-4 row-span-4"></div>
            <div className="workCard row-start-5 col-start-4 row-span-3 workCard__project">
              SAAFON
            </div>
            <div className="workCard row-start-8 col-start-4 row-span-5"></div>
            <div className="workCard row-start-13 col-start-4 row-span-2 workCard__accent"></div>
            <div className="workCard row-start-15 col-start-4 row-span-2"></div>

            {/* Col 5 */}
            <div className="workCard row-start-1 col-start-5 row-span-6"></div>
            <div className="workCard row-start-7 col-start-5 row-span-1"></div>
            <div className="workCard row-start-8 col-start-5 row-span-4 workCard__project">
              John Frieda
            </div>
            <div className="workCard row-start-12 col-start-5 row-span-3"></div>
            <div className="workCard row-start-15 col-start-5 row-span-1 workCard__accent"></div>
            <div className="workCard row-start-16 col-start-5 row-span-1"></div>

            {/* Col 6 */}
            <div className="workCard row-start-1 col-start-6 row-span-7 workCard__accent"></div>
            <div className="workCard row-start-8 col-start-6 row-span-4"></div>
            <div className="workCard row-start-12 col-start-6 row-span-4"></div>
            <div className="workCard row-start-16 col-start-6 row-span-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
