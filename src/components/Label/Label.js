// import modules/packages
import React from "react";
import "./Label.css";

// label component
const ItemLabel = (props) =>{
    return (
        <div>
            <label htmlFor={props.label_for}>{props.label_text}</label>
        </div>
    );
};

export default ItemLabel;