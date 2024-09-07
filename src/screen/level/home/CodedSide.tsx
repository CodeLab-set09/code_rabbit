import Editor from "@monaco-editor/react";
import { useState } from "react";
import img from "../../../../public/playButton.png";
import pix from "../../../../public/idea1.png";
import { useDispatch } from "react-redux";
import {
  changeFaliedState,
  changeReadToggle,
  changeResultState,
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
    { id: 3, name: "left", bg: "bg-green-500" },
    { id: 4, name: "right", bg: "bg-purple-500" },
    { id: 5, name: "up", bg: "bg-red-500" },
    { id: 6, name: "down", bg: "bg-black" },
  ];

  const result = `turn up;\r\nstep 90;`;

  return (
    <div className="w-full flex flex-col h-full">
      <div className="my-4 ml-2">Write your Codes Here</div>
      <Editor
        height="50vh"
        defaultLanguage=""
        defaultValue={"step"}
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
            if (result === code) {
              dispatch(changeResultState(true));

              const timer = setTimeout(() => {
                dispatch(changeResultState(false));
                clearTimeout(timer);
              }, 6 * 1000);
            } else {
              dispatch(changeFaliedState(true));
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
