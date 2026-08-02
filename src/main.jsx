import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./styles.css";
import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/buttons.css";
import "./styles/animations.css";
import "./styles/utilities.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>

    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>

  </StrictMode>
);