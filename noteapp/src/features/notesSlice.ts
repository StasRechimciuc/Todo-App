import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SingleNote,NotesState } from "./types";

const initialState:NotesState = {
    allNotes:[],
}

const notesSlice = createSlice({
    name:'notes',
    initialState,
    reducers:{
        addNote(state,action:PayloadAction<SingleNote>){
            state.allNotes.push(action.payload)
        },
        deleteNote(state, action: PayloadAction<SingleNote>) {
            state.allNotes = state.allNotes.filter((note:SingleNote) => note.id !== action.payload.id)
        },
        setNotes(state,action: PayloadAction<SingleNote[]>) {
            state.allNotes = action.payload
        },
    }
})

export default notesSlice.reducer
export const { addNote, deleteNote, setNotes } = notesSlice.actions