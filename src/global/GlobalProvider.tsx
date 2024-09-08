import React, { createContext, FC, useState } from "react";

export const GlobalContext = createContext({});

export const GlobalProvider: FC<any> = ({ children }) => {
  const [yValue, setYValue] = useState<[]>([]);
  const [rotate1, setRotate1] = useState<[]>([]);
  const [rotate2, setRotate2] = useState<[]>([]);

  const [time, setTime] = useState<number>(0);

  return (
    <GlobalContext.Provider
      value={{
        yValue,
        setYValue,
        rotate2,
        setRotate2,
        rotate1,
        setRotate1,
        time,
        setTime,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
