import Hero from "./sections/Hero";
import Features from "./sections/Features";

import { Astroid, BatteryCharging, Droplet, HeartPulse, Watch } from "lucide-react"
import ProductShowcaseSection from "./sections/ProductShowcaseSection";

const product = {
  id: "",
  name: "Galaxy Watch8",
  price: "325",
  slogan: "Beyond timekeeping.",

  features: [
  {
    icon: <Watch size={28} />,
    label: "Brighter, larger domed display."
  }, {
    icon: <HeartPulse size={28} />,
    label: "Heart Rate Monitoring."
  }, {
    icon: <Droplet size={28} />,
    label: "Sweat and Water Resistance."
  }, {
    icon: <BatteryCharging size={28} />,
    label: "Up to 40 Hours of Battery Life."
  }, {
    icon: <Astroid size={28} />,
    label: "On-Device Controls with Volume Rockers."
  }
],

  variants: [
    {
      id: "color-graphite",
      color: {
        name: "graphite",
        label: "Graphite",
        code: "#383838",
      },

      images: [
        "https://images.samsung.com/is/image/samsung/p6pim/n_africa/f2507/gallery/n-africa-galaxy-watch8-l320-sm-l320ndaamwd-547651444?$1164_776_PNG$",
        "https://images.samsung.com/is/image/samsung/p6pim/n_africa/f2507/gallery/n-africa-galaxy-watch8-l320-sm-l320ndaamwd-547651433?$Q90_1368_1094_F_JPG$",
        "https://images.samsung.com/is/image/samsung/p6pim/n_africa/f2507/gallery/n-africa-galaxy-watch8-l320-sm-l320ndaamwd-547651434?$Q90_1368_1094_F_JPG$",
        "https://images.samsung.com/is/image/samsung/p6pim/n_africa/f2507/gallery/n-africa-galaxy-watch8-l320-sm-l320ndaamwd-547651435?$Q90_1368_1094_F_JPG$",
        "https://images.samsung.com/is/image/samsung/p6pim/n_africa/f2507/gallery/n-africa-galaxy-watch8-l320-sm-l320ndaamwd-547651436?$Q90_1368_1094_F_JPG$",
        "https://images.samsung.com/is/image/samsung/p6pim/n_africa/f2507/gallery/n-africa-galaxy-watch8-l320-sm-l320ndaamwd-547651437?$Q90_1368_1094_F_JPG$"
      ],
    },
    {
      id: "color-silver",
      color: {
        name: "silver",
        label: "Silver",
        code: "#C0C0C0",
      },

      images: [
        "https://images.samsung.com/is/image/samsung/p6pim/n_africa/f2507/gallery/n-africa-galaxy-watch8-l320-sm-l320nzsamwd-547651460?$Q90_1368_1094_F_JPG$",
        "https://images.samsung.com/is/image/samsung/p6pim/n_africa/f2507/gallery/n-africa-galaxy-watch8-l320-sm-l320nzsamwd-547651449?$Q90_2052_1641_JPG$",
        "https://images.samsung.com/is/image/samsung/p6pim/n_africa/f2507/gallery/n-africa-galaxy-watch8-l320-sm-l320nzsamwd-547651450?$Q90_1368_1094_F_JPG$",
        "https://images.samsung.com/is/image/samsung/p6pim/n_africa/f2507/gallery/n-africa-galaxy-watch8-l320-sm-l320nzsamwd-547651451?$Q90_2052_1641_JPG$",
        "https://images.samsung.com/is/image/samsung/p6pim/n_africa/f2507/gallery/n-africa-galaxy-watch8-l320-sm-l320nzsamwd-547651452?$Q90_1368_1094_F_JPG$",
        "https://images.samsung.com/is/image/samsung/p6pim/n_africa/f2507/gallery/n-africa-galaxy-watch8-l320-sm-l320nzsamwd-547651453?$Q90_2052_1641_JPG$"
      ],
    },
  ],
};


const Overview = () => {

  return (
    <div className="md:max-w-[552px] lg:max-w-[1440px] mx-auto flex flex-col gap-15 lg:gap-[120px]">
      <Hero product={product} />
      <Features product={product} />

      <ProductShowcaseSection />
    </div>
  );
};

export default Overview;
