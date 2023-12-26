import React from "react";
import ReactDOM from "react-dom"; // Correct import statement
import JeuDe from "./components/jeu";

const element = document.getElementById("root");

function App() {
  return (
    <div>
      <JeuDe cache={2} />
    </div>
  );
}

ReactDOM.render(<App />, element);
