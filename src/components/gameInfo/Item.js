import React from 'react';
import PropTypes from 'prop-types';


const Item = ({name, value, pic}) => {

    return (
        <div className="item" id={`gi-${name}`}>
            <div className="item__pic">{pic}</div>
            <div className="item__value">{value}</div>
        </div>
    )
}

Item.propTypes = {
    pic: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.any
}

export default Item;
