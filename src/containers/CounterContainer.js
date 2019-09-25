// 리덕스와 연동된 컨테이너 컴포넌트 작성
import React from 'react';
import Counter from '../components/Counter';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from '../store/modules/counter_1';

const CounterContainer = ({number, CounterActions}) => {
  const handleIncrement = () => CounterActions.increment();
  const handleDecrement = () => CounterActions.decrement();
  return (
    <Counter
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      number={number}
    />
  )
}

export default connect(
  (state) => ({
    number: state.counter.number
  }), 
  (dispatch) => ({
    CounterActions: bindActionCreators(counterActions, dispatch)
  })
)(CounterContainer);