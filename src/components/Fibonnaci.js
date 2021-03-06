import React, { Component } from "react";

class Fibonaci extends Component {
    render() {

        return (
            <div>
                <h2>Fibonaci Series</h2>
                <h3>Nth: {this.props.nth} --- Value : {this.props.sum}   </h3>
                <button onClick={() => this.props.nextFibonaci(this.props.count)} >Next</button>
                <button onClick={() => this.props.prevFibonaci(this.props.count)} >Prev</button>
                <hr />
            </div>
        );
    }
}
export default Fibonaci;