import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

class IndexPage extends React.PureComponent{
  constructor (props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.state={
      c:'c'
    }
  }
  handleDelete = (id) => {
    const {dispatch} = this.props;
    dispatch({
      type: 'example/save',
      payload: {
        b:id
      },
    });
  }
  render(){
    return (
      <div className={styles.normal}>
        {/*<h1 className={styles.title} onClick={this.handleDelete.bind(this,'b')}>{this.state.c}Yay! Welcome to dva!</h1>*/}
        {/*箭头函数解决this问题*/}
        <h1 className={styles.title} onClick={()=>this.handleDelete('b')}>{this.state.c}Yay! Welcome to dva!</h1>
        <p>点击标题数据变化{this.props.example.b ? this.props.example.b: this.props.example.a}</p>
        {/*<div className={styles.welcome} />*/}
        {/*<ul className={styles.list}>s
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
        </ul>*/}
      </div>
    );
  }
}
/*const IndexPage = ({ dispatch,example }) => {
  console.log(example)
  function handleDelete(id) {
    dispatch({
      type: 'example/save',
      payload: {
        b:2
      },
    });
  }
  return (
    <div className={styles.normal}>
      <h1 className={styles.title} onClick={handleDelete}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}*/


IndexPage.propTypes = {
};

export default connect(({ example }) => {
  console.log(example);
  return{
  example,
}})(IndexPage);
