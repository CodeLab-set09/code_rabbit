import { createBrowserRouter } from "react-router-dom";

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
