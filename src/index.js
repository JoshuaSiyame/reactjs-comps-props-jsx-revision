// import modules/packages
import {React, StrictMode} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// get ap entry point
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

// render the app in strict mode
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);