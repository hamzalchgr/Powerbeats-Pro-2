import { ArrowLeft, ArrowRight } from "lucide-react";
import clsx from "clsx";
import useSlide from "../hooks/useSlide";



const ImageSlider = ({images}) => {
  const {
    slideIndex,
    animate,
    realIndex,
    slideRef,
    imgs,
    nextSlide,
    prevSlide,
    handleStart,
    handleMove,
    handleEnd,
  } = useSlide(images);

  return (
    <div
      ref={slideRef}
      className="overflow-hidden relative rounded-4xl"
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
    >
      <ul className="flex">
        {imgs.map((img, indxe) => (
          <li
            key={indxe}
            className="img-container aspect-5/4 w-full flex-none bg-light-gray"
            style={{
              transform: `translateX(-${slideIndex * 100}%)`,
              transition: animate ? ".3s ease-in-out" : "none",
            }}
          >
            <img
              className="mix-blend-multiply"
              src={img}
              alt=""
              loading="lazy"
            />
          </li>
        ))}
      </ul>

      <div className="absolute bottom-4 left-4 w-full">
        <div className="hidden w-fit lg:flex items-center gap-1 bg-white p-1 rounded-full">
          <button
            className="h-8 w-8 grid place-items-center px-0 hover:bg-off-white transition rounded-full cursor-pointer"
            aria-label="previous slide"
            onClick={prevSlide}
          >
            <ArrowLeft size={20} />
          </button>
          <div className="w-12 flex items-center justify-center gap-0.75 font-medium">
            <span>{realIndex}</span>
            <span>/</span>
            <span>{images?.length}</span>
          </div>
          <button
            className="h-8 w-8 grid place-items-center px-0 hover:bg-off-white transition rounded-full cursor-pointer"
            aria-label="next slide"
            onClick={nextSlide}
          >
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="w-full flex justify-center">
          <ul className="flex gap-1 lg:hidden bg-white py-2 px-3 rounded-full">
            {images?.map((_, index) => (
              <li
                key={index}
                className={clsx(
                  "h-2 w-2 rounded-full transition",
                  index === realIndex - 1 ? "bg-dark w-6" : "bg-text-muted",
                )}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
