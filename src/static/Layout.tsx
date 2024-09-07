import { Outlet } from "react-router-dom";
import HeaderTop from "./HeaderTop";

const LayOut = () => {
  return (
    <div className="bg-slate-100">
      <HeaderTop />

      <div className="flex justify-center">
        <div className="hidden crx:block m-2 p-2 border rounded-md min-h-[60vh] w-[1450px]">
          <Outlet />
        </div>
        <div className="flex crx:hidden h-[calc(100vh-60px)] justify-center items-center">
          Please use a <strong className="ml-2 uppercase">laptop</strong>
        </div>
      </div>
    </div>
  );
};

export default LayOut;
