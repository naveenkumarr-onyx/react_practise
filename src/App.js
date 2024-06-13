import "./App.css";
import { Solve } from "./Problem-Solving/Solve";
import Ticket from "./Ticket-Raising/Ticket";

function App() {
  return (
    <div className="mt-[20px] flex gap-[30px] flex-row max-sm:flex-col">
      {/* <Ticket /> */}
      <Solve />
    </div>
  );
}
export default App;
