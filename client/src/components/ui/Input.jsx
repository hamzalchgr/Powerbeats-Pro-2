const Input = ({ type, placeholder }) => {
  return (
    <>
      <input
        className="px-4 w-full rounded-lg bg-white ring ring-off-white text-dark h-12 hover:ring-dark focus:ring-[1.5px] focus:ring-dark tracking-tight font-medium"
        id={type}
        type={type}
        placeholder={placeholder}
        aria-label={`${type} input field`}
      />
    </>
  );
};

export default Input;
