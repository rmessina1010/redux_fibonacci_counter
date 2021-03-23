import React, { Component } from "react";
import { connect } from 'react-redux';
import { setCounterInt } from '../redux/actions/actionCreators'


const mapStateToProps = state => {
    return {
        ...state.fibonaciReducer,
        ...state.counterReducer,
        ...state.counterAddSubReducer,


        ...state.counterIntReducer

    }
}

const mapDispatchToProps = {
    setCounterInt: (value => setCounterInt(value)), //maps to an action creator
}

class Deep extends Component {

    handleChange = (e) => {
        if (e.target.value !== '') {
            if (isNaN(e.target.value)) {
                e.target.value = this.props.counterInt;
                return;
            }
            this.props.setCounterInt(parseInt(e.target.value));
            return;
        }
        this.props.setCounterInt(e.target.value);
    }
    render() {
        return (
            <div className="box">
                <h5>Am a Deep Component, {this.props.level} levels deep</h5>
                <div><label>Counter Iterval:
                    <input name="int" value={this.props.counterInt} onChange={this.handleChange} />
                </label>
                </div>
                <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>this.props:
                    {JSON.stringify(this.props)}
                </pre>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deep);;