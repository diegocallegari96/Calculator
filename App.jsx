import './App.css'
import Button from "./components/Button/Button.jsx";
import ButtonBox from "./components/ButtonBox/ButtonBox.jsx";
import Screen from "./components/Screen/Screen.jsx";
import Wrapper from "./components/Wrapper/Wrapper.jsx";

const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
];

const App = () => {
  return (
      <Wrapper>
        <Screen value="0" />
        <ButtonBox>
          {
            btnValues.flat().map((btn, i) => {
              return (
                  <Button
                    key={i}
                    className={btn === "=" ? "equals" : ""}
                    value={btn}
                    onClick={() => {
                      console.log(`${btn} clicked!`);
                    }}
                  />
              );
            })
          }
        </ButtonBox>
      </Wrapper>
  );
};

export default App;
