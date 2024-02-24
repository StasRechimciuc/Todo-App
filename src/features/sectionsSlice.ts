 import { createSlice, PayloadAction } from '@reduxjs/toolkit'
 import { sectionState,SingleSection } from './types'

 const initialState:sectionState = {
    sections:[],
    activeSection: {title:'', id:0},
 }
 const sectionsSlice = createSlice({
     name:'sections',
     initialState:initialState,
     reducers:{
         addSection(state,action:PayloadAction<SingleSection>) {
             state.sections.push(action.payload)
         },
         deleteSection(state,action:PayloadAction<SingleSection>) {
             state.sections = state.sections.filter((section:SingleSection) => section.id !== action.payload.id) 
         },
         updateSections(state,action:PayloadAction<SingleSection[]>) {
             state.sections = action.payload
         },
         setActiveSection(state,action:PayloadAction<SingleSection>) {
             state.activeSection = action.payload
         },
         editSectionName(state, action: PayloadAction<{ id: number; newName: string | null }>) {
            const { id, newName } = action.payload;
            const sectionToUpdate = state.sections.find((section) => section.id === id)
            if (sectionToUpdate) {
              sectionToUpdate.title = newName;
            }
          },
     }
 })
 export const { 
      addSection,
      deleteSection,
      updateSections,
      setActiveSection,
      editSectionName
 } = sectionsSlice.actions
 export default sectionsSlice.reducer