import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRouter";

const App = () => {
  return <RouterProvider router={mainRouter} />;
};

export default App;
