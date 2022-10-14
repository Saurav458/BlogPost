import { combineReducers } from "redux";
import { blogInfo,popUpReducer,productData } from "./Reducer";

export const rootReducer = combineReducers({
    blogs:blogInfo,
    popup:popUpReducer,
    productData
})

export type State = ReturnType<typeof rootReducer>