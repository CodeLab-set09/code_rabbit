import { FC, ReactNode, SVGProps } from "react";
import { CursorEffect } from "./CursorEffect";
import { BsFillCursorFill } from "react-icons/bs";

const MouseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={31}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill={"white"}
          fillRule="evenodd"
          stroke={"white"}
          strokeLinecap="square"
          strokeWidth={2}
          d="M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill={"#22c55e"} d="M0 0h26v31H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

interface iProps {
  children: ReactNode;
  title: string;
}

export const MainCursor: FC<iProps> = ({ children, title }) => {
  return (
    <div className="py-12 flex">
      <div className="">
        {children}
        <CursorEffect
          attachToParent
          variants={{
            initial: { scale: 0.3, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.3, opacity: 0 },
          }}
          transition={{
            ease: "easeInOut",
            duration: 0.15,
          }}
          className="left-12 top-4"
        >
          <div>
            <MouseIcon className="h-6 w-6 rotate-90" />
            <BsFillCursorFill className="" />
            <div className="ml-4 mt-1 rounded-[4px] bg-white text-neutral-900 px-2 py-0.5 uppercase text-[12px] font-semibold ">
              {title}
            </div>
          </div>
        </CursorEffect>
      </div>
    </div>
  );
};
