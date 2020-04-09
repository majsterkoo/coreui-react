import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { sidebarCssClasses, checkBreakpoint, validBreakpoints } from './Shared';
import toggleClasses from './Shared/toggle-classes';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  display: PropTypes.string,
  fixed: PropTypes.bool,
  isOpen: PropTypes.bool,
  offCanvas: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  size: PropTypes.string,
};

const defaultProps = {
  tag: 'aside',
  id: 'aside',
  display: '',
  fixed: false,
  isOpen: false,
  offCanvas: true,
  size: 'md',
};

class AppAside extends Component {
  constructor(props) {
    super(props);

    this.isFixed = this.isFixed.bind(this);
    this.isOffCanvas = this.isOffCanvas.bind(this);
    this.displayBreakpoint = this.displayBreakpoint.bind(this);
    this.asideToggle = this.asideToggle.bind(this);
  }

  componentDidMount() {
    this.isFixed(this.props.fixed);
    this.isOffCanvas(this.props.offCanvas);
    this.displayBreakpoint(this.props.display);
  }

  isFixed(fixed) {
    if (fixed) { document.body.classList.add('c-sidebar-fixed'); }
  }

  isOffCanvas(offCanvas) {
    if (offCanvas) { document.body.classList.add('c-sidebar-off-canvas'); }
  }

  displayBreakpoint(display) {
    if (display && checkBreakpoint(display, validBreakpoints)) {
      const cssClass = `c-sidebar-${display}-show`
      toggleClasses(cssClass, sidebarCssClasses, true, this.props.id);
    }
  }

  toggle (force) {
    const [display, mobile] = [this.props.display, this.props.mobile];
    let cssClass = sidebarCssClasses[0];
    if (!mobile && display && checkBreakpoint(display, validBreakpoints)) {
      cssClass = `c-sidebar-${display}-show`
    }
    toggleClasses(cssClass, sidebarCssClasses, force, 'aside')
  }

  asideToggle(e) {
    e.preventDefault();
    this.toggle()
  }

  render() {
    const { className, children, tag: Tag, size, ...attributes } = this.props;

    delete attributes.display
    delete attributes.fixed
    delete attributes.offCanvas
    delete attributes.isOpen

    const sidebarSize = 'c-sidebar-' + size;

    const classes = classNames(className, 'c-sidebar', 'c-sidebar-right', 'c-sidebar-overlaid', 'c-sidebar-light', sidebarSize);

    return (
      <Tag {...attributes} className={classes}>
        <button className="c-sidebar-close c-class-toggler" onClick={(e) => this.asideToggle(e)}><i className="c-icon cil-x" /></button>
        {children}
      </Tag>
    );
  }
}

AppAside.propTypes = propTypes;
AppAside.defaultProps = defaultProps;

export default AppAside;
