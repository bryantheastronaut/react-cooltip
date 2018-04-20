/**
 * @class Tooltip
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Tippy from 'tippy.js';

export default class Tooltip extends Component {
  static propTypes = {
    tip: PropTypes.string,
    html: PropTypes.html,
    children: PropTypes.children.isRequired,
    show: PropTypes.bool,
    arrow: PropTypes.bool,

  }

  static defaultProps = {
    show: true,
    tip: '',
    html: null,
    arrow: true,
  }

  constructor() {
    super();
    this._container = null;
    this._tooltip = null;
  }

  componentDidMount() {
    this.init();
  }

  componentDidUpdate(prevProps) {
    if (this.props.show && !prevProps.show) {
      this.init();
    }
    if (!this.props.show && prevProps.show) {
      this.destroy();
    }
  }

  componentWillUnmount() {
    this.destroy();
  }

  init() {
    this._tooltip = new Tippy(this._container, {

    });
  }

  destroy() {
    if (this._tooltip) {
      this._tooltip.destroyAll();
      this._tooltip = null;
    }
  }

  render() {
    return this.props.show
      ? <div
        style={{display: 'inline' }}
        ref={(el) => { this._container = el; }}
      >{this.props.children}</div>
      : <div style={{ display: 'inline' }}>{this.props.children}</div>;
  }
}
