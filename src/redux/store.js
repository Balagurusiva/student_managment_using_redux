import { createStore } from "redux";
import studentReducer from "./studentReducer";

const StudentStore = createStore(studentReducer)

export default StudentStore