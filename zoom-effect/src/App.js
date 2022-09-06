import { useState } from "react";
import "./App.css";

const useMove = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
    transformValue: `scale(2)`,
  });

  const handleMouseMove = (e) => {
    e.persist();

    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    setState((state) => ({ ...state, x: x, y: y, transformValue: `scale(2)` }));
  };

  const handleMouseLeave = (e) => {
    setState((state) => ({ ...state, transformValue: `scale(1)` }));
  };

  return {
    x: state.x,
    y: state.y,
    transformValue: state.transformValue,
    handleMouseMove,
    handleMouseLeave,
  };
};

function App() {
  const { x, y, transformValue, handleMouseMove, handleMouseLeave } = useMove();

  return (
    <div className="App">
      <div
        id="container"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          style={{
            transformOrigin: `${x}px ${y}px`,
            transform: transformValue,
          }}
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274&q=80"
          alt="some random text"
        />
      </div>
    </div>
  );
}

export default App;
// export { useMove };
