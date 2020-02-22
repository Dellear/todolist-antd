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
        case 'change_input_value':
            return Object.assign({}, state, { inputValue: action.value });
        case 'add_todo_item':
            return Object.assign({}, state, { 
                inputValue: '',
                list: [...state.list, state.inputValue]
            });
        case 'delete_todo_item':
            return Object.assign({}, state, { 
                list: state.list.filter((item, index) => index !== action.value)
            });
        default:
            return state;
    }
}