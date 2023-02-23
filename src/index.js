import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'normalize.css';
import './index.css';

import './fonts/TiltNeon-Regular.ttf';

const el = document.querySelector("#root");
const root = ReactDOM.createRoot(el);

root.render(<App />)