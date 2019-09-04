import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

// 액션타입
const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';


// 액션함수
// crateAction(액션이름, payloadCreator, metaCreator)
// payloadCreator: 생략되면 액션함수 파라미터가 그대로 payload가 됨
// metaCreator: 생략시 meta 값 생성하지 않음
export const changeInput = createAction(CHANGE_INPUT, value => value);
export const insert = createAction(INSERT, text => text);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

let id = 0;

const initialState = Map({
  input: '',
  todos: List(),
});

// 리듀서
export default handleActions({
  [CHANGE_INPUT]: (state,action) => state.set('input', action.payload),
  [INSERT]: (state, {payload: text}) => {
    const item = Map({id: id++, checked: false, text});
    return state.update('todos', todos => todos.push(item));
  },
  [TOGGLE]: (state, {payload: id}) => {
    const index = state.get('todos').findIndex(item => item.get('id') === id);
    return state.updateIn(['todos', index, 'checked'], checked => !checked);
  },
  [REMOVE]: (state, {payload: id}) => {
    const index = state.get('todos').findIndex(item => item.get('id') === id);
    return state.deleteIn(['todos', index]);
  }
}, initialState);