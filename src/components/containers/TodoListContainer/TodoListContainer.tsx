import ApiMethods from 'services/api/ApiMethods'
import TodoList from 'components/organisms/TodoList'
import { ITasks } from 'types/ITasks/Itasks'
import { connect } from 'react-redux'
import { getTasks, initialState } from 'store/slices/tasksSlice'
import { setTasks } from 'store/slices/tasksSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

export interface IProps {
  tasks?: ITasks
}

const TodoListContainer: React.FC<IProps> = ({ tasks }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    ApiMethods.getTasks()
      .then(response => dispatch(setTasks(response.data.data)))
      .catch(err => console.warn(err.response.data))
  }, [])

  return <TodoList tasks={tasks ? tasks : []} />
}

export default connect((state: typeof initialState) => {
  return {
    ...getTasks(state)
  }
})(TodoListContainer)
