import { Search, ShoppingBag, User } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

const BRANDS = [
  {
    name: "apple",
    img: "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-logo-icons-31.png",
    path: "/apple",
  },
  {
    name: "beats",
    img: "https://www.freepnglogos.com/uploads/beats-png-logo/ravi-vora-beats-png-logo-19.png",
    path: "/beats",
  },
  {
    name: "nike",
    img: "https://www.freepnglogos.com/uploads/nike-logo/nike-logo-fashion-and-clothing-png-images-11.png",
    path: "/nike",
  },
];

const Header = () => {
  return (
    <>
      <header className="bg-white">
        <nav className="flex justify-between items-center max-w-[1440px] px-4 md:px-4 mx-auto">
          <ul className="flex gap-2">
            {BRANDS.map(({ name, img }) => (
              <li key={name}>
                <img className="h-5" src={img} alt={name} />
              </li>
            ))}
          </ul>

          <ul className="flex gap-1">
            <li>
              <button
                type="button"
                aria-label="search product"
                className="rounded-full h-10 w-10 grid place-items-center hover:bg-light-gray transition"
              >
                <Search size={20} />
              </button>
            </li>

            <li>
              <Link className="rounded-full h-10 w-10 grid place-items-center hover:bg-light-gray transition text-dark">
                <ShoppingBag size={20} />
              </Link>
            </li>

            <li>
              <Link className="rounded-full h-10 w-10 grid place-items-center hover:bg-light-gray transition text-dark">
                <User size={20} />
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Header;
