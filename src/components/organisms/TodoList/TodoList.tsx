import AddTask from 'components/smarts/AddTask'
import { ITasks } from 'types/ITasks/Itasks'

interface IProps {
  tasks: ITasks
}

const TodoList: React.FC<IProps> = ({ tasks }) => {
  if (tasks.length) {
    return (
      <>
        <AddTask />
        <ul>
          {tasks.map(task => (
            <li key={task.id}>{task.task}</li>
          ))}
        </ul>
      </>
    )
  }

  return (
    <>
      <AddTask />
    </>
  )
}

export default TodoList
