import React from 'react';
import PropTypes from 'prop-types';


const BoardField = ({id}) => {
    return (
        <div className="boardField" id={id}>
            
        </div>
    )
}

BoardField.propTypes = {
    id: PropTypes.string.isRequired
}

export default BoardField;