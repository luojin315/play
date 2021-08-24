import React, { Component, useRef, useEffect } from "react";

export default function Index() {
  const myRef = useRef(null);
  useEffect(() => {
    console.log(myRef);
    myRef.current.add()
  }, []);
  return (
    <div>
      <h1>父级</h1>
      <Name ref={myRef} />
    </div>
  );
}

class Name extends Component {
  state = {
    count: 0,
  };
  add = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.add}>click me!</button>
      </div>
    );
  }
}
