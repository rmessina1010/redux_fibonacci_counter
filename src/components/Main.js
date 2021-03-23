import React, { Component } from "react";
import Counter from './Counter';
import Fibonaci from './Fibonnaci';
import Shallow from './Shallow';
import { connect } from 'react-redux';
import { resetCounter, addCounter, subCounter, fibonaciNext, fibonaciPrev } from '../redux/actions/actionCreators'


const mapStateToProps = state => {
    console.log('map on MAIN--outside comp', state);
    return {
        ...state.fibonaciReducer,
        ...state.counterReducer,
        ...state.counterAddSubReducer,


        ...state.counterIntReducer
    }
}

const mapDispatchToProps = {
    resetCounter: ((value, start) => resetCounter(value, start)), //maps to an action creator
    addCounter: ((value) => addCounter(value)),//maps to an action creator
    subCounter: ((value) => subCounter(value)),//maps to an action creator
    nextFibonaci: ((value) => fibonaciNext(value)),//maps to an action creator
    prevFibonaci: ((value) => fibonaciPrev(value))//maps to an action creator
};

class Main extends Component {

    constructor(props) {
        super(props);
        console.log(this.props, "MAIN");
        this.state = {
            showCounter: true,
        }
    }

    toggleCounter = () => {
        this.setState({ showCounter: !this.state.showCounter })
    }

    render() {
        console.log(this.props, this.state)
        return (
            <div>
                <Fibonaci
                    nextFibonaci={this.props.nextFibonaci}
                    prevFibonaci={this.props.prevFibonaci}
                    next={this.props.next}
                    nth={this.props.nth}
                    sum={this.props.sum}
                    count={this.props.count}
                />
                {this.state.showCounter ?
                    <Counter
                        start={0}
                        int={this.props.counterInt}
                        count={this.props.count}
                        resetCounter={this.props.resetCounter}
                        addCounter={this.props.addCounter}
                        subCounter={this.props.subCounter}
                    />
                    : null
                }
                <button onClick={this.toggleCounter} >{this.state.showCounter ? 'Hide' : 'Show'} counter</button>
                <p>Last Reset Value:{this.props.lastCounterVal}</p>
                <Shallow level={1} />

            </div>
        );

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
