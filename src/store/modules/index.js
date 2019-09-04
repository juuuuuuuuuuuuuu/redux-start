// 모든 모듈들을 불러와서 합치는 작업이 이뤄짐
// 여러개의 리듀서를 합쳐주는 역할

import {combineReducers} from 'redux';
import counter from './counter';
import todo from './todo';

export default combineReducers({
  counter,
  todo
});