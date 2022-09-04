import { useState } from "react";
import "./App.css";

// let count = 0;

function App() {
  const [notificationClass, setNotificationClass] = useState(false);
  let id = null;
  const onBtnClickHandler = () => {
    // count = count + 1;
    setNotificationClass(true);

    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      setNotificationClass(false);
    }, 3000);
  };

  // const getNotification = () => {
  //   for (let i = 1; i <= count; i++) {
  //     return <div>The Challenge is crazy</div>;
  //   }
  // };

  return (
    <div className="App">
      <div id="container" className={notificationClass ? "toast" : null}>
        {notificationClass && <div>The Challenge is crazy</div>}
        {/* {notificationClass && getNotification} */}
      </div>
      <button id="btn" onClick={onBtnClickHandler}>
        Click Me
      </button>
    </div>
  );
}

export default App;
