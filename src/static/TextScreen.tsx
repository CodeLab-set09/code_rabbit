import React from "react";
import { TextEffect } from "./TextEffect";
import { CursorScreen } from "./Cursor";
import { MainCursor } from "./MainCursor";

const TextScreen = () => {
  return (
    <div className="">
      <TextEffect>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis
        ipsum animi, fugiat doloribus culpa sunt totam minima voluptatem fuga,
        illo velit obcaecati dolore explicabo.
      </TextEffect>

      <div className="m-5">
        <CursorScreen />
      </div>

      <div className="m-5"></div>
    </div>
  );
};

export default TextScreen;
