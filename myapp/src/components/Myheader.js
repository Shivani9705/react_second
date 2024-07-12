import React, { Component } from 'react';
import Child from './Child';

export class Myheader extends Component {

    constructor(props) {
        super(props);
        this.state = { show: true };
    }

    delHeader = () => {
        this.setState({ show: false })
    }
    render() {
        let myheading;
        if (this.state.show) {
            myheading = <Child />
        };
        return (
            <div>
                {myheading}
                <button type='button' onClick={this.delHeader}>Delete file</button>
            </div>
        );
    }
}

export default Myheader;
