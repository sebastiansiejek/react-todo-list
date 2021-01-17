import AddTask from 'components/smarts/AddTask'
import ListItem from 'components/smarts/ListItem'
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

const TodoList: React.FC<IProps> = ({ tasks }) => {
  if (tasks.length) {
    return (
      <TodoListStyled>
        <AddTask />
        <ul>
          {tasks.map(task => (
            <ListItem task={task} key={task.id}></ListItem>
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
