import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITask, ITasks } from 'types/ITasks/Itasks'

interface ITasksState {
  tasks: ITasks
}

export const initialState: ITasksState = { tasks: [] }

const usersSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state: ITasksState, action: PayloadAction<ITask>) {
      state.tasks.push(action.payload)
    }
  }
})

export const { addTask } = usersSlice.actions
export default usersSlice.reducer
