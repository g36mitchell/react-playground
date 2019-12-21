import React from 'react';

class TheDate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            datetime: new Date()
        };
 /*       console.log('constructor'); */
    }

    componentDidMount() {
/*        console.log('componentDidMount'); */
        this.interval = setInterval(() => {
/*            console.log('setInterval') */
            this.setState({
                datetime: new Date()
            })
        }, 1000)
    }

    render() {
/*        console.log('renderer') */
        return <p>{this.state.datetime.toLocaleString()}</p>
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

export default TheDate;