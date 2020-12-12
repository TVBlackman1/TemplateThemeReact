import './App.css';
import {ThemeContext} from "./context/ThemeContext";
import {RandomElement} from "./component/RandomElement";
import {ButtonTheme} from "./component/ButtonTheme";

function App() {
  return (
    <div className="App">
      <ThemeContext>
        <RandomElement />
        <ButtonTheme />
      </ThemeContext>
    </div>
  );
}

export default App;
