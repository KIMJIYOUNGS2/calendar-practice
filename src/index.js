import { createRoot } from "react-dom/client";

import App from "./App";
import WrapperContext from "./Context/WrapperContext";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <WrapperContext>
    <App />
  </WrapperContext>
);
