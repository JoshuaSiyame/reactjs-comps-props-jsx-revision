// import modules/packages
import React from "react";
import "./Form.css";
import SubmitButton from "../Button/Button";
import ItemLabel from "../Label/Label";
import AlertButton from "../AlertButton/AlertButton";

// component
const Form = () => {

    // handle submit
    const handleOnSubmit = (e) => {
        // prevent default reloading behaviour
        e.preventDefault();
    };

    // JSX value
    // const name = "Joshua Siyame";

    // button data
    const infoButton = {
        text: "Info button text",
        padding: ".5em 1em",
        borderSize: "2px",
        borderNature: "solid",
        borderColor: "limegreen"
    };

    const dangerButton = {
        text: "Info button text",
        padding: ".5em 1em",
        borderSize: "2px",
        borderNature: "solid",
        borderColor: "red"
    };

    return (
        <div id="submitting-form">
            <form onSubmit={handleOnSubmit}>
                <div className="form-group">
                    <ItemLabel label_for="text" label_text="Text." />
                    <input type="text" placeholder="enter text" className="form-control" />
                    <SubmitButton />
                </div>
            </form>
            <div id="btns">
                <AlertButton {...infoButton} />
                <AlertButton {...dangerButton} />
            </div>
        </div>
    );
};

export default Form;