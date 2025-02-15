import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "Hello using react H1");
const heading2 = React.createElement("h2", {}, "Hello using react H2 ");
const para = React.createElement("p", {}, "Hello using paragraph ");
const container = React.createElement("div", {}, [heading, heading2, para]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
