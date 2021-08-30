import React, {
  useState,
  useEffect,
  useMemo,
  memo,
  PureComponent,
} from "react";

const MemodFuncComponent = memo(Title);

export default function Index() {
  const [state, setState] = useState(0);
  const [obj, setobj] = useState({ name: "zhangsan" });

  //   const memoizedValue = useMemo(() => new Date().getFullYear(), [state]);
  return (
    <div>
      usenum: {useNum().num}
      <hr />
      state: {state}
      <MemodFuncComponent value={state} obj={obj} />
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        click me!
      </button>
    </div>
  );
}

function useNum() {
  const [state, setState] = useState({ num: 0 });
  useEffect(() => {
    let timer = setInterval(() => {
      setState({ num: state.num + 1 });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [state]);
  return state;
}

function Title({ obj, value }) {
  console.log("asdasd");
  return (
    <h1>
      {obj.name}title {value}
    </h1>
  );
}
