import { render } from '@testing-library/react';
import React from 'react';

export default class HelloWorld extends React.Component {
    state = {
        who: 'World'
    } 
    changeWho = who => {
        this.setState({
            who
        })
    }
    render() {
        return(
            <div>
            <p>Hello, {this.state.who}</p>
                <button
                onClick={e => this.changeWho('World')}
                type="button"
                className="world-button">
                    World
                </button>
                <button
                onClick={e => this.changeWho('Friend')}
                type="button"
                className="friend-button">
                    Friend
                </button>
                <button
                onClick={e => this.changeWho('React')}
                type="button"
                className="react-button">
                    React
                </button>
            </div>
        )
    }
};