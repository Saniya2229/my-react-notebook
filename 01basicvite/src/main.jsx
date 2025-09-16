import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

function MyApp() {
  return (
    <div>
      <h1>Custom react app</h1>
    </div>
  );
}

const AnotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);

const ReactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click me to visit google"
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
