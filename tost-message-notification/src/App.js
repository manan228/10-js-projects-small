import { useState } from "react";
import "./App.css";

function App() {
  const [notificationClass, setNotificationClass] = useState(false);
  // const [count, setCount] = useState(0);

  const onBtnClickHandler = () => {
    setNotificationClass(true);
    // setCount(count + 1);

    setTimeout(() => {
      setNotificationClass(false);
    }, 3000);
  };

  return (
    <div className="App">
      <div id="container" className={notificationClass ? "toast" : null}>
        {notificationClass && <div>The Challenge is crazy</div>}
      </div>
      <button id="btn" onClick={onBtnClickHandler}>
        Click Me
      </button>
    </div>
  );
}

export default App;
