import Counter from "./components/Counter";
import { CounterProvider } from "./context/CounterContext";
import { Provider } from "react-redux";

const Example = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};

export default Example;
