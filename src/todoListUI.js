import React, { Component } from 'react';
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {
    render() {
        return (
          <div style={{margin: '10px 20px' }}>
            <div>
              <h2>TodoList</h2>
              <Input 
                placeholder="please enter..." 
                value={this.props.inputValue} 
                style={{width: '300px', marginRight: '20px' }} 
                onChange={this.props.handleInputChange}
              />
              <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
            </div>
            <List
              style={{width: '400px', marginTop: '10px'}}
              bordered
              dataSource={this.props.list}
              renderItem={(item, index) => (
                <List.Item onClick={() => {this.props.handleItemDelete(index)}}>
                  <div>{item}</div>
                </List.Item>
              )}
            />
          </div>
        );
      }
}

export default TodoListUI;