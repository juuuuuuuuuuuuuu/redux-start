// 카운터 관련 상태 로직

// 액션타입
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'coutner/DECREMENT';

// 액션함수: 다른 파일에서 불러와야하므로 내보내줌
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// 모듈 초기 상태 정의
const initialState = {
  number: 0
};

// 리듀서 만들어서 내보내줌
export default function reducer(state = initialState.action) {
  // 액션의 타입에 따라 변화된 상태를 정의하여 반환
  switch (action.type) {
    case INCREMENT:
      return { number: state.number + 1 };
    case DECREMENT:
      return { number: state.number - 1 };
    default:
      return false;
  }
}