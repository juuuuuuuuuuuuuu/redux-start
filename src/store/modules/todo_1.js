import { createAction, handleActions } from 'redux-actions';
import { Record, List } from 'immutable';

// 액션 생성
const INSERT = 'todo/insert';
const REMOVE = 'todo/remove';
const TOGGLE = 'todo/toggle';
const CHANGE_INPUT = 'todo/changeInput';

// 액션함수 생성
// 어떤 값을 파라미터로 받는지 체크
export const insert = createAction(INSERT, text => text);
export const remove = createAction(REMOVE, id => id);
export const toggle = createAction(TOGGLE, id => id);
export const changeInput = createAction(CHANGE_INPUT, input => input);


let id = 0;

// 초기값
// Record 함수: 레코드 형태 데이터를 만드는 함수를 반환, 만든 뒤에 () 붙여야 데이터 생성
const initialState = Record({
  todos: List(),
  input: '',
})();



// 리듀서
// action객체에는 payload라는 값이 있고 거기서 어떤 값을 빼오는 구조
export default handleActions({
  [INSERT]: (state, {payload: text}) => {
    const item = Record({ id: id ++, text, checked: false })();
    return state.update('todos', todos => todos.push(item));
  },
  [REMOVE]: (state, {payload: id}) => {
    const findIndex = state.todos.findIndex(v => v.id === id);
    return state.removeIn(['todos', findIndex]);
  },
  [TOGGLE]: (state, {payload: id}) => {
    const findIndex = state.todos.findIndex(v => v.id === id);
    return state.updateIn(['todos', findIndex, 'checked'], checked => !checked);
  },
  [CHANGE_INPUT]: (state, action) => {
    return state.set('input', action.payload)
  }
}, initialState);