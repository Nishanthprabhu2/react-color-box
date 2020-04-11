import React, { Component } from 'react';
import './Box.css';
import { choice } from "./helpers";

class Box extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { color: choice(this.props.colors) }
    }
    handleClick() {
        this.pickColor();
    }
    pickColor() {
        let newColor;
        do {
          newColor = choice(this.props.colors);
        } while (newColor === this.state.color);
    
        this.setState({ color: newColor });
    }
    render() {
        return (
            <div
                className="Box"
                style={{ backgroundColor: this.state.color }}
                onClick={this.handleClick}
            >
            Click Me!
            </div>


        )
    }
}

export default Box;
