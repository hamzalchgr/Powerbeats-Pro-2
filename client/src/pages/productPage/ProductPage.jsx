import { Truck } from "lucide-react";
import Button from "../../components/ui/Button";
import ImageSlider from "./components/ImageSlider";
import ColorSelector from "./components/ColorSelector";
import { useState } from "react";

const themes = [
  { name: "dark", color: "#0D0D0D" },
  { name: "warm-gray", color: "#B2ACA5" },
  { name: "lavender-blue", color: "#B5BBE8" },
  { name: "soft-orange", color: "#FACB94" },
];

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div className="flex flex-col md:max-w-[600px] lg:max-w-full mx-auto md:px-6">
      <div className="flex flex-col gap-5 lg:hidden">
        <h1 className="text-2xl font-medium leading-7.5 tracking-normal">
          Powerbeats Pro 2
        </h1>
        <div className="flex flex-col gap-2">
          <p className="font-medium leading-5">$249</p>
          <p className="text-xs leading-4.5">or make 4 payments of $32.25</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-[3fr_2fr] gap-6">
        <div className="py-4 lg:py-0">
          <ImageSlider />
        </div>

        <div className="flex flex-col gap-15 py-10">
          <div className="px-4 md:px-0 hidden lg:flex flex-col gap-6">
            <h1 className="text-[40px] font-medium leading-12 tracking-normal">
              Powerbeats Pro 2
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
            themes={themes}
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
