import React from 'react';
import PropTypes from 'prop-types';


const Char = ({name, pic, chooseChar, selected}) => {
    const char = {
        name, 
        pic
    }

    return (
        <div className="characters__char" onClick={() => chooseChar(char)}>
            <img src={pic} alt={name} />
            <span>{selected === name ? 'selected' : name}</span>
        </div>
    )
}


Char.propTypes = {
    name: PropTypes.string.isRequired,
    pic: PropTypes.string.isRequired,
    selected: PropTypes.string.isRequired,
    chooseChar: PropTypes.func.isRequired
};


export default Char;
