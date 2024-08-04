import { greet } from "@naveenonyx/jsinstaller";
import "./App.css";
import { ButtonComponent } from "./hooks/context/ButtonComponent";
import ChangingContextAction from "./hooks/context/ChangingContextAction";
import { Solve } from "./Problem-Solving/Solve";

function App() {
  function getLength(str) {
    var s = str.toString();
    return s.length;
  }
  console.log(getLength(123));
  return (
    <div className="mt-[20px] flex gap-[30px] flex-row max-sm:flex-col">
      <Solve />
    </div>
  );
}
export default App;
