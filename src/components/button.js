import React from 'react';
import PropTypes from 'prop-types';


const Button = ({text, modifier, click}) => {
  const mod = modifier ? `button--${modifier}` : '';

  return (
    <button className={`button ${mod}`} onClick={click}>
        <span>{text}</span>
    </button>
  )
}


Button.propTypes = {
  text: PropTypes.string.isRequired,
	modifier: PropTypes.string,
	click: PropTypes.function
}


export default Button;