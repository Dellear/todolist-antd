import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION,
} from './actionTypes';

const defaultState = {
  inputValue: 'ddsdsd',
  list: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case INIT_LIST_ACTION:
      return Object.assign({}, state, {
        inputValue: '',
        list: action.data
      });
    case CHANGE_INPUT_VALUE:
      return Object.assign({}, state, { inputValue: action.value });
    case ADD_TODO_ITEM:
      if (!state.inputValue) {
        return state;
      }
      return Object.assign({}, state, {
        inputValue: '',
        list: [...state.list, state.inputValue]
      });
    case DELETE_TODO_ITEM:
      return Object.assign({}, state, {
        list: state.list.filter((item, index) => index !== action.index)
      });
    default:
      return state;
  }
}