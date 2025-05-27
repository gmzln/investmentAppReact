function InputGroup({ inputValue, onChange, inputFields }) {
  return (
    <div id="user-input">
      <div className="input-group">
        {inputFields.map(({ label, key }) => (
          <div key={key}>
            <label>{label}</label>
            <input
              value={inputValue[key]}
              onChange={(e) => {
                onChange(e, key);
              }}
              type="number"
              required
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default InputGroup;
