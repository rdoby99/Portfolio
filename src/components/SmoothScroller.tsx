import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { setSmootherInstance } from "./smootherInstance";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

// Creates the ScrollSmoother. Render this before every other section:
// React runs effects in tree order, so the smoother then exists before any
// section creates its ScrollTriggers. If it's created later, ScrollSmoother
// re-initializes the existing triggers, which breaks scrubbed tweens in
// GSAP 3.14 (they get stuck at NaN, e.g. the hero curve shape at width 0).
export default function SmoothScroller() {
  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#scroll-wrapper",
      content: "#scroll-content",
      smooth: 2,
      effects: true,
    });

    setSmootherInstance(smoother);
  });

  return null;
}
