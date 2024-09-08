import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import img from "../../../../public/playButton.png";
import pix from "../../../../public/idea1.png";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFaliedState,
  changePlay,
  changePlayRotate,
  changeReadToggle,
  changeResultState,
  changeRotateValue1,
  changeRotateValue2,
  changeStatePlay,
  changeSuccessState,
  changeTestState,
  changeTiming,
  changeYValue1,
} from "../../../global/slice";

const CodedSide = () => {
  const dispatch = useDispatch();

  const [code, setCode] = useState<string>("");
  const [text, setText] = useState<string>("");

  function handleEditorChange(value: any) {
    setCode(value);
    setText(value);
  }

  const clue = [
    { id: 1, name: "step", bg: "bg-orange-500" },
    { id: 2, name: "turn", bg: "bg-blue-500" },
    { id: 3, name: "up", bg: "bg-red-500" },
    { id: 4, name: "down", bg: "bg-black" },
  ];

  const result = `turn up;\r\nstep 80;`;

  // const timing = useSelector((state: any) => state.timing);
  const timing = 6;
  const rotate1 = useSelector((state: any) => state.rotateValue1);
  const rotate2 = useSelector((state: any) => state.rotateValue2);
  let y = useSelector((state: any) => state.yValue1);
  let statePlay = useSelector((state: any) => state.statePlay);
  let stateTest = useSelector((state: any) => state.testState);

  const yInput: number = y;

  let yLength: number = (yInput / 100) * 78;

  let timer = (y / 100) * 6;

  const moveY = Array.from({ length: yLength }, (_, i: number) => {
    if (rotate2 === 90) {
      return -(i * 10);
    } else if (rotate2 === -90) {
      return i * 10;
    }
  });

  const rotateY = Array.from({ length: 5 }, () => {
    return rotate1;
  });

  const rotateYii = Array.from({ length: 7 }, () => {
    return rotate2;
  });

  const moveYii = Array.from({ length: 7 }, () => {
    return 0;
  });

  const rotateYi = Array.from({ length: yLength }, () => {
    return rotate2;
  });

  console.log(code, statePlay);

  const [value, setValue] = useState<any>([]);

  useEffect(() => {
    setValue(rotateY.concat(moveYii, moveY));

    // console.log("hmm: ", value);
  }, [statePlay]);

  // console.log("hmm: ", value);
  return (
    <div className="w-full flex flex-col h-full">
      <div className="my-4 ml-2">Write your Codes Here</div>
      <Editor
        height="50vh"
        defaultLanguage=""
        // defaultValue={"step"}
        value={text}
        onChange={handleEditorChange}
        className="text-[50px]"
      />

      <div className="my-7 mr-3">
        <hr />
      </div>
      <div className="flex-1" />
      <div className="flex justify-end items-center gap-2">
        <div
          className="border rounded-full flex p-2 items-center cursor-pointer"
          onClick={() => {
            if (code === "") {
              dispatch(changeFaliedState(true));
            } else {
              dispatch(changeTiming(timer));

              dispatch(changePlay(true));

              dispatch(changeStatePlay(value));
              dispatch(changePlayRotate(rotateY.concat(rotateYii, rotateYi)));

              if (code?.split("\r\n")[0]?.split(" ")[0] === "turn") {
                dispatch(changeRotateValue1(0));
              }

              if (
                code?.split("\r\n")[0]?.split(" ")[1]?.split(";")[0] === "up"
              ) {
                dispatch(changeRotateValue2(90));
              } else if (
                code?.split("\r\n")[0]?.split(" ")[1]?.split(";")[0] === "down"
              ) {
                dispatch(changeRotateValue2(-90));
              }

              dispatch(
                changeYValue1(
                  parseInt(code?.split("\r\n")[1]?.split(" ")[1]?.split(";")[0])
                )
              );
              dispatch(changeResultState(true));

              if (code === result) {
                const timerAgain = setTimeout(() => {
                  dispatch(changeSuccessState(true));
                  clearTimeout(timerAgain);
                  setCode("");
                  setText("");
                }, (Math.round(timing) + 0.5) * 1000);
              } else {
                const timerAgain = setTimeout(() => {
                  dispatch(changeFaliedState(true));
                  clearTimeout(timerAgain);
                  setCode("");
                  setText("");
                }, (Math.round(timing) + 0.5) * 1000);
              }
            }
          }}
        >
          <img className="h-10 " src={img} />
          <p className="text-[18px] font-bold ml-4">RUN</p>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            dispatch(changeReadToggle(true));
          }}
        >
          <img className="h-20 cursor-pointer" src={pix} />
        </div>
      </div>
      <div className="mt-4">Code Clues </div>
      <div className="border rounded-md p-2 mt-5 flex gap-3 w-[300px] flex-wrap">
        {clue.map((el) => (
          <p
            key={el.id}
            onClick={() => {
              setText(text.concat(`${el.name};\r\n`));
              setCode(text);
            }}
            className={` capitalize font-semibold cursor-pointer text-[12px] border py-1 px-4 rounded-full ${el.bg} text-white`}
          >
            {el.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CodedSide;
