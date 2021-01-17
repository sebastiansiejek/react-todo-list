import { axiosInstance } from './config'

class ApiMethods {
  static async getTasks() {
    return await axiosInstance.get('')
  }

  static async addTask(task: string, isCompleted: 0 | 1, id?: string) {
    const formData = new FormData()
    formData.append('task', task)
    formData.append('is_completed', `${isCompleted}`)

    return await axiosInstance.post(`${id ? id : ''}`, formData)
  }

  static async removeTask(id: string) {
    return await axiosInstance.delete(id)
  }
}

export default ApiMethods
