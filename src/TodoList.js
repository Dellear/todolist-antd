import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import store from './store';
import './style.css';

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
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action);
  }

  handleBtnClick = () => {
    const action = {
      type: 'add_todo_item'
    }
    store.dispatch(action);
  }

  handleItemDelete(index) {
    console.log(index);
    const action = {
      type: 'delete_todo_item',
      value: index
    };
    store.dispatch(action);
  }
}

export default TodoList;