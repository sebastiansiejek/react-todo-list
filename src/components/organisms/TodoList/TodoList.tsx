import { ITasks } from 'types/ITasks/Itasks'

interface IProps {
  tasks: ITasks
}

const TodoList: React.FC<IProps> = ({ tasks }) => {
  return (
    tasks && (
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.task}</li>
        ))}
      </ul>
    )
  )
}

export default TodoList
