import { useState } from "react"

const Form = ({createTodo}) => {
  const [enteredTodo, setEnteredTodo] = useState("")
  const addTodo = (e) => {
    e.preventDefault()
    const inputVal = enteredTodo
    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: inputVal,
    }
    createTodo(newTodo)
    setEnteredTodo("");
  }
  return (
    <form onSubmit={addTodo}>
      <div>
        <input value={enteredTodo} type="text" onChange={(e) => setEnteredTodo(e.target.value)} />
        <button>追加</button>
      </div>
    </form>
  )
}

export default Form