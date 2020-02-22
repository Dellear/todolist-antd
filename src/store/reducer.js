import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM,
  } from './actionTypes';

const defaultState = {
    inputValue: '123',
    list: [
        'aass',
        'fffg',
        'hhjn'
    ]
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            return Object.assign({}, state, { inputValue: action.value });
        case ADD_TODO_ITEM:
            return Object.assign({}, state, { 
                inputValue: '',
                list: [...state.list, state.inputValue]
            });
        case DELETE_TODO_ITEM:
            return Object.assign({}, state, { 
                list: state.list.filter((item, index) => index !== action.value)
            });
        default:
            return state;
    }
}