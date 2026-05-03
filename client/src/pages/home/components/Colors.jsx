const Colors = ({
  themes,
  color,
  setColor,
  variant,
}) => {
  return (
    <div className="px-4 md:px-0 flex flex-col-reverse items-center lg:items-start gap-5">
      <h2 className="text-sm font-medium leading-5.5 lg:leading-6">
        { `Color: ${variant.color.label}`}
      </h2>

      <ul className="flex gap-5">
        {themes.map((variant) => (
          <li className="" key={variant.color.name}>
            <label className="cursor-pointer">
              <input
                className="hidden peer"
                type="radio"
                name="color"
                aria-label={variant.color.name}
                checked={color === variant.color.name}
                onChange={() => setColor(variant.color.name)}
              />
              <span
                className="block h-7 w-7 rounded-full border border-gray-300 transition peer-checked:ring-2 ring-blue"
                style={{ backgroundColor: variant.color.code }}
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Colors;
