import { ArrowLeft, ArrowRight } from "lucide-react";
import clsx from "clsx";
import useSlide from "../../productPage/hooks/useSlide";
import Button from "../../../components/ui/Button";
import Colors from "../components/Colors";
import { useMemo, useState } from "react";

const product = {
  id: "",
  name: "Powerbeats Pro 2",
  price: "249",
  slogan: "Built for athletes",

  variants: [
    {
      id: "color-black",
      color: {
        name: "black",
        label: "Black",
        code: "#0D0D0D",
      },

      images: [
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX723?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=QWZBLzc3NVhRYmpqTWh3WEU0STNPQWtuVHYzMERCZURia3c5SzJFOTlPaTY2U2V0cFlidDNjaDV1MFlycTJXbnhBUFRTdlI5VGJDVCtMejFJd09mS3c",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX723_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=K3RaWmZKM2FRVTZETTE5RlQyeUNubFZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUURnODVlN2ZXMG5qd2tQOTB4SjhMcVE",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX723_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=SWo5TVZwZTFYcW83UGQzNGdNU0xIbFZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUVp1N2NEMFhqRCtpeFFJSUMwd1NQVnc",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX723_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=WUR1UE1HYXNSTzRldDNPMjV0QncvMVZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUTFEZFYrSTZ0VDR1OEVwU2M2d2R4d1E",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX723_AV4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=ancxVGxXS1pzeVg3SDh3NFlnazk0RlZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUXhFUUZ4TFgrK09WM2d0RUpwUi9iK2c",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX723_AV5?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=S2NoMDBqb2NmU0NEMGkrSkxJMGdrbFZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUTZrcG9PR3cxNmlKNUpSSkRHTHYzVVE",
      ],
    },
    {
      id: "color-warm-gray",
      color: {
        name: "warm-gray",
        label: "Warm Gray",
        code: "#B2ACA5",
      },

      images: [
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX733?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=SWJxNmkxVHdjOVcxRFJyTFpvNTN2d2tuVHYzMERCZURia3c5SzJFOTlPaTY2U2V0cFlidDNjaDV1MFlycTJXbmFxbm9hcWEwQ2RBZnRVejRUT3dkTEE",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX733_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=VE50RmI0RWZ5NzBRLzgwQXprWCtzRlZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUXlDSkZ2VzRZd3lrb1QwM0RjR00zMnc",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX733_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=V2o1WXQwSzkxaHRnQndHRkFucjFoMVZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUTJsdWtRMkhqVjJzbTlYcytBUDZRMWc",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX733_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=Yis4Z1MwSGRZV1U0MXZuOUZyNkVobFZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUWY1YnVwUGNZb2FETFRkN0FnaWZyN3c",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX733_AV4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=eWRlTXM1NklVY09VUURKNXhIczdwbFZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUUttSGdSNjdXaldKZG9sNzZsUTgvRmc",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX723_AV5?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=S2NoMDBqb2NmU0NEMGkrSkxJMGdrbFZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUTZrcG9PR3cxNmlKNUpSSkRHTHYzVVE",
      ],
    },
    {
      id: "color-lavender-blue",
      color: {
        name: "lavender-blue",
        label: "Lavender Blue",
        code: "#B5BBE8",
      },

      images: [
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX753?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=UGJHRmlBVno1ZEwwejVpQXpxZ1E1d2tuVHYzMERCZURia3c5SzJFOTlPaTY2U2V0cFlidDNjaDV1MFlycTJXblRNd2g2R3pCZ01BQ2doUkFNZ0JPK3c",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX753_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=bkZmU1pIbEI4WUk0RXB1bk0zYnNLMVZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUTBRSy9JVzdiUUMxQ094bGtXODBMd1E",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX753_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=Sm1yRkNVZUVZSTZHUHhWTFpyeGYwVlZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUXlXc2ZPKzFqbDFFMGhDT1hORm5WL3c",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX753_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=cy8za3N0VkF1Vk1KSEZRa0xhc094VlZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUTU2L0RIL0ZBQ1ZnUTYycVY0OGtCZ1E",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX753_AV4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=bHNtUmpKYmNva1NsMEZidmowOUMwbFZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUW5jMG94MjhLY2FJZ0c1SkNyT3lzWmc",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX753_AV5?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=UnZqNm5oMnU5ZnJIRnZHbm1GT1NNMVZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUWEzaXRHTHQrbS9LZ0VnajRXclNBSnc",
      ],
    },
    {
      id: "color-soft-orange",
      color: {
        name: "soft-orange",
        label: "Soft Orange",
        code: "#FACB94",
      },

      images: [
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX743?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=UE1XSUhtSzNGd1ptdDA2MFIxQUdPZ2tuVHYzMERCZURia3c5SzJFOTlPaTY2U2V0cFlidDNjaDV1MFlycTJXblF3SE1pMXRIVDNEcHR3dkxDTzY4QlE",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX743_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=R1JObDJqMS9rVjhGTVJNbG54aXFYVlZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUVhUOFAwbHZwWDBCRjRDdStEK2VET1E",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX743_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=cGwrRlpGbHA1WUY4K0pmZGtqUlpaMVZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUTdMWm5EMGU0bllJcWx1MDNjeE4vT0E",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX743_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=Zk5hdTdoVmtCd1JVVTN2Z3lYek1WRlZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUUVzb0xTY1ZwWnloaHFJWDlSa09MSWc",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX743_AV4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=UlE0QnhuS1pRTk5FRlBuSEwvMVpNbFZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUVhHTFgxbmVUeHdoVWpXWmk5T2xBWlE",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX743_AV5?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=THJNU3E3aHE0S3FTQUJLUjdNNXo1bFZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUVRDUyt6V2UzMFBqbTF3OFpZRU1DSUE",
      ],
    },
  ],
};

const Hero = () => {
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
              <h4 className="font-medium text-xl">$${product.price}</h4>
              <p className="font-medium text-xs">
                or make 4 payments of $32.25
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
