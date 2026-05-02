import clsx from "clsx";
import { useState } from "react";
import Button from "../../../components/ui/Button";

const PAYEMENT_METHODS = [
  {
    id: "basic",
    label: "Pay $516.00 today",
    desc: "",
  },
  {
    id: "monthly",
    label: "Pay monthly",
    desc: "$43.00/month for 12 months with 0% APR",
  },
];

const OrderSummary = () => {
  const [payementMethod, setPayementMethod] = useState("basic");

  return (
    <div className="p-4 bg-white rounded-2xl flex flex-col gap-4">
      <p className="text-lg font-medium">Order summary</p>

      <div className="text-sm flex flex-col gap-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$200</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>$0.00</span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>Calculated at checkout</span>
        </div>

        <div className="flex justify-between font-bold text-base">
          <span>Estimated total</span>
          <span>$200</span>
        </div>
      </div>

      <div className="pt-4 flex flex-col gap-4">
        <p className="font-bold">Choose how to pay</p>

        {PAYEMENT_METHODS.map((pay) => {
          const isActive = payementMethod === pay.id;

          return (
            <label
              key={pay.id}
              className="flex items-start gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name={`payment`}
                className="hidden peer"
                checked={isActive}
                onChange={() => setPayementMethod(pay.id)}
              />

              <div className="w-5 h-5 rounded-full border border-dark flex-none flex items-center justify-center border-2 peer-checked:border-blue">
                <div
                  className={clsx(
                    "w-2.5 h-2.5 rounded-full",
                    isActive ? "bg-blue" : "bg-transparent",
                  )}
                />
              </div>

              <div className="flex flex-col gap-1 ">
                <span className="font-bold leading-5">{pay.label}</span>
                {pay.desc && <span className="text-sm">{pay.desc}</span>}
              </div>
            </label>
          );
        })}
      </div>

      <Button size="lg">Sign in & Check Out</Button>
    </div>
  );
};

export default OrderSummary;
