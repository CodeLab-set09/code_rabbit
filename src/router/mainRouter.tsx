import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Features from "../pages/Features";
import SignUp from "../pages/(auth)/SignUp";
import LandingPage from "../pages/LandingPage";

export const mainRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
