import "./App.css";
import FormInReact from "./Form/FormInReact";
import { Solve } from "./Problem-Solving/Solve";

function App() {
  return (
    <div className="mt-[20px] flex gap-[30px] flex-row max-sm:flex-col">
      <Solve />
    </div>
  );
}
export default App;
