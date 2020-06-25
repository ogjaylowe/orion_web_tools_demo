import React from 'react'

import LoginMenu from './LoginMenu.js';
import AdminView from "./AdminView.js";

import CollectionForm from './CollectionForm.js'

// React libraries
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

//// **** INITIALIZATIONS **** ////
// sets up the uniqid hashing function for use with component id's
var uniqid = require('uniqid');


// TODO: add a link to the 'home' route from here so that
// users land on / and can't leave in the form of a conditional
// rendering function (call ParentView on success with StudentID passed in)

// goal: parents start in login menu, upon success something allows them into the
// parent view with the StudentID as a prop

class AdminClient extends React.Component {
    state = { username: "", password: "", loginState: "", admin: false }

    componentDidMount() {
        this.setState({
            loginState:
                <CollectionForm >
                    <LoginMenu
                        callbackButton={() => this.authCheck()}
                        callbackOnChangeUsername={(event) => this.updateUsernameState(event)}
                        callbackOnChangePassword={(event) => this.updatePasswordState(event)}
                    />
                </CollectionForm>
        })
    }

    // updates the state on keystroke change
    updateUsernameState(event) {
        this.setState({ username: event.target.value })
    }

    updatePasswordState(event) {
        this.setState({ password: event.target.value })
    }

    // TODO: update the fetch to search for a parent username and password!
    authCheck() {
        fetch('/admin', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({ username: this.state.username, password: this.state.password })
        })
            .then(res => res.json())
            .then(admin => {
                console.log(admin)
                if (admin != false) {
                    this.setState({ admin })
                }
            })
            .then(() => this.conditionalCheck())
    }

    // performs auth check
    conditionalCheck() {
        if (this.state.admin != false) {
            this.setState({ loginState: <AdminView /> })
        } else {
            alert(this.state.condition + " is not a registered username!")
        }
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route path="/" >
                            {this.state.loginState}
                        </Route>
                    </Switch>
                </Router>
            </div >
        )
    }
}

export default AdminClient