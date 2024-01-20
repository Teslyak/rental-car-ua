import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./redux/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}></PersistGate> */}
      <BrowserRouter basename="/rental-cars">
        <App />
      </BrowserRouter>
      {/* <PersistGate /> */}
    </Provider>
  </React.StrictMode>
);
