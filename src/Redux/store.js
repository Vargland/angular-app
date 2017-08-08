import { createStore } from 'redux';
import reducer from './reducers/todoReducer';

let state = {};
let store = createStore(reducer, state);