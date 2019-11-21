import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return Object.assign({}, state, {
        color: action.color,
      })
    case "CHANGE_FOOTER":
      return Object.assign({}, state, {
        footer: action.footer,
      })
    case "CHANGE_LAYOUT":
      return Object.assign({}, state, {
        mode: action.mode,
      })
      default: return state
  }
  return state
}

const initialState = { color: "", footer: "", mode: "wide" }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
