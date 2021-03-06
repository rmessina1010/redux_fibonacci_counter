import React, { Component } from "react";

class Counter extends Component {
    render() {
        console.log(this.props);

        return (
            <div>
                <h2>Count at : {this.props.count}</h2>
                <button onClick={() => this.props.addCounter(this.props.int)} >+</button>
                <button onClick={() => this.props.subCounter(this.props.int)} >-</button>
                <button onClick={() => this.props.resetCounter(this.props.count, this.props.start)} >reset counter</button>
            </div>
        );
    }
}
export default Counter;