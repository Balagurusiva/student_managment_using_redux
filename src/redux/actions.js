import { ADD_STUDENT, DELETE_STUDENT, EDIT_STUDENT } from "./ActionType"

 

export const addStudent = (newStudent) => (
    {
        type: ADD_STUDENT,
        payload: newStudent
    })


export const deleteStudent = (id) => (
    {
        type: DELETE_STUDENT,
        payload: id
    })


export const editStudent = (id, updatedStudent) => (
    {
        type: EDIT_STUDENT,
        payload: { id, updatedStudent }
    })
