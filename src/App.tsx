import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRouter";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store } from "./global/store";
import persistStore from "redux-persist/es/persistStore";
import { GlobalProvider } from "./global/GlobalProvider";

let persistor = persistStore(store);

const App = () => {
  return (
    <GlobalProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={mainRouter} />
        </PersistGate>
      </Provider>
    </GlobalProvider>
  );
};

export default App;
