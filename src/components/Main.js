import React, {Component} from 'react';
import Card from './Card';

class Main extends Component {

    state = {
        cards: [
            {
                name: "Starting Git",
                topicsCovered: ["First commit", "Staging changed files", "git stash", "Create new branch"]
            }
        ]
    }

    render() {
        return (
            <React.Fragment>
            <h2>These are the topics you've covered so far:</h2>
                <div class="card-container">
                    {this.state.cards.map(infoCard => 
                        <Card name={infoCard.name} topicsCovered={infoCard.topicsCovered}/>
                    )}
                </div>
            </React.Fragment>
        );
    }

}

export default Main;