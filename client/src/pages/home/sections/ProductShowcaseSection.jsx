import { PauseCircle, PlayCircle } from "lucide-react";
import { useState } from "react";

const DETAILS = {
  heading: "Ultra-comfortable, sleep in training",
  media: {
    img: "https://images.samsung.com/n_africa/galaxy-watch8/feature/galaxy-watch8-unveil-end-tb.jpg?imbypass=true",
    video:
      "https://images.samsung.com/n_africa/galaxy-watch8/feature/galaxy-watch8-unveil.mp4",
  },
  desc: "The Galaxy Watch8, thinner than ever, redefines comfort and performance with a new iconic design and powerful 3nm processor. Enjoy smarter health tracking, personalized coaching, and Galaxy AI—keeping you one step ahead every day.",
};

const ProductShowcaseSection = () => {
  const [ended, setEnded] = useState(false);

  return (
    <section className="text-center flex flex-col items-center gap-12 lg:py-10">
      <div className="flex flex-col items-center gap-5 max-w-[600px] px-4 md:px-0">
        <h2 className="heading-2 max-w-[270px] lg:max-w-[400px]">{DETAILS.heading}</h2>
        <p className="font-medium text-text-muted">{DETAILS.desc}</p>
      </div>

      <div className="relative h-screen w-[100vw] overflow-hidden">
        {ended ? (
          <img
            className="h-full w-full object-center object-cover"
            src={DETAILS.media.img}
            loading="lazy"
          />
        ) : (
          <video
            className="h-full w-full object-center object-cover"
            src={DETAILS.media.video}
            autoPlay
            muted
            onEnded={() => setEnded(true)}
          />
        )}

        <div className="absolute bottom-5 w-full flex justify-center">
          <button
          className="text-off-white"
          aria-label="play/pause video"
          onClick={() => setEnded(!ended)}
        >
          {ended ? <PlayCircle size={32} /> : <PauseCircle size={32} />}
        </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;
