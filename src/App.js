import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row, Column } from "./style";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState(null);

  const handleClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation(null);
  };

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("+");
    } else {
      setCurrentNumber(Number(firstNumber) + Number(currentNumber));
      setOperation(null);
    }
  };

  const handleMinus = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("-");
    } else {
      setCurrentNumber(Number(firstNumber) - Number(currentNumber));
      setOperation(null);
    }
  };

  const handleMultiple = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("*");
    } else {
      setCurrentNumber(Number(firstNumber) * Number(currentNumber));
      setOperation(null);
    }
  };

  const handleDivide = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("/");
    } else {
      setCurrentNumber(Number(firstNumber) / Number(currentNumber));
      setOperation(null);
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinus();
          break;
        case "*":
          handleMultiple();
          break;
        case "/":
          handleDivide();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={() => handleMultiple("*")} />
          <Button label="/" onClick={() => handleDivide("/")} />
          <Button label="c" onClick={() => handleClear()} />
          <Button label="." />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={() => handleMinus()} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={() => handleSumNumbers()} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={() => handleEquals()} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
