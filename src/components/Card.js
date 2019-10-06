import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <h3>{props.name}</h3>
        </div>
    );
}

export default Card;