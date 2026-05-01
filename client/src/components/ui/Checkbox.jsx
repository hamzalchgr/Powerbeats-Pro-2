import clsx from "clsx";
import { Check } from "lucide-react";

const Checkbox = ({ checked, setChecked, children }) => {
  return (
    <label
        htmlFor="checkbox"
        className="flex items-start gap-4 text-sm font-medium text-dark cursor-pointer"
      >
        <input
          id="checkbox"
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="absolute opacity-0 w-5 h-5 cursor-pointer"
        />
        <div
          className={clsx(
            "h-5 w-5 rounded-sm flex-none grid place-items-center",
            checked ? "bg-blue" : "ring ring-border",
          )}
        >
          {checked && (
            <Check strokeWidth={3} size={14} className="text-white" />
          )}
        </div>
        <p className="flex flex-col gap-2">{children}</p>
      </label>
  )
}

export default Checkbox;