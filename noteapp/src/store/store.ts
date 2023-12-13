import { configureStore ,combineReducers} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import sectionsReducer from '../features/sectionsSlice'
import notesReducer from '../features/notesSlice'

const RootReducer = combineReducers({
    sections:sectionsReducer,
    notes:notesReducer
})

const store = configureStore({
    reducer:RootReducer
})

export const useAppDispatch: () => typeof store.dispatch=useDispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
export default store