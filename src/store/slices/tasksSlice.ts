import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITask, ITasks } from 'types/ITasks/Itasks'

interface ITasksState {
  tasks: ITasks
}

export const initialState: ITasksState = {
  tasks: []
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state: ITasksState, action: PayloadAction<ITask>) {
      state.tasks.push(action.payload)
    },
    removeTask(state: ITasksState, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    },
    toggleComplete(
      state: ITasksState,
      action: PayloadAction<{ id: string; is_completed: boolean }>
    ) {
      const { id, is_completed } = action.payload
      const task = state.tasks.find(task => task.id === id)
      if (task) task.is_completed = is_completed
    }
  }
})

export const getTasks = (state: ITasksState) => state.tasks

export const { addTask, removeTask, toggleComplete } = tasksSlice.actions
export default tasksSlice.reducer
