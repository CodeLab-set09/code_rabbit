import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <div className="hidden rx:flex">
        <div className="flex items-center justify-center w-full">
          <div className="border rounded-md m-2 p-2 w-[1000px] h-[900px] flex items-center ">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="flex  rx:hidden">
        <p>Please use your Laptop</p>
      </div>
    </div>
  );
};

export default UserLayout;
