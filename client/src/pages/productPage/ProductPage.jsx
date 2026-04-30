import { Truck } from "lucide-react";
import Button from "../../components/ui/Button";
import ImageSlider from "./components/ImageSlider";
import ColorSelector from "./components/ColorSelector";
import { useState } from "react";


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

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState("black");

  const selectedVariant = product.variants.find((variant) => variant.color.name === selectedColor);

  return (
    <div className="flex flex-col md:max-w-[600px] lg:max-w-full mx-auto md:px-6">
      <div className="flex flex-col gap-5 lg:hidden">
        <h1 className="text-2xl font-medium leading-7.5 tracking-normal">
          {product.name} — {product.slogan} — {selectedVariant.color.label}
        </h1>
        <div className="flex flex-col gap-2">
          <p className="font-medium leading-5">${product.price}</p>
          <p className="text-xs leading-4.5">or make 4 payments of $32.25</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-[3fr_2fr] gap-6">
        <div className="py-4 lg:py-0">
          <ImageSlider images={selectedVariant?.images || []} />
        </div>

        <div className="flex flex-col gap-15 py-10">
          <div className="px-4 md:px-0 hidden lg:flex flex-col gap-6">
            <h1 className="text-[40px] font-medium leading-12 tracking-normal">
              {product.name} — {product.slogan} — {selectedVariant.color.label}
            </h1>
            <div className="flex flex-col gap-2">
              <p className="font-medium leading-5">$249</p>
              <p className="text-xs leading-4.5">
                or make 4 payments of $32.25
              </p>
            </div>
          </div>

          <ColorSelector
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            themes={product.variants}
            selectedVariant={selectedVariant}
          />

          <div className="py-10 px-6 bg-light-gray flex flex-col gap-4 md:rounded-3xl">
            <div className="flex flex-col gap-1">
              <h2 className="text-lg lg:text-xl font-medium leading-5.5 lg:leading-6">
                $249
              </h2>
              <p className="text-xs leading-4.5">
                or make 4 payments of $32.25
              </p>
            </div>

            <Button
              variant={selectedColor ? "primary" : "disabled"}
              size="lg"
              className=""
            >
              Add to cart
            </Button>

            <div className="flex gap-2 items-center px-4 py-2 font-medium text-sm">
              <Truck size={22} className="flex-none" />{" "}
              <span>
                Enter your zip code here to find out when this item arrives
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
