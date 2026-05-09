import clsx from "clsx";
import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const VideoWrapper = ({ DATA, media, index, slideIndex, setSlideIndex }) => {
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef(null);

  const isActive = index === slideIndex;

  useEffect(() => {
    if (!videoRef.current) return;

    if (isActive) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      videoRef.current.timeline = 0;
      setPlaying(false);
    }
  }, [isActive]);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setPlaying(!playing);
  }

  return (
    <>
      <div className="h-full w-full rounded-4xl overflow-hidden">
        <video
          ref={videoRef}
          className="h-full w-full object-center object-cover"
          src={media.video}
          muted
          playsInline
          autoPlay={index === slideIndex}
          onEnded={() => setSlideIndex((prev) => (prev + 1) % DATA.length)}
        />
      </div>

      <button
        className={clsx(
          "h-12 w-12 rounded-full absolute right-10 bottom-5 bg-white",
          index === slideIndex ? "flex items-center justify-center" : "hidden",
        )}
        aria-label="play/pause video"
        onClick={togglePlay}
      >
        {playing ? <Pause /> : <Play />}
      </button>
    </>
  );
};

export default VideoWrapper;
