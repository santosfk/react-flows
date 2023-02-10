import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Flow from "./components/Flow";
import "reactflow/dist/style.css";

function App() {
  const [count, setCount] = useState(0);

  return <Flow />;
}

export default App;
