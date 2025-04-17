function UserInput() {
  const inputFields = [
    "initial investment",
    "annual investment",
    "expected return",
    "duration",
  ];

  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>initial investment</label>
          <input type="number" />
        </div>
        <div>
          <label>annual investment</label>
          <input type="number" />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>expected return</label>
          <input type="number" />
        </div>
        <div>
          <label>duration</label>
          <input type="number" />
        </div>
      </div>
    </div>
  );
}

export default UserInput;
