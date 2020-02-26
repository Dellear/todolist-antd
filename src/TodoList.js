import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import './style.css';
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getInitList,
} from './store/actionCreators';


class TodoList extends Component {
  // 组件渲染
  render() {
    const { inputValue, handleInputChange, handleBtnClick, list, handleItemDelete } = this.props;

    return (
      <div style={{ margin: '10px 20px' }}>
        <div>
          <h2>TodoList</h2>
          <Input
            placeholder="please enter..."
            value={inputValue}
            style={{ width: '300px', marginRight: '20px' }}
            onChange={handleInputChange}
          />
          <Button type="primary" onClick={handleBtnClick}>提交</Button>
        </div>
        <List
          style={{ width: '400px', marginTop: '10px' }}
          bordered
          dataSource={list}
          renderItem={(item, index) => (
            <List.Item onClick={() => { handleItemDelete(index) }}>
              <div>{item}</div>
            </List.Item>
          )}
        />
      </div>
    );
  }

  async componentDidMount() {
    this.props.initList();
  }
}

const mapStateToProps = (state, ownProps) => ({
  inputValue: state.inputValue,
  list: state.list
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  initList() {
    bindActionCreators(getInitList, dispatch)();
  },
  handleInputChange(e) {
    bindActionCreators(getInputChangeAction, dispatch)(e.target.value);
  },
  handleBtnClick() {
    bindActionCreators(getAddItemAction, dispatch)();
  },
  handleItemDelete(index) {
    bindActionCreators(getDeleteItemAction, dispatch)(index);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
