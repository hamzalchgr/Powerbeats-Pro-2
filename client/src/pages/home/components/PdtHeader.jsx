import { Link, Outlet } from "react-router-dom";
import Button from "../../../components/ui/Button";

const PdtHeader = () => {
  return (
    <>
      <div className="max-w-[1440px] flex justify-center p-4 md:px-6">
        <div className="p-2 rounded-full bg-white shadow-[0_2px_10px_0_rgba(0,0,0,0.15)] w-fit lg:w-full flex items-center justify-between sticky top-4">
          <div className="flex items-center gap-4 lg:pl-4">
            <h3 className="text-xl font-medium hidden lg:block">
              Powerbeats Pro 2
            </h3>

            <ul className="flex gap-2">
              <li>
                <Link
                  to="/"
                  className="leading-5 py-3.5 px-4 rounded-full no-underline text-base font-medium bg-blue-light"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  to="/techSpecs"
                  className="leading-5 py-3.5 px-4 rounded-full no-underline text-base font-medium bg-light-gray text-dark hover:bg-off-white"
                >
                  Tech specs
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden lg:flex items-center gap-2 ">
            <div className="flex flex-col items-end gap-1">
              <h4 className="font-medium text-sm">$129</h4>
              <p className="font-medium text-xs">
                or make 4 payments of $32.25
              </p>
            </div>

            <Button size="md">Buy</Button>
          </div>
        </div>
      </div>

      <div className="w-full bg-white shadow-[0_2px_10px_0_rgba(0,0,0,0.15)] rounded-t-2xl p-4 lg:hidden flex flex-col gap-2 fixed bottom-0">
        <h3 className="font-medium text-lg">Powerbeats Pro 2</h3>
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-1">
            <h4 className="font-medium text-sm">$129</h4>
            <p className="font-medium text-xs">or make 4 payments of $32.25</p>
          </div>

          <Button size="md">Buy</Button>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default PdtHeader;
