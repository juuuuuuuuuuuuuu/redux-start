// 리덕스와 연동된 컨테이너 컴포넌트 작성
import React from 'react';
import Counter from '../components/Counter';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from '../store/modules/counter';

const CounterContainer = (props) => {
  return (
    <Counter
      onIncrement={props.increment}
      onDecrement={props.decrement}
      number={props.number}
    />
  )
}

export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  (dispatch) => bindActionCreators(counterActions, dispatch)
)(CounterContainer);