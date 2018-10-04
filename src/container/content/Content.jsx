import React, { Component } from 'react';
import style from './Content.scss';

export default class Content extends Component {
  render() {
    return (
      <div className={style.container}>
        这是内容部分
      </div>
    )
  }
}
