import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import './style.css';
import store from './store';
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
} from './store/actionCreators';

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
      <div style={{margin: '10px 20px' }}>
        <div>
          <h2>TodoList</h2>
          <Input 
            placeholder="please enter..." 
            value={this.state.inputValue} 
            style={{width: '300px', marginRight: '20px' }} 
            onChange={this.handleInputChange}
          />
          <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
        </div>
        <List
          style={{width: '400px', marginTop: '10px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>
          )}
        />
      </div>
    );
  }

  handleInputChange = (e) => {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleBtnClick = () => {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleItemDelete(index) {
    console.log(index);
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;