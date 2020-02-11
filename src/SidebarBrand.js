import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  brand: PropTypes.any,
  full: PropTypes.any,
  minimized: PropTypes.any
};

const defaultProps = {
  tag: 'div'
};

class AppSidebarBrand extends Component {
  imgSrc(brand) {
    return brand.src ? brand.src : '';
  }

  imgWidth(brand) {
    return brand.width ? brand.width : 'auto';
  }

  imgHeight(brand) {
    return brand.height ? brand.height : 'auto';
  }

  imgAlt(brand) {
    return brand.alt ? brand.alt : '';
  }

  navbarBrandImg(props, classBrand, key) {
    return (
      <img
          src={this.imgSrc(props)}
          width={this.imgWidth(props)}
          height={this.imgHeight(props)}
          alt={this.imgAlt(props)}
          className={classBrand}
          key={key.toString()}
      />
    );
  }

  render() {
    const { className, children, tag: Tag, ...attributes } = this.props;
    const classes = classNames(className, 'c-sidebar-brand');

    const img = [];
    if (this.props.brand) {
      const props = this.props.brand;
      const classBrand = 'c-sidebar-brand';
      img.push(this.navbarBrandImg(props, classBrand, img.length + 1));
    }
    if (this.props.full) {
      const props = this.props.full;
      const classBrand = 'c-sidebar-brand-full';
      img.push(this.navbarBrandImg(props, classBrand, img.length + 1));
    }
    if (this.props.minimized) {
      const props = this.props.minimized;
      const classBrand = 'c-sidebar-brand-minimized';
      img.push(this.navbarBrandImg(props, classBrand, img.length + 1));
    }

    delete attributes.brand;
    delete attributes.full;
    delete attributes.minimized;

    return (
      <Tag {...attributes} className={classes}>
        {children || img}
      </Tag>
    );
  }
}

AppSidebarBrand.propTypes = propTypes;
AppSidebarBrand.defaultProps = defaultProps;

export default AppSidebarBrand;
