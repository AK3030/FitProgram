// Actions
const SET_EXCERCISE = 'SET_EXCERCISE';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case SET_EXCERCISE:
      return Object.assign({}, state.excercises, action.excercise)
    default: return state;
  }
}

// Action Creators
export function set(excercise) {
  console.log("set called");
  return { type: SET_EXCERCISE , excercise: excercise};
}