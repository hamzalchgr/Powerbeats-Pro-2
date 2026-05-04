import { CirclePlay, Rotate3D } from "lucide-react";


const quote = {
  text: "Powerbeats Pro 2 are made to keep up with your toughest workouts.",
  author: "Tech Review"
};

const Features = ({product}) => {
  return (
    <section className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-24 px-4 lg:px-20 md:px-0">

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-5">
        <h2 className="heading-2">"{quote.text}"</h2>
        <p className="text-xl font-medium">— {quote.author}</p>
      </div>

      <div className="text-blue flex gap-4">
        <button className="font-medium flex gap-2 items-center hover:underline underline-offset-2">
          <CirclePlay />
          Meet the earbuds
        </button>
        <button className="font-medium flex gap-2 items-center hover:underline underline-offset-2">
          <Rotate3D />
          See it in 3D
        </button>
      </div>
      </div>

      <ul className="flex flex-col gap-6 font-medium">
        {
          product.features.map((feature) => (
            <li className="flex items-center gap-3">
              <span>{feature.icon}</span>
              <span>{feature.label}</span>
            </li>
          ))
        }
      </ul>
      
    </section>
  )
}

export default Features