// 리덕스와 연동된 컨테이너 컴포넌트 작성

import React, { useCallback } from 'react';
import Todos from '../components/Todos';
import { useSelector, useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
import * as todoActions from '../store/modules/todo_1';


const TodosContainer = () => {
  // useSelector
  const { input, todos } = useSelector(state => ({ input: state.todo.input, todos: state.todo.todos}), []);

  // useDispatch
  const disptach = useDispatch();

  const handleChange = e => {
    disptach(todoActions.changeInput(e.target.value))
  };

  const handleInsert = () => {
    disptach(todoActions.insert(input))
    disptach(todoActions.changeInput(''))
  }

  const handleToggle = (id) => {
    disptach(todoActions.toggle(id));
  }

  const handleRemove = (id) => {
    disptach(todoActions.remove(id))
  }


  return (
    <Todos
      input={input}
      todos={todos}
      onChange={handleChange}
      onInsert={handleInsert}
      onToggle={handleToggle}
      onRemove={handleRemove}
    />
  );
};

export default TodosContainer;

// mapStatetoProps, mapDispatchtoProps
// export default connect(
//   (state) => ({
//     input: state.todo.input,
//     todos: state.todo.todos,
//   }),
//   (dispatch) => ({
//     TodoActions: bindActionCreators(todoActions, dispatch)
//   })
// )(TodosContainer)


