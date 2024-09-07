import { createBrowserRouter } from "react-router-dom";
import LayoutScreen from "../static/LayoutScreen";
import PrivateRouter from "./privateRouter";
import LandingScreen from "../page/screen/LandingScreen";
import HomeScreen from "../page/home/HomeScreen";
import UserLayout from "../static/userLayout";
import Register from "../page/auth/Registration";
import Login from "../page/auth/LoginScreen";

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
