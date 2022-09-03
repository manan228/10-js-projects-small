import "./App.css";
import { useState, useEffect } from "react";

let index = 0;
const message = "Making small projects/components using ReactJs";

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    index = index + 1;
    setTimeout(() => {
      setText(message.slice(0, index));

      if (index > message.length - 1) {
        index = 0;
      }
    }, 100);
  }, [text]);

  return <div className="App">{text}</div>;
}

export default App;
