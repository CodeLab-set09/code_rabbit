import { BsStars } from "react-icons/bs";
import Button from "../../static/Button";
import backImg from "../../../public/hero.png";

const Heropage = () => {
  return (
    <div
      className=""

      // style={{
      //   width: "200%",
      //   height: "200vh",
      //   backgroundImage: `url(${backImg})`,
      //   backgroundRepeat: "no-repeat",
      //   objectFit: "contain",
      // }}
    >
      <img
        className="w-full h-[600px] object-cover absolute"
        src={backImg}
        alt=""
      />

      <div className="relative top-28 flex justify-center gap-4 flex-col items-center">
        <p className="text-[34px] text-[#3c1818] font-bold">
          Stay Worry-Free with camp buddy
        </p>
        <p className="text-[12px] font-medium text-[#3c1818]">
          Enjoy summer with monitoring the kids from the comfort of your home.
        </p>
        <Button
          style={
            "bg-[#3c1818] px-3 py-2 text-center rounded-full text-white font-normal"
          }
          text={"Get Started"}
        />
      </div>
    </div>
  );
};

export default Heropage;
