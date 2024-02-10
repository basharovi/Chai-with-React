import { useState } from "react";

function HeyChai({ initValue = 0 }) {
  const [counter, setCounter] = useState(initValue);

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
        <button className="bg-blue-600 px-2 text-black" onClick={Increase}>
          Increase
        </button>
        <button onClick={Decrease}> Decrease </button>
      </div>
    </>
  );
}

export default HeyChai;
