import { useState, lazy, Suspense, startTransition } from "react";

const LazyComponentA = lazy(() => import("./components/ComponentA"))
const LazyComponentB = lazy(() => import("./components/ComponentB"))

const Example = () => {
  const [compA, setCompA] = useState(false);

  return (
    <>
      <button onClick={() => {
        startTransition(() => {
          setCompA((prev) => !prev)
        })
      }}>change Component!</button>
      <Suspense fallback={<div>Loading...</div>}>
        {compA ? <LazyComponentA /> : <LazyComponentB />}
      </Suspense>
    </>
  );
};

export default Example;
