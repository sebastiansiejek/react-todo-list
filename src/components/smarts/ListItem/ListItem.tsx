import styled from 'styled-components'
import { ITask } from 'types/ITasks/Itasks'
import { removeTask, setComplete } from 'store/slices/tasksSlice'
import { useDispatch } from 'react-redux'

const ListItemStyled = styled.li`
  list-style: none;
  display: flex;

  input[type='text'] {
    padding: 0.6rem;
    flex: 1;
  }

  input[type='checkbox'] {
    align-self: center;
  }

  &:not(:last-child) {
    padding-bottom: 0.6rem;
    margin-bottom: 0.6rem;
    border-bottom: 0.1rem solid lightgray;
  }
`

interface IProps {
  task: ITask
}

const ListItem: React.FC<IProps> = ({ task }) => {
  const dispatch = useDispatch()

  return (
    <ListItemStyled>
      <input
        type="checkbox"
        onChange={e =>
          dispatch(setComplete({ id: task.id, is_completed: e.target.checked }))
        }
      />
      <input type="text" readOnly value={task.task} />
      <button onClick={() => dispatch(removeTask(task.id))}>Remove</button>
    </ListItemStyled>
  )
}

export default ListItem
