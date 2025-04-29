import { useState } from "react";

const inputFields = [
  "initial investment",
  "annual investment",
  "expected return",
  "duration",
];

function InputGroup({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const [inputValue, setInputValue] = useState(0);

  function onChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>{inputFields[0]}</label>
          <input value={inputValue} onChange={onChange} type="number" />
        </div>
        <div>
          <label>{inputFields[1]}</label>
          <input value={inputValue} onChange={onChange} type="number" />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>{inputFields[2]}</label>
          <input value={inputValue} onChange={onChange} type="number" />
        </div>
        <div>
          <label>{inputFields[3]}</label>
          <input value={inputValue} onChange={onChange} type="number" />
        </div>
      </div>
    </div>
  );
}
export default InputGroup;
