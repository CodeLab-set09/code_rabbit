import { FC, PropsWithChildren, useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRouter: FC<PropsWithChildren> = ({ children }) => {
  const auth: boolean = true;

  useEffect(() => {}, []);
  return <div>{auth ? <div>{children}</div> : <Navigate to="/" />}</div>;
};

export default PrivateRouter;
