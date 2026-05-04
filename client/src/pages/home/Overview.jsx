import Hero from "./sections/Hero";
import Features from "./sections/Features";

import { AudioWaveform, BatteryCharging, Bolt, Droplet, HeartPulse } from "lucide-react"

const product = {
  id: "",
  name: "Powerbeats Pro 2",
  price: "249",
  slogan: "Built for athletes",

  features: [
  {
    icon: <AudioWaveform size={28} />,
    label: "Active Noise Cancelling and Transparency Mode3"
  }, {
    icon: <HeartPulse size={28} />,
    label: "Heart Rate Monitoring2"
  }, {
    icon: <Droplet size={28} />,
    label: "Sweat and Water Resistance5"
  }, {
    icon: <BatteryCharging size={28} />,
    label: "Up to 45 Hours of Battery Life4"
  }, {
    icon: <Bolt size={28} />,
    label: "On-Device Controls with Volume Rockers"
  }
],

  variants: [
    {
      id: "color-black",
      color: {
        name: "black",
        label: "Black",
        code: "#0D0D0D",
      },

      images: [
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX723?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=QWZBLzc3NVhRYmpqTWh3WEU0STNPQWtuVHYzMERCZURia3c5SzJFOTlPaTY2U2V0cFlidDNjaDV1MFlycTJXbnhBUFRTdlI5VGJDVCtMejFJd09mS3c",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX723_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=SWo5TVZwZTFYcW83UGQzNGdNU0xIbFZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUVp1N2NEMFhqRCtpeFFJSUMwd1NQVnc",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX723_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=WUR1UE1HYXNSTzRldDNPMjV0QncvMVZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUTFEZFYrSTZ0VDR1OEVwU2M2d2R4d1E",
        "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/powerbeats-pro-2/pdp/product-carousel/jet-black/pc-pbpro2-jet-black-p01-wired-badge.jpg.large.2x.jpg",
      ],
    },
    {
      id: "color-warm-gray",
      color: {
        name: "warm-gray",
        label: "Warm Gray",
        code: "#B2ACA5",
      },

      images: [
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX733?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=SWJxNmkxVHdjOVcxRFJyTFpvNTN2d2tuVHYzMERCZURia3c5SzJFOTlPaTY2U2V0cFlidDNjaDV1MFlycTJXbmFxbm9hcWEwQ2RBZnRVejRUT3dkTEE",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX733_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=V2o1WXQwSzkxaHRnQndHRkFucjFoMVZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUTJsdWtRMkhqVjJzbTlYcytBUDZRMWc",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX733_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=Yis4Z1MwSGRZV1U0MXZuOUZyNkVobFZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUWY1YnVwUGNZb2FETFRkN0FnaWZyN3c",
        "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/powerbeats-pro-2/pdp/product-carousel/quick-sand/pc-pbpro2-quick-sand-p01-wired-badge.jpg.large.2x.jpg",
      ],
    },
    {
      id: "color-lavender-blue",
      color: {
        name: "lavender-blue",
        label: "Lavender Blue",
        code: "#B5BBE8",
      },

      images: [
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX753?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=UGJHRmlBVno1ZEwwejVpQXpxZ1E1d2tuVHYzMERCZURia3c5SzJFOTlPaTY2U2V0cFlidDNjaDV1MFlycTJXblRNd2g2R3pCZ01BQ2doUkFNZ0JPK3c",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX753_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=Sm1yRkNVZUVZSTZHUHhWTFpyeGYwVlZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUXlXc2ZPKzFqbDFFMGhDT1hORm5WL3c",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX753_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=cy8za3N0VkF1Vk1KSEZRa0xhc094VlZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUTU2L0RIL0ZBQ1ZnUTYycVY0OGtCZ1E",
        "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/powerbeats-pro-2/pdp/product-carousel/hyper-purple/pc-pbpro2-hyper-purple-p01-wired-badge.jpg.large.2x.jpg",
      ],
    },
    {
      id: "color-soft-orange",
      color: {
        name: "soft-orange",
        label: "Soft Orange",
        code: "#FACB94",
      },

      images: [
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX743?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=UE1XSUhtSzNGd1ptdDA2MFIxQUdPZ2tuVHYzMERCZURia3c5SzJFOTlPaTY2U2V0cFlidDNjaDV1MFlycTJXblF3SE1pMXRIVDNEcHR3dkxDTzY4QlE",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX743_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=cGwrRlpGbHA1WUY4K0pmZGtqUlpaMVZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUTdMWm5EMGU0bllJcWx1MDNjeE4vT0E",
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX743_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=Zk5hdTdoVmtCd1JVVTN2Z3lYek1WRlZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUUVzb0xTY1ZwWnloaHFJWDlSa09MSWc",
        "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/powerbeats-pro-2/pdp/product-carousel/electric-orange/pc-pbpro2-electric-orange-p01-wired-badge.jpg.large.2x.jpg",
      ],
    },
  ],
};


const Overview = () => {

  return (
    <div className="md:max-w-[552px] lg:max-w-[1440px] mx-auto md:px-6 flex flex-col gap-15 lg:gap-[120px]">
      <Hero product={product} />
      <Features product={product} />
    </div>
  );
};

export default Overview;
