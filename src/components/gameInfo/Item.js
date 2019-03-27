import React from 'react';
import PropTypes from 'prop-types';


const Item = ({name, value, pic}) => {
    return (
        <div className="item" id={`gi-${name}`}>
            <div className="item__pic">
                <img src={pic} alt={name} />
            </div>
            <div className="item__value">
                <span>{value}</span>
            </div>
        </div>
    )
}

Item.propTypes = {
    pic: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.any
}

  
export default Item;
