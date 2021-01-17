import AddTask from 'components/smarts/AddTask'
import ListItem from 'components/smarts/ListItem'
import Switch from 'react-switch'
import styled from 'styled-components'
import { ITasks } from 'types/ITasks/Itasks'
import { useState } from 'react'

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

const SwitchCompletedVisibilityStyled = styled.label`
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-right: 0.6rem;
  }
`

const TodoList: React.FC<IProps> = ({ tasks }) => {
  const [isCompletedVisible, setCompletedVisible] = useState(false)

  if (tasks.length) {
    return (
      <TodoListStyled>
        <SwitchCompletedVisibilityStyled>
          <span>Show completed tasks</span>
          <Switch
            onChange={e => setCompletedVisible(e)}
            checked={isCompletedVisible}
          />
        </SwitchCompletedVisibilityStyled>
        <AddTask />
        <ul>
          {isCompletedVisible &&
            tasks
              .filter(task => task.is_completed)
              .map(task => <ListItem task={task} key={task.id}></ListItem>)}
          {!isCompletedVisible &&
            tasks.map(task => <ListItem task={task} key={task.id}></ListItem>)}
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
