import { ArrowLeft, ArrowRight } from "lucide-react";
import clsx from "clsx";
import useSlide from "../../productPage/hooks/useSlide";
import Button from "../../../components/ui/Button";
import Colors from "../components/Colors";
import { useMemo, useState } from "react";


const Hero = ({ product }) => {
  const [color, setColor] = useState("black");
  const variant = useMemo(
    () =>
      product.variants.find((v) => v.color.name === color) ??
      product.variants[0],
      [color, product.variants]
  );

  const imageList = variant?.images;

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
  } = useSlide(imageList);

  return (
    <div className="flex flex-col-reverse lg:grid gap-5 grid-cols-[2fr_3fr] lg:h-[600px] lg:bg-light-gray rounded-4xl lg:pl-20">
      <div className="px-4 md:px-0 flex flex-col items-center lg:flex-col-reverse lg:items-start lg:justify-around gap-3">
        <div className="flex justify-center lg:items-start">
          <Colors
            color={color}
            setColor={setColor}
            variant={variant}
            themes={product.variants}
          />
        </div>

        <div className="flex flex-col items-center lg:items-start gap-4">
          <h1 className="heading-1 text-center lg:text-start">
            Unbelievable sound. Unreal value.
          </h1>

          <div className="flex flex-col items-center lg:items-start gap-6">
            <div className="flex flex-col items-center lg:items-start gap-2">
              <h4 className="font-medium text-xl">${product.price}</h4>
              <p className="font-medium text-xs">
                or make 4 payments of ${product.price / 4}
              </p>
            </div>

            <Button size="sm" className="w-fit">
              Buy
            </Button>
          </div>
        </div>
      </div>

      <div
        ref={slideRef}
        className="overflow-hidden relative md:rounded-4xl"
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      >
        <ul className="flex h-full">
          {imgs.map((img, indxe) => (
            <li
              key={indxe}
              className="img-container aspect-square w-full h-full flex-none bg-light-gray"
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

        <div className="absolute bottom-4 right-0 px-4 w-full lg:w-fit">
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
              <span>{imageList?.length}</span>
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
              {imageList?.map((_, index) => (
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
    </div>
  );
};

export default Hero;
