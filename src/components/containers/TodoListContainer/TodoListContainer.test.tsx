import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from 'store/store'
import TodoListContainer, { IProps } from './TodoListContainer'

it('should render TodoListContainer', () => {
  const defaultProps: IProps = {}
  const props = { ...defaultProps }
  const { asFragment } = render(
    <Provider store={store}>
      <TodoListContainer {...props} />
    </Provider>
  )

  expect(asFragment()).toMatchSnapshot()
})
