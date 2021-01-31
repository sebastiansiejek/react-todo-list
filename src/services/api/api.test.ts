/* eslint-disable jest/no-conditional-expect */
import ApiMethods from './ApiMethods'

it('check if task have correct properties', async () => {
  const tasks = await ApiMethods.getTasks()

  if (tasks.data.data.length >= 0) {
    expect(tasks.data.data[0]).toHaveProperty('candidate')
    expect(tasks.data.data[0]).toHaveProperty('id')
    expect(tasks.data.data[0]).toHaveProperty('task')
    expect(tasks.data.data[0]).toHaveProperty('is_completed')
  }
})
