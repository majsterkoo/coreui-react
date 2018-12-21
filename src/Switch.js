import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  color: PropTypes.string,
  label: PropTypes.bool,
  outline: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.oneOf(['', 'alt'])
  ]),
  size: PropTypes.oneOf(['', 'lg', 'sm']),
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  defaultValue: PropTypes.any,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  form: PropTypes.any,
  name: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  role: PropTypes.oneOf(['switch', 'checkbox', 'radio']),
  type: PropTypes.oneOf(['checkbox', 'radio']),
  variant: PropTypes.oneOf(['', '3d', 'pill']),
  className: PropTypes.string,
  dataOn: PropTypes.string,
  dataOff: PropTypes.string,
};

const defaultProps = {
  color: 'secondary',
  label: false,
  outline: false,
  size: '',
  checked: false,
  defaultChecked: false,
  disabled: false,
  required: false,
  role: 'switch',
  type: 'checkbox',
  variant: '',
  dataOn: 'On',
  dataOff: 'Off',
};

class AppSwitch extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyboard = this.onKeyboard.bind(this);
    this.input = React.createRef();
    this.state = {
      checked: this.props.defaultChecked || this.props.checked,
      selected: []
    };
  }

  onChange(event) {
    const target = event.target;
    this.setState({
      checked: target.checked,
    })

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.checked !== prevProps.checked) {
      this.setState({
        checked: this.props.checked
      })
    }
  }

  onKeyboard(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      event.stopPropagation()
      const target = event.target.firstChild;
      this.setState({
        checked: !target.checked,
      })

      if (this.props.onChange) {
        this.props.onChange(event);
      }
    }
  }

  render() {
    const { className, disabled, color, name, label, outline, size, required, role, type, value, dataOn, dataOff, variant, ...attributes } = this.props;

    delete attributes.checked
    delete attributes.defaultChecked
    delete attributes.onChange

    const classes = classNames(
      className,
      'switch',
      label ? 'switch-label' : false,
      size ? `switch-${size}` : false,
      variant ? `switch-${variant}` : false,
      `switch${outline ? '-outline' : ''}-${color}${outline==='alt' ? '-alt' : ''}`,
      'form-check-label',
    );

    const inputClasses = classNames(
      'switch-input',
      'form-check-input',
    );

    const sliderClasses = classNames(
      'switch-slider',
    );

    return (
      <label className={classes} onKeyPress={this.onKeyboard} tabIndex={ disabled ? "-1" : "0" }>
        <input ref={this.input}
               type={type}
               role={role}
               aria-checked={this.state.checked}
               className={inputClasses}
               onChange={this.onChange}
               checked={this.state.checked}
               name={name}
               value={value}
               required={required}
               disabled={disabled}
               {...attributes}
        />
        <span className={sliderClasses} data-checked={dataOn} data-unchecked={dataOff}></span>
      </label>
    );
  }
}

AppSwitch.propTypes = propTypes;
AppSwitch.defaultProps = defaultProps;

export default AppSwitch;
