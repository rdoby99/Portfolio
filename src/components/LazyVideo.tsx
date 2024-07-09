import { useEffect, useRef } from "react";

export default function LazyVideo({
  videoSrc,
  imgSrc,
  title = "image",
  classes = "",
}: {
  videoSrc: string;
  imgSrc?: string;
  title?: string;
  classes?: string;
}) {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement: HTMLVideoElement = video.current!;

    const handleIntersection = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  });

  return (
    <video
      loop={true}
      muted={true}
      playsInline={true}
      title={title}
      preload="none"
      ref={video}
      className={classes}
    >
      <source src={videoSrc} type="video/mp4" />
      {imgSrc && <img src={imgSrc} alt="No video support" />}
      Your browser does not support the video tag.
    </video>
  );
}
