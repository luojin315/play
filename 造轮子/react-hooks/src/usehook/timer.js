import React, { useEffect, useState, useCallback } from "react";

export default function Timer() {
  const [flag, setFlag] = useState(false);

  const callback = useCallback(() => {
    setFlag(false);
  }, []);

  return (
    <div>
      <button onClick={() => setFlag(true)}>click me!</button>
      {!flag && <p>点击发送验证码</p>}
      {flag && <CodeNode callback={callback} />}
    </div>
  );
}

function CodeNode({ callback }) {
  const ENDTIME = 10;

  const timer = useTimer({ endTime: ENDTIME, startTime: 0, type: "add" });
  useEffect(() => {
    if (timer === ENDTIME) {
      callback();
    }
  }, [timer, ENDTIME, callback]);

  return <div>number:{timer}</div>;
}

function useTimer({ endTime, startTime, type }) {
  const [state, setstate] = useState(startTime);

  useEffect(() => {
    let timer;
    timer = setInterval(() => {
      if (state === endTime) {
        clearInterval(timer);
        return;
      }
      type === "add" ? setstate(state + 1) : setstate(state - 1);
    }, 500);
    return () => clearInterval(timer);
  }, [state, endTime, type]);

  return state;
}
