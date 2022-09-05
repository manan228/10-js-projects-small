import "./App.css";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  const onChangeHandler = (e) => {
    setDark(e.target.checked);
  };

  return (
    <div className={dark ? "App dark" : "App"}>
      <div>
        <input
          type="checkbox"
          id="toggle"
          name="toggle"
          onChange={onChangeHandler}
        />
        <label htmlFor="toggle">Toggle Theme</label>
      </div>
      <h1>Heading 1</h1>
      <p>
        Now is the winter of our discontent Made glorious summer by this sun of
        York; And all the clouds that lour'd upon our house In the deep bosom of
        the ocean buried. Now are our brows bound with victorious wreaths; Our
        bruised arms hung up for monuments; Our stern alarums changed to merry
        meetings, Our dreadful marches to delightful measures. Grim-visaged war
        hath smooth'd his wrinkled front; And now, instead of mounting barded
        steeds To fright the souls of fearful adversaries, He capers nimbly in a
        lady's chamber To the lascivious pleasing of a lute. But I, that am not
        shaped for sportive tricks, Nor made to court an amorous looking-glass;
        I, that am rudely stamp'd, and want love's majesty To strut before a
        wanton ambling nymph; I, that am curtail'd of this fair proportion,
      </p>
    </div>
  );
}

export default App;
