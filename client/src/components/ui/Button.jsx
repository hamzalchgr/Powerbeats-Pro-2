import { clsx } from 'clsx';

const Button = ({ variant, size, className, children, ...props }) => {
  const base = "font-medium rounded-full flex items-center justify-center cursor-pointer tracking-tight";

  const variants = {
    primary: "bg-blue text-white ",
    secondary: "",
    outline: "ring ring-[1.5px] bg-white ring-dark text-dark hover:bg-off-white",
    ghost: "bg-white text-dark hover:bg-off-white",
    dark: "",
  };

  const sizes = {
    sm: "min-w-8 text-sm leading-5 px-3.5 py-1.5",
    md: "min-w-10 text-sm leading-5 px-5 py-2.5",
    lg: "min-w-13 text-base leading-5 px-6 py-4",
  };
  return (
    <button
      type="button"
      className={clsx(base, className, variants[variant], sizes[size])}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button