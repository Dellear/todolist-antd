import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './style.css';
import store from './store';
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getTodoList,
} from './store/actionCreators';
import TodoListUI from './todoListUI';


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
  }

  handleStoreChange = (a, b) => {
    this.setState(store.getState());
  }

  // 组件渲染
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    );
  }

  async componentDidMount() {
    const action = getTodoList();
    store.dispatch(action);
  }

  handleInputChange = (e) => {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleBtnClick = () => {
    if(!this.state.inputValue) {
      return;
    }
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleItemDelete = (index) => {
    console.log(index);
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;