import { FC, PropsWithChildren, useEffect } from "react";

import { Navigate } from "react-router-dom";

const PrivateRouter: FC<PropsWithChildren> = ({ children }) => {
  const auth: boolean = true;

  useEffect(() => {}, []);
  return <div>{auth ? <div>{children}</div> : <Navigate to="/" />}</div>;
};

export default PrivateRouter;
