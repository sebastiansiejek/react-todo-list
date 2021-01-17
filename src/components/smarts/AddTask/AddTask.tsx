import ApiMethods from 'services/api/ApiMethods'
import styled from 'styled-components'
import { addTask } from 'store/slices/tasksSlice'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

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
        ApiMethods.addTask(e.task, 0)
          .then(response => {
            dispatch(addTask(response.data.data[0]))
            reset()
          })
          .catch(error => console.warn(error))
      })}
    >
      <input name="task" autoComplete="off" required ref={register} />
      <button type="submit">Add</button>
    </FormStyled>
  )
}

export default AddTaskInput
