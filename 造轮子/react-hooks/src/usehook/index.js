import React, {
  useState,
  useEffect,
} from "react";
import Usememo from './timer'

export default function Index() {

  //   const memoizedValue = useMemo(() => new Date().getFullYear(), [state]);
  return (
    <div>
      {/* usenum: {useNum().num} */}
      <Usememo />
    </div>
  );
}

function useNum() {
  const [state, setState] = useState({ num: 0 });
  console.log("asdsad")
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