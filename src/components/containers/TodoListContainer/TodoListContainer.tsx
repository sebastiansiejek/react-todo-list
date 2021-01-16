import TodoList from 'components/organisms/TodoList'
import { connect } from 'react-redux'
import { getTasks, initialState } from 'store/slices/tasksSlice'
import { ITasks } from 'types/ITasks/Itasks'

interface IProps {
  tasks?: ITasks
}

const TodoListContainer: React.FC<IProps> = ({ tasks }) => {
  return <TodoList tasks={tasks ? tasks : []} />
}

export default connect((state: typeof initialState) => {
  return {
    ...getTasks(state)
  }
})(TodoListContainer)
