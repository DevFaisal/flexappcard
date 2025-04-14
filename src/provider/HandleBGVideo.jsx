import { useEffect, useState } from "react";
import BackgroundVideo from "../components/BackgroundVideo";

const HandleBGVideo = ({ children }) => {
  const TIMEOUT_DURATION = window.innerWidth <= 850 ? 1100 : 2200;
  const SPEED = window.innerWidth <= 850 ? 1.7 : 2.5;

  const [play, setPlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setPlay(false), TIMEOUT_DURATION);
    return () => clearTimeout(timer);
  }, [TIMEOUT_DURATION]);

  return play ? <BackgroundVideo speed={SPEED} /> : <>{children}</>;
};

export default HandleBGVideo;
