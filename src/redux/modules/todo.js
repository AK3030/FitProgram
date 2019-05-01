// Actions
const SET = 'todo/SET';

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case SET:
      return [...state, action.todo]
    default: return state;
  }
}

// Action Creators
export function set(todo) {
  console.log("set called");
  return { type: SET , todo: todo};
}
