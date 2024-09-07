import { motion } from "framer-motion";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { MainCursor } from "../../../static/MainCursor";

let timer = 6;
const xInput: number = 20;
const yInput: number = 80;

let xLength: number = (xInput / 20) * 56;
let yLength: number = (yInput / 100) * 85;

const moveX = Array.from({ length: xLength }, (_, i: number) => {
  return -(i * 10);
});

const moveY = Array.from({ length: yLength }, (_, i: number) => {
  return -(i * 10);
});

const rotateY = Array.from({ length: 5 }, () => {
  return 0;
});

const rotateYii = Array.from({ length: 7 }, () => {
  return 90;
});

const moveYii = Array.from({ length: 7 }, () => {
  return 0;
});

const rotateYi = Array.from({ length: yLength }, () => {
  return 90;
});

const Ball: FC = () => {
  const toggle = useSelector((state: any) => state.resultState);
  const animate: any = {
    hidden: { x: 0, y: 0, rotate: 0 },
    visible: {
      y: rotateY.concat(moveYii, moveY),
      rotate: rotateY.concat(rotateYii, rotateYi),
      transition: {
        duration: timer,
        ease: "easeInOut",
        repeat: 1,
        repeatType: "",
      },
    },
  };

  return (
    <motion.div
      variants={toggle && animate}
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
      <MainCursor title="i am 18 steps away from you!">
        <div className="absolute w-4 h-4 bg-black rounded-full top-[14%] right-[5%] " />
      </MainCursor>

      <div className="absolute w-4 h-[600px] bg-black rounded-sm top-[4%] right-[20%] " />

      <div className="absolute bottom-[2%] right-[3%] ">
        <Ball />
      </div>
    </div>
  );
};

export default DisplayCode;
