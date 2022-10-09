import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", null, "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const animalStr = animal ?? "";
            const isMatch = animalStr.indexOf(filterVal) !== -1;

            return isMatch;
          })
          .map((animal) => {
            return (
              <li key={animal}>
                {
                  // POINT if文
                  // if(animal === "Dog") {
                  //   return <li key={animal}>{animal}★</li>
                  // } else {
                  //   return <li key={animal}>{animal}</li>
                  // }
                  // POINT 3項演算子
                  // animal + (animal === "Dog"
                  //  ? "★"
                  //  : "")
                  // POINT null合体演算子
                  animal ?? "null,undefinedでした"
                }
                {/* POINT &&演算子 */}
                {animal === "Dog" && "★"}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Example;
