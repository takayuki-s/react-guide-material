import { useRef, forwardRef } from "react";

const Input = ({ ref }) => {
  return <input type="text" ref={ref} />
}
const Example = () => {
  const ref = useRef();
  return (
    <>
      <Input customRef={ref}/>
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
