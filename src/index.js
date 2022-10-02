import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Binding from "./components/Binding";
import "./components/style.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Binding />
  </StrictMode>
);
