const Input = ({ type, placeholder }) => {
  return (
    <>
      <input
        className="px-4 rounded-lg bg-white ring ring-off-white text-dark h-12 hover:ring-dark focus:ring-[1.5px] focus:ring-dark tracking-tight text-base font-medium cursor-text transition"
        id={type}
        type={type}
        placeholder={placeholder}
        aria-label={`${type} input field`}
        required
      />
    </>
  );
};

export default Input;
