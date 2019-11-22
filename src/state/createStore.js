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
    case "HIDE_HEADER":
      console.log("hide header")
      return Object.assign({}, state, {
        display: action.display,
      })
    default:
      return state
  }
}

const initialState = { color: "", footer: "", mode: "wide", display: "true" }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
