import ApiMethods from 'services/api/ApiMethods'
import styled from 'styled-components'
import { ITask } from 'types/ITasks/Itasks'
import { debounce } from 'lodash'
import { removeTask, updateTask } from 'store/slices/tasksSlice'
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
  const { id, is_completed } = task

  return (
    <ListItemStyled>
      <input
        type="checkbox"
        defaultChecked={is_completed ? true : false}
        onChange={e => {
          const isChecked = e.target.checked ? 1 : 0
          ApiMethods.addTask(task.task, isChecked, id)
            .then(() => {
              const updatedTask = { ...task }
              updatedTask.is_completed = isChecked
              dispatch(updateTask({ task: updatedTask }))
            })
            .catch(error => console.warn(error))
        }}
      />
      <input
        type="text"
        onChange={debounce((e: React.ChangeEvent<HTMLInputElement>) => {
          ApiMethods.addTask(e.target.value, task.is_completed ? 1 : 0, id)
            .then(() => dispatch(updateTask({ task })))
            .catch(error => console.warn(error))
        }, 300)}
        defaultValue={task.task ? task.task : ''}
      />
      <button
        onClick={() =>
          ApiMethods.removeTask(id)
            .then(response => dispatch(removeTask(response.data.data.id)))
            .catch(error => console.warn(error))
        }
      >
        Remove
      </button>
    </ListItemStyled>
  )
}

export default ListItem
