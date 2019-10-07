import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <h3>{props.name}</h3>
            <ul>
                { props.topicsCovered.map(topic =>
                <li>{topic}</li>) 
                }
            </ul>
        </div>
    );
}

export default Card;