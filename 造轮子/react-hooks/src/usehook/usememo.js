import React, { useState, useMemo, memo } from "react";

const ButtonMemo = memo(Button);
/**
 * ?useMemo可以缓存复杂的计算等   在页面重新渲染时不会重新计算，依赖项更新后在重新计算
 * 
//  */
// export default function Callback() {
//   const [state, setstate] = useState([1, 2, 3, 4, 5]);
//   const [state1, setstate1] = useState(0);
//   const ary = useMemo(() => {
//     console.log("asdsad");
//     return state.map((item) => {
//       return <h2 key={item}>{item ** 2}</h2>;
//     });
//   }, [state]);
//   return (
//     <div>
//       {ary}
//       <ButtonMemo value={state1} clickEvent={() => setstate1(state1 + 1)} />
//       <hr />
//     </div>
//   );
// }
/**
 * ?useMemo 模拟usecallback缓存函数达到优化渲染目的
 * useMemo 返回的是一个值  模拟callback就返回函数
 *
 */
export default function Callback() {
  const [state, setstate] = useState(0);
  const [state1, setstate1] = useState(0);
  function test() {
    console.log("asdsad");
    setstate1(state1 + 1);
    return state1;
  }
  const callback = useMemo(() => test, [state1]);
  return (
    <div>
      <ButtonMemo value={state} clickEvent={() => setstate(state + 1)} />
      <hr />
      <ButtonMemo value={state1} clickEvent={callback} />
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
