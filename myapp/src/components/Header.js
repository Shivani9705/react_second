import React, { Component } from 'react';

export class Header extends Component {

    constructor(props) {
        super(props)
        this.state = { favoritecolor: "red" };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoritecolor: "yellow" })
            // console.log(this.state.favoritecolor);
            console.log("execute after render method")
        })
    }

    componentWillMount() {
        console.log("execute before render method")
    }
    render() {
        return (
            <div>
                <h1>My favorite color is {this.state.favoritecolor}</h1>

            </div>
        );
    }
}

export default Header;
