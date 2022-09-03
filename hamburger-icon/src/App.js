import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [isActive, setActive] = useState(false);

  const onBtnClickHandler = () => {
    console.log(`clicked`);

    setActive(!isActive);
  };

  return (
    <div className="App">
      <button
        id="btn"
        className={isActive ? "active" : null}
        onClick={onBtnClickHandler}
      >
        ☰
      </button>
      <nav id="nav" className={isActive ? "active" : null}>
        <ul>
          <Link to="#" style={{ textDecoration: "none" }}>
            <li>Google</li>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <li>Youtube</li>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <li>Twitter</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default App;
