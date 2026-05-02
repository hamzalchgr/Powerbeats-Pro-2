import { Minus, Plus, Truck } from "lucide-react";
import Button from "../../../components/ui/Button";
// import { formatPrice } from "../../utils/formatPrice";



const CartItem = () => {
  return (
    <>
      
      <div className="flex gap-10 bg-white p-4 rounded-2xl">
        <div className="img-container h-20 w-20 rounded-3xl flex-none">
          <img src="https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/powerbeats-pro-2/pdp/product-carousel/hyper-purple/pc-pbpro2-hyper-purple-p01-wired-badge.jpg.large.2x.jpg" alt="" />
        </div>

        <div className="flex flex-col gap-7 w-full">
          <h3 className="font-medium text-lg md:text-xl">Powerbeats Pro 2</h3>

          <div className="flex flex-col items-end gap-7">
            <div className="flex items-center justify-between gap-2 w-full">
            <div className="flex border rounded-full">
              <button className="h-10 w-10 grid place-items-center rounded-full hover:bg-off-white">
                <Minus size={20} />
              </button>

              <div className="h-10 w-6 font-medium grid place-items-center">
                1
              </div>

              <button className="h-10 w-10 grid place-items-center rounded-full hover:bg-off-white">
                <Plus size={20} />
              </button>
            </div>
            <h3 className="font-semibold">$200</h3>
          </div>

          <Button variant="secondary" size="md" className="w-fit">Remove</Button>

          <div className="px-4 py-2 bg-light-gray rounded-lg flex gap-2 font-medium text-sm">
            <Truck />
            <span>Enter your <button className="underline text-blue">zip</button> code here to find out when this item arrives</span>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
