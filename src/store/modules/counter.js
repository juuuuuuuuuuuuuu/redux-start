// 카운터 관련 상태 로직

import { createAction, handleActions } from 'redux-actions';
// 액션타입
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'coutner/DECREMENT';

// 액션함수: 다른 파일에서 불러와야하므로 내보내줌
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// 모듈 초기 상태 정의
const initialState = {
  number: 0
};

// handleActions는 첫번째 파라미터는 액션처리하는 함수, 두번째는 초기 상태
export default handleActions({
  [INCREMENT]: (state,action) => {
    return {number: state.number + 1};
  },
  [DECREMENT]: ({number}) => ({number:number -1})
}, initialState);