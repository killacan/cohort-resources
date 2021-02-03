import { connect } from 'react-redux';
import TodoShow from './todo_show';
// Actions
import { deleteTodo, fetchTodo } from '../../actions/todo_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return({
    todo: state.todos[ownProps.match.params.id]
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // ownProps.match.params.id => wild card
  // debugger
  return({
    fetchTodo: () => dispatch(fetchTodo(ownProps.match.params.id)),
    destroyTodo: (todo) => dispatch(deleteTodo(todo))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoShow);
