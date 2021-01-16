import { ITasks } from 'types/ITasks/Itasks'

interface IProps {
  tasks: ITasks
}

const TodoList: React.FC<IProps> = ({ tasks }) => {
  if (tasks.length) {
    return (
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.task}</li>
        ))}
      </ul>
    )
  }

  return <></>
}

export default TodoList
