// 리덕스와 연동된 컨테이너 컴포넌트 작성
import React, { useCallback } from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as counterActions from '../store/modules/counter_1';

const CounterContainer = () => {
  // const handleIncrement = () => CounterActions.increment();
  // const handleDecrement = () => CounterActions.decrement();

  // useSelector: mapStatetoProps 대신 사용, 두번째 파라미터는 배열로 어떤 값이 바뀌었을 때 selector를 재정의함,
  // 두번째 파라미터 생략시 매번 렌더링 될 때마다 selector 함수로 새로 정의
  // 두번째 파라미터 []로 하면 초기 세팅시에마 정의됨 (useCallback과 비슷)
  // useSelector도 useMemo 사용하고 있음
  const number = useSelector(state => state.counter.number, []);

  // useDispatch: apDisptachtoProps
  const dispatch = useDispatch();
  const handleIncrement = useCallback(() => dispatch({type: 'counter/INCREMENT'}), [dispatch]);
  const handleDecrement = useCallback(() => dispatch({type: 'counter/DECREMENT'}), [dispatch]);

  return (
    <Counter
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      number={number}
    />
  )
}

export default CounterContainer;

// export default connect(
//   (state) => ({
//     number: state.counter.number
//   }), 
//   (dispatch) => ({
//     CounterActions: bindActionCreators(counterActions, dispatch)
//   })
// )(CounterContainer);