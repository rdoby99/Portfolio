import React from "react";
import diagonalArrow from "../../assets/diagonalArrow.svg";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import sitePic from "/src/assets/site.png";

export default function WorkDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="workRow__inner flex md:items-center flex-row gap-4 items-start justify-between">
          <div className="flex flex-col md:flex-row justify-between md:min-w-[60%] gap-4 md:gap-12">
            <div className="flex gap-1">
              <div className="p1__medium">01.</div>
              <h3 className="h2">Spare Food</h3>
            </div>
            <ul className="ml-8 md:ml-0 flex md:flex-col gap-4">
              <li>Squarespace</li>
              <li>CSS</li>
            </ul>
          </div>
          <button className="flex gap-2 items-center">
            <span className="hidden md:inline-block uppercase">Learn More</span>
            <img src={diagonalArrow} alt="" className="md:w-4" />
          </button>
        </div>
      </DialogTrigger>
      <DialogContent>
        <h4 className="h5">&#123; The Work &#125;</h4>
        <div className="grid grid-cols-2 grid-rows-2 gap-x-12 gap-y-8 px-12 py-8">
          {/* Description */}
          <div>
            <h5 className="h2">Spare Food</h5>
            <p className="p1">
              Delightly specializes in curating personalized and meaningful
              corporate gifting experiences. As the lead developer, I was in
              charge of the brand's migration to Shopify. In addition to
              development, I led weekly meetings to corrdinate migration efforts
              with the client.
            </p>
            <button className="flex gap-2 items-center">
              <span className="hidden md:inline-block uppercase">
                sparefood.com
              </span>
              <img src={diagonalArrow} alt="" className="md:w-4" />
            </button>
          </div>

          {/* Image */}
          <div>
            <img src={sitePic} alt="" />
          </div>

          {/* Agency and Contributions */}
          <div>
            <div>
              <h6>Agency</h6>
              <p>SMAKK Studios</p>
            </div>
            <div>
              <h6>Contributions</h6>
              <ul>
                <li>Front-end Dvelopment</li>
                <li>Solution Planning</li>
                <li>Technical Leadership</li>
              </ul>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h6>Tech Stack</h6>
            <ul>
              <li>Shopify</li>
              <li>Shopify</li>
              <li>Shopify</li>
              <li>Shopify</li>
              <li>Shopify</li>
              <li>Shopify</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
