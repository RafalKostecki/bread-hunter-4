import React from 'react';
import PropTypes from 'prop-types';


const Item = ({pic, name, id, value}) => {

    return (
        <div>
            Item component works
        </div>
    )
}

Item.propTypes = {
    pic: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.number
}

export default Item;
