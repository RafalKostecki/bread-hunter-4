import React from 'react';

const BoardField = ({id}) => {
    return (
        <div className="boardField" id={id}>
            {id}
        </div>
    )
}

export default BoardField;