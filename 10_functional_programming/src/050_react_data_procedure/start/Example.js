import { useState } from "react";

const Example = () => {
  // JSXを作成する場所（状態と処理を分離、副作用が起きるものは書かない）
  const [ state, setState ] = useState(0);
  const increment = () => {
    setState(state + 1);
  }
  return (
    <>
      <button onClick={increment}>+</button>
      <h3>{state}</h3>
    </>
  );
};

export default Example;
