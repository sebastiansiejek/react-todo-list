import AddTask from 'components/smarts/AddTask'
import styled from 'styled-components'
import { ITasks } from 'types/ITasks/Itasks'
import { removeTask } from 'store/slices/tasksSlice'
import { useDispatch } from 'react-redux'

interface IProps {
  tasks: ITasks
}

const TodoListStyled = styled.div`
  display: flex;
  max-width: 30rem;
  flex-direction: column;
  margin: 0 auto;

  ul {
    padding: 0;
  }
`

const ListItem = styled.li`
  list-style: none;
  display: flex;

  input {
    padding: 0.6rem;
    border: 0.1rem solid lightgray;
    flex: 1;
  }

  &:not(:last-child) {
    input {
      border-bottom: none;
    }
  }
`

const TodoList: React.FC<IProps> = ({ tasks }) => {
  const dispatch = useDispatch()

  if (tasks.length) {
    return (
      <TodoListStyled>
        <AddTask />
        <ul>
          {tasks.map(task => (
            <ListItem key={task.id}>
              <input readOnly value={task.task} />
              <button onClick={() => dispatch(removeTask(task.id))}>
                Remove
              </button>
            </ListItem>
          ))}
        </ul>
      </TodoListStyled>
    )
  }

  return (
    <TodoListStyled>
      <AddTask />
    </TodoListStyled>
  )
}

export default TodoList
