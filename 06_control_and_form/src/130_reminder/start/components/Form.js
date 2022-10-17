import { useState } from "react"

const Form = ({createTodo}) => {
  const [enteredTodo, setEnteredTodo] = useState("")
  const addTodo = (e) => {
    const inputVal = enteredTodo
    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: inputVal,
    }
    createTodo(newTodo)
    setEnteredTodo("");
  }
  return (
    <div>
      <input value={enteredTodo} type="text" onChange={(e) => setEnteredTodo(e.target.value)} />
      <button onClick={addTodo}>追加</button>
    </div>
  )
}

export default Form