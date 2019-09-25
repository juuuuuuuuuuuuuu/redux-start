// 리덕스와 연동된 컨테이너 컴포넌트 작성

import React from 'react';
import Todos from '../components/Todos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../store/modules/todo_1';


const TodosContainer = ({input, todos, TodoActions}) => {
  const handleChange = e => {
    TodoActions.changeInput(e.target.value);
  };

  const handleInsert = () => { 
    TodoActions.insert(input);
    TodoActions.changeInput('');
  }

  const handleToggle = (id) => {
    TodoActions.toggle(id);
  }

  const handleRemove = (id) => {
    TodoActions.remove(id);
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

// mapStatetoProps, mapDispatchtoProps
export default connect(
  (state) => ({
    input: state.todo.input,
    todos: state.todo.todos,
  }),
  (dispatch) => ({
    TodoActions: bindActionCreators(todoActions, dispatch)
  })
)(TodosContainer)


