import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Spiral() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // const axesHelper = new THREE.AxesHelper(5);
    // scene.add(axesHelper);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Additional light
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 0);
    scene.add(ambientLight);
    scene.add(directionalLight);

    let spiral;
    const loader = new GLTFLoader();
    loader.load(
      "/spiral.gltf",
      (gltf) => {
        const blueGlassMaterial = new THREE.MeshPhysicalMaterial({
          color: 0x0061fe,
          metalness: 0,
          roughness: 0,
          transmission: 1,
          // opacity: 0.6,
          transparent: true,
          reflectivity: 0.5,
        });

        gltf.scene.traverse((child) => {
          if (child.isMesh) {
            child.material = blueGlassMaterial;
          }
        });

        spiral = gltf.scene;
        scene.add(spiral);

        // Set light position close to the model's position
        // if (spiral) {
        //   const box = new THREE.Box3().setFromObject(spiral);
        //   const center = new THREE.Vector3();
        //   box.getCenter(center);
        //   pointLight.position.set(center.x, center.y + 1, center.z + 5); // Slightly above and in front of the model
        // }

        camera.position.set(0, -0.5, 5);
      },
      undefined,
      function (error) {
        console.error("An error happened during loading the model:", error);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);

      if (spiral) {
        // Rotate the model
        spiral.rotation.y += 0.01;
        spiral.rotation.x += 0.01;
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute left-0 -top-1/4" />;
}
