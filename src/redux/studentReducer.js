import { ADD_STUDENT, EDIT_STUDENT, DELETE_STUDENT } from "./ActionType";

const initailState = {
    studentList: []
}

const studentReducer = (state = initailState, action) => {

    switch (action.type) {
        case ADD_STUDENT:
            return {
                ...state,
                studentList: [...state.studentList, action.payload]

            }

        case EDIT_STUDENT:
            return {
                ...state,
                studentList: state.studentList.map((student) => (
                    student.EMail === action.payload.id ? action.payload.updatedStudent : state
                ))
            }

        case DELETE_STUDENT:
            return {
                ...state,
                studentList: state.studentList.filter((student) => student.EMail !== action.payload)
            }
        default: return state
    }
}


export default studentReducer