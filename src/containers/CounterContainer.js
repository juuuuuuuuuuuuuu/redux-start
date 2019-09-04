// 리덕스와 연동된 컨테이너 컴포넌트 작성
import React from 'react';
import Counter from '../components/Counter';
import {connect} from 'react-redux';
import { CounterActions } from '../store/actionCreators';


const CounterContainer = (props) => {
  return (
    <Counter
      onIncrement={CounterActions.increment}
      onDecrement={CounterActions.decrement}
      number={props.number}
    />
  )
}

export default connect(
  (state) => ({
    number: state.counter.number,
  })
)(CounterContainer);