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

    updateTask(state: ITasksState, action: PayloadAction<{ task: ITask }>) {
      const index = state.tasks.findIndex(
        task => task.id === action.payload.task.id
      )

      if (index) state.tasks[index] = action.payload.task
    },

    setTasks(state: ITasksState, action: PayloadAction<ITasks>) {
      state.tasks = action.payload
    }
  }
})

export const getTasks = (state: ITasksState) => state.tasks

export const { addTask, removeTask, updateTask, setTasks } = tasksSlice.actions
export default tasksSlice.reducer
