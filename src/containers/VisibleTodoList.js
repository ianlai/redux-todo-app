import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

//todos is the prop in TodoList.js (components)
const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

//onTodoClick is the callback prop in TodoList.js (components)
const mapDispatchToProps = dispatch => ({
    onTodoClick: id => dispatch(toggleTodo(id))
})

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList)

export default VisibleTodoList