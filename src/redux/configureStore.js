import { createStore, applyMiddleware, combineReducers } from 'redux';
import loggerMiddleware from 'redux-logger';
import todo from './modules/todo'
import excercises from './modules/excercises';

const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore); // apply logger to redux

const reducer = combineReducers({
  todo,
  excercises

});

const configureStore = (initialState) => {
  console.log("this is it - - -- " ,initialState);
  console.log(createStoreWithMiddleware);
  return createStoreWithMiddleware(reducer, initialState);
}
export default configureStore;