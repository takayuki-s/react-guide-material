import { produce } from "immer"

const state = {
  name: 'Tom',
  hobbies: ['tennis', 'soccer']
}

// この場合だとイミュータビリティーの保持ができない
// const newState = state
// newState.name = 'John'

const newState = produce(state, draft => {
  draft.name = 'John'
  draft.hobbies[0] = 'baseball'
  console.log(draft)
})

console.log(state === newState)