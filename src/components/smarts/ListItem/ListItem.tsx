import styled from 'styled-components'
import { ITask } from 'types/ITasks/Itasks'
import { removeTask } from 'store/slices/tasksSlice'
import { useDispatch } from 'react-redux'

const ListItemStyled = styled.li`
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

interface IProps {
  task: ITask
}

const ListItem: React.FC<IProps> = ({ task }) => {
  const dispatch = useDispatch()

  return (
    <ListItemStyled>
      <input readOnly value={task.task} />
      <button onClick={() => dispatch(removeTask(task.id))}>Remove</button>
    </ListItemStyled>
  )
}

export default ListItem
