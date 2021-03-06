import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "./context/Provider";
import RouterContainer from "./router/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
    <RouterContainer />
  </Provider>
);
