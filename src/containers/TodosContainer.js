// 리덕스와 연동된 컨테이너 컴포넌트 작성

import React from 'react';
import Todos from '../components/Todos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../store/modules/todo';
import { TodoActions } from '../store/actionCreators';


const TodosContainer = props => {
  const handleChange = e => {
    TodoActions.changeInput(e.target.value);
  };

  const handleInsert = () => {
    const {input, todos} = props;
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
      input={props.input}
      todos={props.todos}
      onChange={handleChange}
      onInsert={handleInsert}
      onToggle={handleToggle}
      onRemove={handleRemove}
    />
  );
};

export default connect(
  ({todo}) => ({
    input: todo.get('input'),
    todos: todo.get('todos')
  })
)(TodosContainer);
