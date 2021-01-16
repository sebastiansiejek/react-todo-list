import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addTask } from 'store/slices/tasksSlice'
import styled from 'styled-components'

type Inputs = {
  task: string
}

const FormStyled = styled.form`
  display: flex;

  input {
    padding: 0.7rem;
    flex: 1;
  }
`

const AddTaskInput: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>()
  const dispatch = useDispatch()

  return (
    <FormStyled
      onSubmit={handleSubmit(e => {
        dispatch(
          addTask({
            task: e.task,
            candidate: '',
            is_completed: false,
            id: ''
          })
        )
        reset()
      })}
    >
      <input name="task" autoComplete="off" required ref={register} />
      <button type="submit">Add</button>
    </FormStyled>
  )
}

export default AddTaskInput
