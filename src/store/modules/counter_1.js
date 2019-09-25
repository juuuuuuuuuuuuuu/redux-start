import { createAction, handleActions } from 'redux-actions';


// 액션 타입 정의
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션함수 생성
// export const increment = () => ({type: INCREMENT});
// export const decrement = () => ({type: DECREMENT});


// 액션함수 생성 - createAction 사용
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// 모듈 초기 상태값
const initialState = {
  number: 0,
}

// 리듀서 만들어서 내보냄 - swtich 구문 사용
// switch 구문은 {} 으로 되어있기 때문에 중복되는 변수 사용 불가능 
// export default function reducer(state = initalState, action) {
//   switch(action.type) {
//     case INCREMENT:
//       return { number: state.number + 1}
//     case DECREMENT:
//         return { number: state.number - 1}
//     default:
//       break;
//   }
// }

//리듀서 - handleActions 사용
//첫번째 파라미터는 액션 처리하는 함수로 이루어진 객체, 두번째 파라미터는 초기값
export default handleActions({
  [INCREMENT]: (state, action) => {
    return { number: state.number + 1 };
  },
  // action 객체를 참조하지 않으니까 이렇게 생략을 할 수도 있겠죠?
  // state 부분에서 비구조화 할당도 해주어서 코드를 더욱 간소화시켰습니다.
  [DECREMENT]: ({ number }) => ({ number: number - 1 })
}, initialState);

