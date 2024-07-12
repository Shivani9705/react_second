import React, { Component } from 'react';

export class Child extends Component {
    componentWillUnmount() {
        alert('The component name child about to be unmounted')
    }
    render() {
        return (
            <div>
                <h1>Hello world</h1>
            </div>
        );
    }
}

export default Child;
