import { createStore } from "redux"
import { colorReducer } from "../reducers/count"

export const store = createStore(colorReducer)
