import ProductCard from "../../../components/product/ProductCard";

const PDTs = [
  {
    id: "001",
    name: "Galaxy S25 Ultra",
    tagline: "Simple.Impactful",
    price: "1500",
    img: "https://images.samsung.com/n_africa/galaxy-watch8/feature/galaxy-watch8-ecosystem-s25-ultra.jpg?imbypass=true",

  },
  {
    id: "002",
    name: "Galaxy Buds3 Pro",
    tagline: "Simple.Impactful",
    price: "260",
    img: "https://images.samsung.com/n_africa/galaxy-watch8/feature/galaxy-watch8-ecosystem-buds3-pro.jpg?imbypass=true",

  },
]

const RelatedPdt = () => {
  return (
    <section className="flex flex-col items-center gap-8 md:max-w-[552px] lg:max-w-[1440px] mx-auto px-4 md:px-6">
      <div className="flex flex-col gap-2 max-w-2/3">
        <h2 className="heading-2 text-center">Better connected, better together</h2>
      <p className="text-center">From calls to content playback, your Galaxy smartphone syncs all your devices for one galaxy experience connected, fluid and intelligent.</p>
      </div>

      <ul className="flex gap-4 justify-center">
{PDTs.map((pdt) => (
  <li key={pdt.id}>
    <ProductCard pdt={pdt} />
  </li>
))}
      </ul>
    </section>
  )
}

export default RelatedPdt