import { useState } from "react";
import "./App.css";

// let count = 0;

function App() {
  const [notificationClass, setNotificationClass] = useState(false);
  const [notificationElement, setNotificationElement] = useState([]);

  let id = null;

  const onBtnClickHandler = () => {
    // count = count + 1;
    setNotificationClass(true);

    // let element = notificationElement

    // if (id) {
    //   clearTimeout(id);
    // }

    id = setTimeout(() => {
      // setNotificationClass(false);
      setNotificationElement(notificationElement.pop())
    }, 3000);

    setNotificationElement([...notificationElement, id]);
  };

  // const getNotification = () => {
  //   for (let i = 1; i <= count; i++) {
  //     return <div>The Challenge is crazy</div>;
  //   }
  // };

  return (
    <div className="App">
      <div id="container" className={notificationClass ? "toast" : null}>
        {notificationElement.map((element) => (

          <div>
            <div style={{ margin: "10px" }}>The Challenge is crazy</div>
          </div>
        ))}
      </div>
      <button id="btn" onClick={onBtnClickHandler}>
        Click Me
      </button>
    </div>
  );
}

export default App;
