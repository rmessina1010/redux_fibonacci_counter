import React from "react";
import Mid from "./Mid";

function Shallow(props) {

    return (
        <div>
            <hr />
            <h2>Using Redux to avoid  "Prop-drilling" </h2>
            <div className="box">
                <h3>Am a Shallow Component, {props.level} level deep</h3>
                <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>props:
                    {JSON.stringify(props)}
                </pre>
                <Mid level={props.level + 1} />
            </div>
        </div>
    )
}

export default Shallow;
