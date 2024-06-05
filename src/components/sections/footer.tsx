import React from "react";

export default function Footer() {
  return (
    <footer className="pb-24">
      <div className="grid grid-cols-[1fr_3fr] grid-rows-[1fr_4fr_1fr] gap-4 px-16">
        {/* Col 1 */}
        <div className="row-start-1 col-start-1 footerGrid__item h5 text-center">
          &#123; Follow &#125;
        </div>
        <ul className="row-start-2 col-start-1 footerGrid__item h4 text-center flex flex-col justify-around">
          <li>LinkedIn</li>
          <li>Github</li>
          <li>CV</li>
        </ul>
        <p className="row-start-3 col-start-1 footerGrid__item text-center p2">
          &copy; 2024 Ramona Doby
        </p>

        {/* Col 2 */}
        <div className="row-start-1 col-start-2 row-span-2 footerGrid__item">
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
        <button className="row-start-3 col-start-2 footerGrid__item h5 !rounded-full hover:bg-text hover:text-white cursor-pointer transition-colors duration-150">
          &#123; Back to Top &#125;
        </button>
      </div>
    </footer>
  );
}
