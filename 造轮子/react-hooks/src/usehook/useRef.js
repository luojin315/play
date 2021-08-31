import React, { useState, memo, useRef, useEffect } from "react";

const ButtonMemo = memo(Button);
/**
 * ?ref无法直接获取函数组件会报错
 * !Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef
 * 需要通过React.forwardRef包裹  传递给真是dom
 *
 */

export default function Callback() {
  const [state, setstate] = useState(0);
  let ref = useRef();

  useEffect(() => {
    console.log(ref);
  }, []);
  return (
    <div>
      <ButtonMemo
        value={state}
        clickEvent={() => setstate(state + 1)}
        ref={ref}
      />
      <button>adasdasds</button>
      <hr />
    </div>
  );
}

function Button({ clickEvent, value }) {
  console.log(value);
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={clickEvent}>click me!</button>
    </div>
  );
}
