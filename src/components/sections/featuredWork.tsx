import React from "react";

export default function FeaturedWork() {
  return (
    <section id="featuredWork">
      <div className="grid grid-cols-[2fr_3fr_2fr_2fr_3fr_1fr] grid-rows-[repeat(16,_minmax(0,_1fr))] min-h-[90vh] divide-x-2 divide-white bg-waves bg-cover text-white">
        <div className="col-span-2 col-start-1 row-span-7 p-8">
          <p className="h6">&#123; Featured &#125;</p>
          <h2 className="h2">Work</h2>
        </div>
      </div>
    </section>
  );
}
