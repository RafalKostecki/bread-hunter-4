import React from 'react';
import PropTypes from 'prop-types';


const Char = ({name, pic}) => {
    return (
        <div className="characters__char">
            <img src={pic} alt={name} />
            <span>{name}</span>
        </div>
    )
}


Char.propTypes = {
    name: PropTypes.string.isRequired,
    pic: PropTypes.string.isRequired
};


export default Char;
