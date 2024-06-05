import React from "react";

export default function Footer() {
  return (
    <footer className="pb-24">
      <div className="md:grid md:-cols-[1fr_3fr] md:grid-rows-[1fr_4fr_1fr] flex flex-col gap-4 px-4 md:px-16">
        {/* Col 1 */}
        <div className="row-start-1 col-start-1 footerGrid__item h5 text-center hidden md:flex md:items-center md:justify-center">
          &#123; Follow &#125;
        </div>
        <ul className="row-start-2 col-start-1 footerGrid__item h4 text-center justify-around hidden md:flex md:flex-col">
          <li>LinkedIn</li>
          <li>Github</li>
          <li>CV</li>
        </ul>
        <p className="row-start-3 col-start-1 footerGrid__item text-center p2 hidden md:flex md:items-center md:justify-center">
          &copy; 2024 Ramona Doby
        </p>

        {/* Col 2 */}
        <div className="row-start-1 md:col-start-2 md:row-span-2 footerGrid__item w-full">
          <div className="h5 mb-16">&#123; Contact &#125;</div>
          <h3 className="h2 mb-4">
            <span className="h2__italic">Let's</span> Connect!
          </h3>
          <p className="mb-12 p1 md:max-w-[60%]">
            Interested in working together? Reach out to discuss how we can turn
            your vision into a digital reality.
          </p>

          <h4 className="p1__medium">Email</h4>
          <p className="p1 mb-16">ramonadoby@gmail.com</p>
        </div>

        {/* Mobile Social */}
        <div className="md:hidden footerGrid__item flex flex-col gap-4 row-start-2">
          <h3 className="h5">&#123; Follow &#125;</h3>
          <ul className="h4 flex justify-between">
            <li>LinkedIn</li>
            <li>Github</li>
            <li>CV</li>
          </ul>
        </div>
        <button className="row-start-3 md:col-start-2 footerGrid__item h5 !rounded-full hover:bg-text hover:text-white cursor-pointer transition-colors duration-150">
          &#123; Back to Top &#125;
        </button>
      </div>
    </footer>
  );
}
