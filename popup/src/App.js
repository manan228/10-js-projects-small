import "./App.css";
import { useState } from "react";

function App() {
  const [popup, setPopup] = useState("popup-container");

  const onOpenClickHander = () => {
    setPopup("popup-container active");
  };

  const onCloseClickHandler = () => {
    setPopup("popup-container");
  };
  
  return (
    <div className="App">
      <button id="open" onClick={onOpenClickHander}>
        Open
      </button>

      <div className={popup} id="container">
        <div className="popup">
          <button id="close" onClick={onCloseClickHandler}>
            x
          </button>
          <h1>YouTube</h1>
          <p>Also, I am on YouTube</p>
        </div>
      </div>
    </div>
  );
}

export default App;
