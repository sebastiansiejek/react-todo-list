import { configureStore, combineReducers } from '@reduxjs/toolkit'
import tasks, { initialState as taskState } from './slices/tasksSlice'

export interface IStore {
  tasks: typeof taskState
}

export const rootReducer = combineReducers({
  tasks
})

export default configureStore({
  reducer: rootReducer
})
