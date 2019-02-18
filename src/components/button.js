import React from 'react';
import PropTypes from 'prop-types';


const Button = ({text, modifier, click, disable=false}) => {
  const mod = modifier ? `button--${modifier}` : '';
  const disableClass = disable ? 'button--disable' : '';

  const clickHandler = disable ? ()=>{} : click;

  return (
    <button className={`button ${mod} ${disableClass}`} onClick={clickHandler}>
        <span>{text}</span>
    </button>
  )
}


Button.propTypes = {
  text: PropTypes.string.isRequired,
	modifier: PropTypes.string,
  click: PropTypes.function,
  disable: PropTypes.bool
}


export default Button;