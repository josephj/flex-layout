import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class CurrentWidth extends Component {
  static propTypes = {
    children: PropTypes.func,
    debounceTime: PropTypes.number
  };
  static defaultProps = {
    debounceTime: 300
  };
  constructor(props) {
    super(props);

    this.state = {
      currentWidth: null,
      currentHeight: null
    };

    this.wrapperEl = null;
    this.debounceResizeHandler = _.debounce(
      this.handleWindowResize,
      props.debounceTime
    );
  }
  componentWillMount() {
    window.addEventListener('resize', this.debounceResizeHandler);
  }
  componentDidMount() {
    const wrapperEl = this.wrapperEl;
    const currentWidth = wrapperEl ? wrapperEl.offsetWidth : 0;
    const currentHeight = wrapperEl ? wrapperEl.parentNode.offsetHeight: 0;
    this.setState({ currentWidth, currentHeight });
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.debounceResizeHandler);
  }
  handleWindowResize = () => {
    const wrapperEl = this.wrapperEl;
    const currentWidth = wrapperEl ? wrapperEl.offsetWidth : 0;
    const currentHeight = wrapperEl ? wrapperEl.parentNode.offsetHeight : 0;
    this.setState({ currentWidth, currentHeight });
  };
  render() {
    const { children, debounceTime, ...otherProps } = this.props;
    const { currentWidth, currentHeight } = this.state;
    return (
      <div
        ref={el => {
          this.wrapperEl = el;
        }}
        {...otherProps}>
        {children(currentWidth, currentHeight)}
      </div>
    );
  }
}
