import { useState } from "react";
import ModalDialog from "./ModalDialog.js";
import FormValid from "./FormValid.js";

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>Open dialog</button>
      <ModalDialog isOpen={show}>
        Hello there!
        <br />
        <button
          onClick={() => {
            setShow(false);
          }}
        >
          Close
        </button>
      </ModalDialog>
      <FormValid />
    </>
  );
}
