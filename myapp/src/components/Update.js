import React, { Component } from 'react';

export class Update extends Component {

    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" }
    }
    shouldComponentUpdate() {
        return true;
    }


    changeColor = () => {
        this.setState({ favoritecolor: "blue" })
    }

    componentDidUpdate() {
        document.getElementById("mydiv").innerHTML = "the updated favorite color is" + this.state.favoritecolor;
    }


    render() {
        return (
            <div>
                <h1>My favorite color is {this.state.favoritecolor}</h1>
                <button type='button' onClick={this.changeColor}>changeColor</button>
                <div id="mydiv"></div>
            </div>
        );
    }
}

export default Update;
