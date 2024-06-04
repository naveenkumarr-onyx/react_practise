import "./App.css";
import Ticket, { Filters } from "./Ticket-Raising/Ticket";

function App() {
  return (
    <div className="mt-[20px] flex gap-[30px] justify-around flex-row max-sm:flex-col">
      <Ticket />
      <Filters />
    </div>
  );
}
export default App;
