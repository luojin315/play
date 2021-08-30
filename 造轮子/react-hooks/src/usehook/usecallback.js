import React, { useState, useCallback,memo } from "react";

const ButtonMemo = memo(Button)
export default function Callback() {
  const [state, setstate] = useState(0);
  const [state1, setstate1] = useState(0);
  const [state2, setstate2] = useState(0);
  const clickButton = useCallback(() => {
    setstate2(state2 + 1);
  }, [state2]);
  return (
    <div>
      <ButtonMemo value={state} clickEvent={() => setstate(state + 1)} />
      <hr />
      <ButtonMemo value={state1} clickEvent={() => setstate1(state1 + 1)} />
      <hr />
      <ButtonMemo value={state2} clickEvent={clickButton} />
      <hr />
    </div>
  );
}

function Button({ clickEvent, value }) {
    console.log(value)
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={clickEvent}>click me!</button>
    </div>
  );
}
