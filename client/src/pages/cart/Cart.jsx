import { Home } from "lucide-react";
import CartItem from "./components/CartItem";
import OrderSummary from "./components/OrderSummary";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="h-screen w-screen bg bg-light-gray flex flex-col items-center">

      <div className="flex gap-2 py-7">
      <Link to="/" className="text-base font-medium">
        <Home size={20} />
        Continue shopping
      </Link>
      </div>

      <div className=" max-w-[550px] lg:max-w-[920px] px-6 mx-auto grid lg:grid-cols-[2fr_1fr] gap-6">
        <ul>
          <li>
            <CartItem />
          </li>
        </ul>

        <OrderSummary />
      </div>
    </div>
  );
};

export default Cart;
