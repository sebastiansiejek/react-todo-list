import AddTask from 'components/smarts/AddTask'
import styled from 'styled-components'
import { ITasks } from 'types/ITasks/Itasks'

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
  padding: 0.6rem;
  border: 0.1rem solid lightgray;

  &:not(:last-child) {
    border-bottom: none;
  }
`

const TodoList: React.FC<IProps> = ({ tasks }) => {
  if (tasks.length) {
    return (
      <TodoListStyled>
        <AddTask />
        <ul>
          {tasks.map(task => (
            <ListItem key={task.id}>{task.task}</ListItem>
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
