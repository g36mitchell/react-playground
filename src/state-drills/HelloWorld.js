import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: 'world',
    }

    handleButtonClickFriend = () => {
        /* remember we cannot set the state directly */

        this.setState({
            who: 'Friend',
        });
    }    

    handleButtonClickReact = () => {
        /* remember we cannot set the state directly */

        this.setState({
            who: 'React',
        });
    }

    handleButtonClickWorld = () => {
        /* remember we cannot set the state directly */

        this.setState({
            who: 'World',
        });
    }

    render() {

        return (
            <div>
            <p>Hello {this.state.who}</p>
            <button onClick={this.handleButtonClickFriend}>
                Friend
            </button>
            <button onClick={this.handleButtonClickReact}>
                React
            </button>
            <button onClick={this.handleButtonClickWorld}>
                World
            </button>
        </div>
        )
    }
}

export default HelloWorld;