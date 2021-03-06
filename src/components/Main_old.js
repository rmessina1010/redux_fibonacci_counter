import React, { Component } from "react";
import Counter from './Counter';
import Fibonaci from './Fibonnaci';
import { connect } from 'react-redux';
import { resetCounter, addCounter, subCounter, fibonaciNext, fibonaciPrev } from '../redux/actions/actionCreators'


const mapStateToProps = state => {
    console.log('map on MAIN--outside comp', state);
    return {
        fibonaci: state.fibonaciReducer, // maps to a reducer;  ...destructuring prevents propname.propname effect
        lastCount: state.counterReducer, // maps to a reducer;  ...destructuring prevents propname.propname effect
        counterAt: state.counterAddSubReducer, // maps to a reducer;  ...destructuring prevents propname.propname effect
        /* ODD NOTE: when I had two separate reducer functions dealing with the counter prop,
        only the one set first in mapStatesToProp would work*/
        // turns out ,  the store keeps separate versionof the states and not a unified global one as i prveiously thought
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
                    next={this.props.fibonaci.next}
                    nth={this.props.fibonaci.nth}
                    sum={this.props.fibonaci.sum}
                    count={this.props.fibonaci.count}
                />
                {this.state.showCounter ?
                    <Counter
                        start={0}
                        int={5}
                        count={this.props.counterAt.count}
                        resetCounter={this.props.resetCounter}
                        addCounter={this.props.addCounter}
                        subCounter={this.props.subCounter}
                    />
                    : null
                }
                <button onClick={this.toggleCounter} >{this.state.showCounter ? 'Hide' : 'Show'} counter</button>
                <p>Last Reset Value:{this.props.lastCount.lastCounterVal}</p>
            </div>
        );

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
