import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const navs = [
    { name: "Features", url: "/features" },
    { name: "Features", url: "/features" },
    { name: "Features", url: "/features" },
  ];
  return (
    <div className="p-2 pt-5 flex justify-center items-center relative z-10">
      <div className="bg-white w-[700px] h-[60px] rounded-full flex justify-between items-center p-5 ">
        <Link to={"/landingpage"}>LOGO</Link>
        <div className="flex gap-5 text-neutral-500 text-[13px]">
          {navs.map((el) => (
            <Link to={el.url}>{el.name}</Link>
          ))}
        </div>
        <div>
          <Button
            text={"Get Started"}
            style={
              "bg-[#3c1818] px-3 py-2 text-center rounded-full text-white font-normal"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
