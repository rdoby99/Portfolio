import React, {useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() { 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#hero h1", { duration: 1, x: 100, ease: "bounce" });
  }, []);

  return (
    <section id="hero">
      <h1 className="text-red-500">Ramona Doby</h1>
    </section>
  )
}