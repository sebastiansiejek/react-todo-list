import { configureStore, combineReducers } from '@reduxjs/toolkit'
import task, { initialState as taskState } from './slices/tasksSlice'

export interface IStore {
  task: typeof taskState
}

export const rootReducer = combineReducers({
  task
})

export default configureStore({
  reducer: rootReducer
})
