import { clsx } from "clsx";

const Button = ({
  variant = "primary",
  size = "md",
  className,
  disabled = false,
  children,
  ...props
}) => {
  const base =
    "font-medium rounded-full flex items-center justify-center tracking-tight";

  const variants = {
    primary: "bg-blue text-white cursor-pointer",
    secondary: "bg-light-blue text-blue cursor-pointer",
    outline:
      "ring ring-[1.5px] bg-white ring-dark text-dark hover:bg-off-white cursor-pointer",
    ghost: "bg-white text-dark hover:bg-off-white cursor-pointer",
    disabled: "bg-off-white text-text-muted cursor-not-allowed",
  };

  const sizes = {
    sm: "min-w-8 text-sm leading-5 px-3.5 py-1.5",
    md: "min-w-10 text-sm leading-5 px-5 py-2.5",
    lg: "min-w-13 text-base leading-5 px-6 py-4",
  };
  return (
    <button
      type="button"
      disabled={disabled}
      className={clsx(base, variants[disabled ? "disabled" : variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
