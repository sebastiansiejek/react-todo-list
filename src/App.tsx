import TodoListContainer from 'components/containers/TodoListContainer'
import store from 'store/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoListContainer />
      </div>
    </Provider>
  )
}

export default App
