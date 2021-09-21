import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  addTodo: ["text" , "payload"],
  toggleTodo: ["id"],
  removeTodo: ["id"]
});

console.log(Types);

/**
 * Handlers
 */
const INITIAL_STATE = [];

const adds = (state = INITIAL_STATE, action) => {
  console.log(action)
  return [
    ...state,
    { id: Math.random(), text: action.text, complete: false }
  ];
}

// accept inganization
const toggle = (state = INITIAL_STATE, action) =>
  state.map(
    todo =>
      todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
  );

const remove = (state = INITIAL_STATE, action) =>
  state.filter(todo => todo.id !== action.id);

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: adds,
  [Types.TOGGLE_TODO]: toggle,
  [Types.REMOVE_TODO]: remove
});
