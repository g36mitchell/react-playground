import React from 'react';

class Counter extends React.Component {

    static defaultProps = {
        step: 1,
    }

    state = {
            count: 0,
    }

    /*  () => has to be used to bind the props to the function */
    handleButtonClick = () => {
        /* remember we cannot set the state directly */

        this.setState({
            count: this.state.count + this.props.step
        });
    }

    render() {
        return (
            <div>
                <p>The current count: {this.state.count}</p>
                <button onClick={this.handleButtonClick}>
                    Add {this.props.step}
                </button>
            </div>
        )
    }
}

export default Counter;