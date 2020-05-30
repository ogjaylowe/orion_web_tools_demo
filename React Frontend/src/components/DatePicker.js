import React from "react";

function DatePicker(props) {
    return (
        <div>
            <input
                className="uk-input uk-form-width-large uk-margin-bottom"
                onChange={props.callbackFunction}
                id="date"
                type="text"
                value={props.passedStateValue}
            />
        </div>
    )
}

export default DatePicker;