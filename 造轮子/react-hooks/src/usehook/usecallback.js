import React, { useState, useCallback,memo } from "react";

const ButtonMemo = memo(Button)
/**
 * ?memo当作一个浅层对比  相当于类组件的purecomponent
 * usecallback是一个将回调函数保存的api    可以通过memo来达到一个减少渲染的性能优化
 * 因为函数 ≠ 函数  地址是不相同的
 * 
 */
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
