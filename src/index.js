import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faCalendar,
  faFemale,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

library.add(faBed, faPlane, faCar, faTaxi, faCalendar, faFemale, faLocationDot);

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
