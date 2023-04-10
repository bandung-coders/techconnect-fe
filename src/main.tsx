// React redux + toolkit
import { Provider } from "react-redux";

// React Router DOM
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

// Provider
import { AppRouter } from "@/features/app/components";

// Plugins
import { persistor, store } from "./plugins/redux";
import "@/plugins/moment";

import { PersistGate } from "redux-persist/integration/react";

// SASS
import "@/assets/styles/sass/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
