export interface ITask {
  id: string
  candidate: string
  task: string
  is_completed: 0 | 1
}

export type ITasks = Array<ITask>
