import Header from "./Components/Header";
import InputGroup from "./Components/InputGroup";
import List from "./Components/Table";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

const inputFields = [
  { label: "Initial Investment", key: "initialInvestment" },
  { label: "Annual Investment", key: "annualInvestment" },
  { label: "Expected Return (%)", key: "expectedReturn" },
  { label: "duration (Years)", key: "duration" },
];

function App() {
  const [inputValue, setInputValue] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const investmentResults = calculateInvestmentResults(inputValue);

  function onChange(event, key) {
    setInputValue((prevInput) => ({
      ...prevInput,
      [key]: +event.target.value,
    }));
  }

  return (
    <>
      <Header />
      <InputGroup
        inputValue={inputValue}
        onChange={onChange}
        inputFields={inputFields}
      />
      <List investmentResults={investmentResults} />
    </>
  );
}

export default App;
