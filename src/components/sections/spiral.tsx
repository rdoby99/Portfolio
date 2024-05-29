import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Spiral() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();

    //Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    //Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 0);
    scene.add(ambientLight);
    scene.add(directionalLight);

    // Adding axes helper
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    // GLTF Loader
    let spiral;
    const loader = new GLTFLoader();
    loader.load(
      "/spiral.gltf",
      (gltf) => {
        spiral = gltf.scene;
        scene.add(spiral);
        camera.position.set(0, -0.5, 5); // x, y, z
      },
      undefined,
      function (error) {
        console.error("An error happened during loading the model:", error);
      }
    );

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      // Check if the model is loaded before trying to animate it
      if (spiral) {
        // Rotate the model
        // spiral.rotation.x += 0.01;
        spiral.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Clean up on component unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute -right-1/4 top-[15%]" />;
}
