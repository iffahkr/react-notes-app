import React from "react";
import { createRoot } from "react-dom/client";

// import style
import "./styles/style.css";
import "./styles/NotesApp.css";
import NotesApp from "./components/NotesApp";

const root = createRoot(document.getElementById("root"));
root.render(<NotesApp />);
