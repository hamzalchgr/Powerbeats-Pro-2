import { TicketPercent } from "lucide-react";
import Button from "../ui/Button";

const ProductCard = () => {
  return (
    <div className="relative flex flex-col bg-light-gray rounded-[24px] md:max-w-[360px]">
      <div className="h-full w-full overflow-hidden">
        <img
          className="h-full w-full object-cover object-center mix-blend-multiply"
          src="https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/powerbeats-pro-2/pdp/product-carousel/hyper-purple/pc-pbpro2-hyper-purple-p01-wired-badge.jpg.large.2x.jpg"
          alt="Powerbeats Pro 2"
        />
      </div>

      <div className="px-6 py-5 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h4 className="text-lg lg:text-xl font-medium leading-5.5 lg:leading-6.5">Powerbeats Pro 2</h4>
          <p className="text-sm font-medium">Built for athletes</p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center flex-wrap gap-2">
            <span className="font-medium leading-6">From $249</span>

            <span className="line-through leading-5 text-sm">$249</span>
            <span className="text-xs leading-4.5 font-medium text-green bg-green-light flex items-center gap-2 px-2 py-1 rounded-lg">
              <TicketPercent size={16} />
              Save up to $225
            </span>
          </div>
          <p className="text-xs leading-4.5">
            or $15.94/month with 36-month financing*
          </p>
        </div>

        <div>
          <Button>Buy</Button>
        </div>
      </div>

      <div className="absolute text-xs font-medium h-6.5 px-2 rounded-full bg-blue-light text-blue grid place-items-center top-6 left-6">New</div>
    </div>
  );
};

export default ProductCard;
