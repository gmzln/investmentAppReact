const inputFields = [
  "initial investment",
  "annual investment",
  "expected return",
  "duration",
];

function InputGroup() {
  return (
    <div>
      <div className="input-group">
        <div>
          <label>{inputFields[0]}</label>
          <input type="number" />
        </div>
        <div>
          <label>{inputFields[1]}</label>
          <input type="number" />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>{inputFields[2]}</label>
          <input type="number" />
        </div>
        <div>
          <label>{inputFields[3]}</label>
          <input type="number" />
        </div>
      </div>
    </div>
  );
}
export default InputGroup;
