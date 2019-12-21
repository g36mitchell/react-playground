import React from 'react';

class Bomb extends React.Component {

    state = {
            count: 0,
            ticktock: 'tick',
            }

    componentDidMount() {

        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
            this.handleTickTockBoom()
        }, 1000)
    }

    handleTickTockBoom = () => {
       
        if (this.state.count < 8 && this.state.count % 2 === 0) {
            this.setState({
                value: 'tick'
            })
        }
        else if (this.state.count < 8 && this.state.count % 2 !== 0) {
            this.setState({
                value: 'tock'
            })
        }
        else {
            this.setState({
                value: 'BOOOOOOOM!',
                count: -1
            })
        }
    }

    render() {
        return <p>{this.state.value}</p>
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

export default Bomb;