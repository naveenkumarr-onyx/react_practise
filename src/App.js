import { greet } from "@naveenonyx/jsinstaller";
import "./App.css";
import { ButtonComponent } from "./hooks/context/ButtonComponent";
import ChangingContextAction from "./hooks/context/ChangingContextAction";
import { Solve } from "./Problem-Solving/Solve";

function App() {
  function highScoreWord(sentence) {
    // Split the sentence into words
    return sentence.split(" ").reduce((highestWord, currentWord) => {
      // Function to calculate the score of a word
      const wordScore = (word) =>
        [...word].reduce((score, char) => score + (char.charCodeAt(0) - 96), 0);

      // Compare scores and return the higher scoring word
      return wordScore(currentWord) > wordScore(highestWord)
        ? currentWord
        : highestWord;
    });
  }

  // Example usage
  const sentence = "man i need a taxi up to ubud";
  console.log(highScoreWord(sentence)); // Output: "hello"

  return (
    <div className="mt-[20px] flex gap-[30px] flex-row max-sm:flex-col">
      <Solve />
    </div>
  );
}
export default App;
