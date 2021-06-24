import { createStore } from "redux";
import ExpenseApp from "../Reducers/ExpenseReducer";


const store = createStore(ExpenseApp)

export default store;