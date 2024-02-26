import "./App.css";
import Context from "./hooks/useContext/Context";
import Reducer from "./hooks/useReducer/Reducer";
import State from "./hooks/useState/State";
function App() {
  return (
    <div>
      <State />
      <Context />
      <Reducer />
    </div>
  );
}
export default App;
