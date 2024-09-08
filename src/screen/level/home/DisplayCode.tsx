import { motion } from "framer-motion";
import { FC } from "react";
import { useSelector } from "react-redux";
import { MainCursor } from "../../../static/MainCursor";

const Ball: FC = () => {
  const roll = useSelector((state: any) => state.playRotate);

  //   const timing = useSelector((state: any) => state.timing);
  const timing = 6;
  const statePlay = useSelector((state: any) => state.statePlay);

  const animate: any = {
    hidden: { x: 0, y: 0, rotate: 0 },
    visible: {
      y: statePlay,
      rotate: roll,

      transition: {
        duration: Math.round(timing),
        ease: "easeInOut",
        repeat: 0,
      },
    },
  };

  return (
    <motion.div
      variants={animate}
      initial="hidden"
      animate="visible"
      className=" w-10 h-10 bg-orange-500 rounded-full"
    >
      <div className="w-2 h-2 bg-white rounded-full absolute left-1 top-[40%]" />
    </motion.div>
  );
};

const DisplayCode = () => {
  return (
    <div className="">
      <MainCursor title="i am 80 steps away from you!">
        <div className="absolute w-4 h-4 bg-black rounded-full top-[24%] right-[5%] " />
      </MainCursor>

      <div className="absolute w-4 h-[600px] bg-black rounded-sm top-[4%] right-[20%] " />

      <div className="absolute bottom-[2%] right-[3%] ">
        <Ball />
      </div>
    </div>
  );
};

export default DisplayCode;
