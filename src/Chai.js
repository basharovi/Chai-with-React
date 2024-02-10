import { useState } from "react";

function HeyChai() {
  const [counter, setCounter] = useState(0);

  const Increase = () => {
    if (counter < 20) setCounter(counter + 1);
  };

  const Decrease = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <>
      <h4 className="App-logo"> {counter} </h4>
      <div style={{ display: "inline-flex", gap: "5px" }}>
        <button onClick={Increase}> Increase </button>
        <button onClick={Decrease}> Decrease </button>
      </div>
    </>
  );
}

export default HeyChai;
