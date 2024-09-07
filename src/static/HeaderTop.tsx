import { MdMenu } from "react-icons/md";
import { BsPinMapFill } from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className="h-[60px] w-full bg-blue-100 flex items-center justify-center  ">
      <div className="w-[96%] flex h-full justify-between items-center">
        <div className="flex items-center gap-2">
          <main className="text-[18px] font-semibold">CodeRabbit</main>
          <div>
            Coding Adventure: Challenge <strong>#1</strong>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <div>
            <BsPinMapFill size={30} />
          </div>
          <div className="h-8 w-8 rounded-full bg-red-300" />
          <div>
            <MdMenu size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
