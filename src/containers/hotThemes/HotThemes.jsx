import './HotThemes.scss';

import React, { Component } from 'react';
import faker from 'faker';

import PoolSectionHeader from '../../components/poolSectionHeader/PoolSectionHeader';
import ThemeTag from '../../components/themeTag/ThemeTag';

export class HotThemes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotThemes: Array.from({ length: 12 }).map(__ => faker.name.lastName()),
      offsetTop: 0,
      hasTransition: true,
    };
  }

  componentDidMount() {
    // setInterval(__ => {
    //     if (this.state.offsetTop <= -this.refs['scroll-tags'].clientHeight) {
    //         this.setState({
    //             hasTransition: false,
    //             offsetTop: 120,
    //         });
    //     } else {
    //         this.setState({
    //             hasTransition: true,
    //             offsetTop: this.state.offsetTop - 120,
    //         });
    //     }
    // }, 2000);
  }

  _renderHotThemes = __ => this.state.hotThemes.map((theme, index) => (
    <ThemeTag key={index} theme={theme} />
  ))

  render() {
    return (
      <div className="hot-theme">
        <PoolSectionHeader
          iconType="#icon-huo"
          sectionTitle="热门主题"
        />
        <div className="scroll-tags-container">
          <div ref="scroll-tags" className="scroll-tags" style={{ top: this.state.offsetTop, transition: this.state.hasTransition ? 'top 1s' : 'none' }}>{this._renderHotThemes()}</div>
        </div>
        <div className="hot-theme-footer">
          <span className="see-more">查看更多></span>
        </div>
      </div>
    );
  }
}

export default HotThemes;
