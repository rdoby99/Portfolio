import React from "react";

export default function Footer() {
  return (
    <footer className="pb-24">
      <div className="grid grid-cols-[1fr_3fr] grid-rows-[1fr_4fr_1fr] gap-4 px-16">
        <div className="row-start-1 col-start-1 footerGrid__item h6">
          &#123; Follow &#125;
        </div>
        <ul className="row-start-2 col-start-1 footerGrid__item h3">
          <li>LinkedIn</li>
          <li>Github</li>
          <li>CV</li>
        </ul>
        <p className="row-start-3 col-start-1 footerGrid__item">
          &copy; 2024 Ramona Doby
        </p>
        <div className="row-start-1 col-start-2 row-span-2 footerGrid__item">
          <div className="h6 mb-12">&#123; Contact &#125;</div>
          <h3 className="h2">Let's Connect!</h3>
          <p className="mb-12">
            Interested in working together? Reach out to discuss how we can turn
            your vision into a digital reality.
          </p>

          <h4 className="h5 font-bold">Email</h4>
          <p>ramonadoby@gmail.com</p>
        </div>
        <button className="row-start-3 col-start-2 footerGrid__item h6">
          &#123; Back to Top &#125;
        </button>
      </div>
    </footer>
  );
}
