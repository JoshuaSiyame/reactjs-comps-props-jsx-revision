// import modules/packages
import React, { useState } from "react";
import "./Button.css";

// component
const SubmitButton = () =>{    

    // create states
    const [isSubmitted, setSubmitted] = useState(false);

    let submitted = () =>{
        setSubmitted(true);
        setTimeout(unSubmitted, 2500)
    }

    let unSubmitted = () =>{
        setSubmitted(false);
    }

    return (
        <div>
            <button onClick={submitted} className="btn-primary">
                {
                    isSubmitted? "submitting": "submit"
                }
            </button>
        </div>
    );
};

export default SubmitButton;