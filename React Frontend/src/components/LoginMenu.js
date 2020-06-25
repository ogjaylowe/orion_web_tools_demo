import React from "react";
import { render } from "@testing-library/react";

class LoginMenu extends React.Component {
    state = {}

    render() {
        return (
            <div className="uk-width-1-1">

                <div>
                    <br />
                    <br />
                    <p className="uk-text-lead">Welcome to the homebriding database!</p>
                    <p className="uk-text-meta">(username + password can be anything to see parent view)</p>
                    <p className="uk-text-meta">(username: admin, password: 123 to see admin view)</p>

                    
                    <br />
                    <br />
                    <div>
                        <label htmlFor="userName">Username: </label>
                        <input
                            className="uk-input uk-form uk-form-width-medium uk-margin-right uk-margin-left"
                            id="userName"
                            type="text"
                            placeholder="Username"
                            onChange={this.props.callbackOnChangeUsername}
                        />
                        <label htmlFor="pwd">Password: </label>
                        <input
                            className="uk-input uk-form uk-form-width-medium uk-margin-right uk-margin-left"
                            id="Pwd"
                            type="text"
                            placeholder="Password"
                            onChange={this.props.callbackOnChangePassword}
                        />

                        <button onClick={this.props.callbackButton} type="button" className="uk-align-right uk-margin-right uk-button uk-button-primary">Log In</button>
                    </div>
                    <br />
                    <br />
                    <p className="uk-text-medium uk-margin-top uk-margin-bottom">Don't have a username and password, or forgot yours? Email your student's homeroom teacher for assistance!</p>
                    <p className="uk-text-meta uk-margin-top uk-margin-bottom">Students must complete 350 hours of homebriding activity to fufill the physical education requirement. Log in to see your student's progress.</p>
                </div>
            </div>
        )
    }
}

export default LoginMenu;

