import React from 'react';
import Card from './Card';

const Main = () => {
    return (
        <React.Fragment>
        <h2>These are the topics you've covered so far:</h2>
            <div class="card-container">
                <Card name="Starting Git" />
            </div>
        </React.Fragment>
    );
}

export default Main;