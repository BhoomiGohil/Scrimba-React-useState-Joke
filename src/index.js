import React from "react";
import { createRoot } from "react-dom/client";

import MainContent from "./Practice19/MainContent";
import "./Practice19/Index.css";

// ------------------------------------- Render Elements on browser -------------------------------------

// Find the root element in the HTML where the React component will be rendered
const rootElement = document.querySelector("#root");

// If the root element is not found, throw an error
if (!rootElement) throw new Error("Failed to find the root element");

// Create a root instance using the createRoot method
const root = createRoot(rootElement);

// Render the MainContent component inside the root element
root.render(<MainContent />);
