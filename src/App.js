import "./App.css";
import Async from "./Js/async_await/async";
import Practise from "./Js/vanilla/Practise";
import Custom from "./hooks/customHooks/Custom";
import Context from "./hooks/useContext/Context";
import Reducer from "./hooks/useReducer/Reducer";
import State from "./hooks/useState/State";
import InputCompo from "./processBar/InputCompo";
import { Amazon, Apps, ProcessBar } from "./processBar/ProcessBar";
function App() {
  function handler() {}
  return (
    <div>
      {/* <State /> */}
      <Custom />
      <Practise />
      <ProcessBar newVaL={handler} />
      <InputCompo />
    </div>
  );
}
export default App;
