import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'normalize.css';
import './index.css';

import './fonts/TiltNeon-Regular.ttf';
import { Provider } from "react-redux";
import { store } from "./store";
import { NavigationProvider } from "./context/navigation";
import { ColorsProvider } from "./context/colors";

const el = document.querySelector("#root");
const root = ReactDOM.createRoot(el);

root.render(
  <Provider store={store}>
    <NavigationProvider>
      <ColorsProvider>
        <App />
      </ColorsProvider>
    </NavigationProvider>
  </Provider>
)