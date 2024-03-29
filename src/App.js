import "./App.css";
import Async from "./Js/async_await/async";
import Practise from "./Js/vanilla/Practise";
import Palindrome from "./Js/Palindrome/Palindrome";
import { Custom } from "./hooks/customHooks/Custom";
import Context from "./hooks/useContext/Context";
import { Effect } from "./hooks/useEffect/Effect";
import ModalDialog from "./hooks/useEffect/ModalDialog";
import Index from "./hooks/useEffect/Index";
import Reducer from "./hooks/useReducer/Reducer";
import { Ref } from "./hooks/useRef/Ref";
import State from "./hooks/useState/State";
import InputCompo from "./processBar/InputCompo";
import { Amazon, Apps, ProcessBar } from "./processBar/ProcessBar";
import SignUpForm from "./Form/SignUpForm";
import Quote from "./Quote-Generator/Quote";
import Tic_Tae from "./Tic-Tae-Toe/Tic_Tae";
import Oops from "./Js/oops/Oops";
import BMI from "./BMI/BMI";
function App() {
  return (
    <div className=" h-screen w-screen justify-center flex items-center gap-[30px] flex-row">
      {/* <State /> */}
      {/* <Effect /> */}
      {/* <ModalDialog /> */}
      {/* <Custom />
      <Ref /> */}
      {/* <SignUpForm /> */}
      {/* <Quote /> */}
      {/* <Practise /> */}
      <Palindrome />
      {/* <BMI /> */}
      {/* <Oops />
      <Async /> */}
    </div>
  );
}
export default App;
