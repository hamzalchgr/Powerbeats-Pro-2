import { ArrowLeft, ArrowRight } from "lucide-react";
import clsx from "clsx";
import useSlide from "../hooks/useSlide";

const images = [
  "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX723?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=QWZBLzc3NVhRYmpqTWh3WEU0STNPQWtuVHYzMERCZURia3c5SzJFOTlPaTY2U2V0cFlidDNjaDV1MFlycTJXbnhBUFRTdlI5VGJDVCtMejFJd09mS3c",
  "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX723_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=K3RaWmZKM2FRVTZETTE5RlQyeUNubFZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUURnODVlN2ZXMG5qd2tQOTB4SjhMcVE",
  "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX723_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=SWo5TVZwZTFYcW83UGQzNGdNU0xIbFZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUVp1N2NEMFhqRCtpeFFJSUMwd1NQVnc",
  "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX723_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=WUR1UE1HYXNSTzRldDNPMjV0QncvMVZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUTFEZFYrSTZ0VDR1OEVwU2M2d2R4d1E",
  "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX723_AV4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=ancxVGxXS1pzeVg3SDh3NFlnazk0RlZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUXhFUUZ4TFgrK09WM2d0RUpwUi9iK2c",
  "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX723_AV5?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=S2NoMDBqb2NmU0NEMGkrSkxJMGdrbFZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUTZrcG9PR3cxNmlKNUpSSkRHTHYzVVE",
];

const ImageSlider = () => {
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
            <span>{images.length}</span>
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
            {images.map((_, index) => (
              <li
                key={index}
                className={clsx(
                  "h-2 w-2 rounded-full cursor-pointer transition",
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
