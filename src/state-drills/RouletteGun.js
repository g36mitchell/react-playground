import React from 'react';

class RouletteGun extends React.Component {

    static defaultProps = {
        bulletInChamber: 8,
    }

    state = {
        chamber: null,
        spinningTheChamber: false,
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    handleButtonClick = () => {
        this.setState({
            spinningTheChamber: true,
        })

        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * this.props.bulletInChamber)

            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false,
            })
        }, 2000)
    }

    renderDisplay = () => {

        if (this.state.spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger!...'
        }
        else if (this.state.chamber === this.props.bulletInChamber) {
            return 'BANG!!!!'
        }
        else {
            return 'you are safe!'
        }
    }

    render() {

        return (
            <div>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.handleButtonClick}>Pulling the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun;