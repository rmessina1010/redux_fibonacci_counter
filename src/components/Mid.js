import React from "react";
import Deep from "./Deep";

function Mid(props) {

    return (
        <div className="box">
            <h4>Am a Mid Component, {props.level} levels deep</h4>
            <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>props:
                    {JSON.stringify(props)}
            </pre>
            <Deep level={props.level + 1} />
        </div>
    )
}

export default Mid;