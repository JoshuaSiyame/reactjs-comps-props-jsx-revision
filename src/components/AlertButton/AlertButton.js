// import modules/packages
import React from "react";
import "./AlertButton.css";

// component
const AlertButton = (props) =>{

    const {text, padding, borderSize, borderNature, borderColor } = props;
    return (
        <button style={{padding: padding, border: `${borderSize} ${borderNature} ${borderColor}`}}>
            {text}
        </button>
    );
};

export default AlertButton;