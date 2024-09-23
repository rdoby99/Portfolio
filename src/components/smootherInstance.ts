// smootherInstance.ts
import ScrollSmoother from "gsap/ScrollSmoother";

let smootherInstance: ScrollSmoother | null = null;

export const setSmootherInstance = (instance: ScrollSmoother) => {
  smootherInstance = instance;
};

export const getSmootherInstance = (): ScrollSmoother | null => {
  return smootherInstance;
};
