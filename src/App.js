import React from "react";
import "./styles.css";

export default function App() {
  React.useLayoutEffect(() => {
    const head = document.head;
    let elm = document.createElement("script");
    elm.type = "text/javascript";
    elm.src = "/src/test.js";
    head.appendChild(elm);
    console.log(head);
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
