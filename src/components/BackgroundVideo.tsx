import React, { useEffect, useRef } from "react";
import videoWebm from "../assets/videos/background.webm";

interface BackgroundVideoProps {
  handleEndVideo?: () => void;
  speed?: number;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ handleEndVideo = () => {}, speed = 2.5 }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoError = useRef<boolean>(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  }, [speed]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {!videoError.current ? (
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          onEnded={handleEndVideo}
          onError={() => (videoError.current = true)}
          autoPlay
          loop={false}
          muted
          playsInline
        >
          <source src={videoWebm} type="video/webm" />
        </video>
      ) : (
        <>
          <h1>Loading...</h1>
        </>
      )}
    </div>
  );
};

export default BackgroundVideo;
