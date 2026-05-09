import { useState } from "react";
import { clsx } from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
import VideoWrapper from "../components/VideoWrapper";

const DATA = [
  {
    id: "highlight-1",
    heading: "Innovation meets our iconic cushioning design",
    desc: "",
    media: {
      video:
        "https://images.samsung.com/n_africa/galaxy-watch8/feature/galaxy-watch8-innovation-design.webm",
      thumb:
        "https://images.samsung.com/n_africa/galaxy-watch8/feature/galaxy-watch8-innovation-design-start-tb.jpg?imbypass=true",
    },
  },
  {
    id: "highlight-2",
    heading: "Adopt a healthy bedtime routine",
    desc: "",
    media: {
      video:
        "https://images.samsung.com/n_africa/galaxy-watch8/feature/galaxy-watch8-innovation-sleep.webm",
      thumb: "",
    },
  },
  {
    id: "highlight-3",
    heading: "Run at your own pace with a personal trainer",
    desc: "",
    media: {
      video:
        "https://images.samsung.com/n_africa/galaxy-watch8/feature/galaxy-watch8-innovation-running-coach.mp4",
      thumb: "",
    },
  },
  {
    id: "highlight-4",
    heading: "Always bright. Even in direct sunlight",
    desc: "",
    media: {
      video:
        "https://images.samsung.com/n_africa/galaxy-watch8/feature/galaxy-watch8-innovation-3000nits.webm",
      thumb:
        "https://images.samsung.com/n_africa/galaxy-watch8/feature/galaxy-watch8-innovation-3000nits-start-tb.jpg?imbypass=true",
    },
  },
];

const Highlights = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <section className="text-center flex flex-col items-center gap-12 lg:py-10">
      <h2 className="heading-2 text-center max-w-[650px]">
        Discover next-generation innovation with the Galaxy Watch8
      </h2>
      <div className="relative max-w-screen px-4 md:px-6 h-[520px] md:h-[560px] lg:h-[600px] overflow-hidden">
        <ul
          className="flex h-full gap-5 md:gap-10"
          style={{
            transform: `translateX(-${slideIndex * 90}%)`,
            transition: ".5s ease-in-out",
          }}
        >
          {DATA.map(({ id, media }, index) => (
            <li key={id} className="relative flex-none w-[90%] cursor-pointer" onClick={() => setSlideIndex(index)}>
              <VideoWrapper
                DATA={DATA}
                index={index}
                media={media}
                slideIndex={slideIndex}
                setSlideIndex={setSlideIndex}
              />
            </li>
          ))}
        </ul>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-5">
          <button
            className="h-12 w-12 rounded-full right-10 bottom-5 bg-white shadow-lg grid place-items-center"
            onClick={() => setSlideIndex((prev) => (DATA.length + prev - 1) % DATA.length)}
          >
            <ArrowLeft />
          </button>

          <ul className="flex items-center gap-2 h-12 bg-white shadow-lg rounded-full px-4">
            {DATA.map((_, index) => (
              <li
                key={index}
                className={clsx(
                  "h-2 rounded-full transition-all duration-500",
                  index === slideIndex ? "bg-dark w-10" : "w-2 bg-text-muted",
                )}
              />
            ))}
          </ul>

          <button
            className="h-12 w-12 rounded-full right-10 bottom-5 bg-white shadow-lg grid place-items-center"
            onClick={() => setSlideIndex((prev) => (prev + 1) % DATA.length)}
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="heading-3">{DATA[slideIndex].heading}</h3>
        <p></p>
      </div>
    </section>
  );
};

export default Highlights;
