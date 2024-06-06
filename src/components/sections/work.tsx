import React from "react";
import WorkDialog from "./workDialog";

export default function Work() {
  return (
    <section id="work">
      <div className="px-4 md:px-16 py-16 flex flex-col gap-8">
        <h2 className="h5">&#123; More Select Work &#125;</h2>
        <ul>
          <li class="workRow">
            <WorkDialog />
          </li>
        </ul>
      </div>
    </section>
  );
}
