import React from "react";

function Container(props) {
    return <div className={`container${props.fluid ? "-fluid" : ""}`} style={{marginTop: 30}}>{props.children}</div>
}

export default Container;
