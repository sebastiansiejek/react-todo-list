export interface ITask {
  id: string
  candidate: string
  task: string
  is_completed: boolean
}

export type ITasks = [ITask]
