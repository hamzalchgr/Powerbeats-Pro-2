const ColorSelector = ({ themes, selectedColor, setSelectedColor, selectedVariant }) => {

  return (
    <div className="px-4 md:px-0 flex flex-col gap-5">
            <h2 className="text-lg lg:text-xl font-medium leading-5.5 lg:leading-6">
              {selectedColor 
              ? (`Color - ${selectedVariant.color.label}`) 
              : ("Choose your color")}
            </h2>

            <ul className="flex gap-2">
              {themes.map((variant) => (
                <li className="" key={variant.color.name}>
                  <label className="cursor-pointer">
                    <input
                      className="hidden peer"
                      type="radio"
                      name="color"
                      aria-label={variant.color.name}
                      checked={selectedColor === variant.color.name}
                      onChange={() => setSelectedColor(variant.color.name)}
                    />
                    <span
                      className="block h-7 w-7 rounded-full border border-gray-300 transition peer-checked:ring-2 ring-black"
                      style={{ backgroundColor: variant.color.code }}
                    />
                  </label>
                </li>
              ))}
            </ul>
          </div>
  )
}

export default ColorSelector