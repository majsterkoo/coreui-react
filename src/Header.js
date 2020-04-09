import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fixed: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

const defaultProps = {
  tag: 'header',
  fixed: false
};

class AppHeader extends Component {
  componentDidMount() {
    this.isFixed(this.props.fixed);
  }

  isFixed(fixed) {
    if (fixed) { document.body.classList.add('c-header-fixed'); }
  }

  // breakpoint(breakpoint) {
  //   return breakpoint || '';
  // }

  render() {
    const { className, children, tag: Tag, ...attributes } = this.props;
    const fixed_class = this.props.fixed ? 'c-header-fixed' : '';

    delete attributes.fixed;

    const classes = classNames(className, 'c-header', 'c-header-light', fixed_class);

    return (
      <Tag className={classes} {...attributes}>
        {children}
      </Tag>
    );
  }
}

AppHeader.propTypes = propTypes;
AppHeader.defaultProps = defaultProps;

export default AppHeader;
