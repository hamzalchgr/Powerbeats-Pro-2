const sizes = {
  sm: "w-4 h-4 border-2",
  md: "w-8 h-8 border-[3px]",
  lg: "w-14 h-14 border-4",
};


const Spinner = ({
  size = "md",
  label = "Loading...",
  className = "",
}) => {
  return (
    <span
      role="status"
      aria-label={label}
      className={`inline-block rounded-full animate-spin ${sizes[size]} border-dark border-t-transparent ${className}`}
      style={{ animationDuration: "0.65s" }}
    />
  );
}

export default Spinner;