import { createBrowserRouter } from "react-router-dom";
import LayoutScreen from "../static/LayoutScreen";
import UserLayout from "../static/userLayout";
import AuthLayout from "../static/AuthLayloat";
import Register from "../page/auth/Registration";
import Login from "../page/auth/LoginScreen";
import LandingScreen from "../page/screen/LandingScreen";
import PrivateRouter from "./privateRouter";
import HomeScreen from "../page/home/HomeScreen";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <LayoutScreen />,
    children: [{ path: "/", element: <LandingScreen /> }],
  },
  {
    path: "/user",
    element: (
      <PrivateRouter>
        {" "}
        <UserLayout />
      </PrivateRouter>
    ),
    children: [{ index: true, element: <HomeScreen /> }],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Register />,
      },
      {
        path: "login",
        index: true,
        element: <Login />,
      },
    ],
  },
  { path: "*", element: <h1>404 Not Found</h1> },
]);
