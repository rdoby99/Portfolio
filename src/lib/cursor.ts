window.onload = function () {
  // Select the circle element
  const circleElement = document.querySelector(".circle");

  // Create objects to track mouse position and custom cursor position
  const mouse = { x: 0, y: 0 }; // Track current mouse position
  const previousMouse = { x: 0, y: 0 }; // Store the previous mouse position
  const circle = { x: 0, y: 0 }; // Track the circle position

  // Initialize variables to track scaling and rotation
  let currentScale = 0; // Track current scale value
  let currentAngle = 0; // Track current angle value

  // Update mouse position on the 'mousemove' event
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  // Smoothing factor for cursor movement speed (0 = smoother, 1 = instant)
  const speed = 0.17;

  // Start animation
  const tick = () => {
    // MOVE
    // Calculate circle movement based on mouse position and smoothing
    circle.x += (mouse.x - circle.x) * speed;
    circle.y += (mouse.y - circle.y) * speed;
    // Create a transformation string for cursor translation
    const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

    // Apply all transformations to the circle element in a specific order: translate -> rotate -> scale
    circleElement.style.transform = `${translateTransform}`;

    // Request the next frame to continue the animation
    window.requestAnimationFrame(tick);
  };

  // Start the animation loop
  tick();

  // Change circle color on repeat
  // let tl = gsap.timeline({ repeat: -1 });
  // tl.to(".circle", { backgroundColor: "#0061FE", duration: 2 });
  // tl.to(".circle", { backgroundColor: "#A8B6F5", duration: 2 });
  // tl.to(".circle", { backgroundColor: "#B3DBFF", duration: 2 });

  // Change circle size over link
  let links = document.querySelectorAll("a");
  links.forEach((link) =>
    link.addEventListener("mouseenter", function () {
      circleElement.style.setProperty("--circle-size", "70px");
      circleElement.style.setProperty("border", "1px solid white");
      circleElement.style.setProperty("opacity", "0.5");
    })
  );

  links.forEach((link) =>
    link.addEventListener("mouseleave", function () {
      circleElement.style.setProperty("--circle-size", "20px");
      circleElement.style.setProperty("border", "none");
      circleElement.style.setProperty("opacity", "1");
    })
  );
};
