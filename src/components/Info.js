import React from 'react';
import PropTypes from 'prop-types';


const Info = ({ text }) => {
  return (
    <div className="info">
      <div className="info__content">
        { text }
      </div>
    </div>
  )
}

Info.propTypes = {
  text: PropTypes.string.isRequired
}

export default Info;