import React from 'react'

import LoginMenu from './LoginMenu.js';
import ParentView from "./ParentView.js";

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
    state = { condition: "", loginState: "", parent: false, admin: false }

    componentDidMount() {
        this.setState({
            loginState:
                <CollectionForm >
                    <LoginMenu
                        callbackButton={() => this.authCheck()}
                        callbackOnChange={(event) => this.updateLoginState(event)}
                    />
                </CollectionForm>
        })
    }

    // updates the state on keystroke change
    updateLoginState(event) {
        this.setState({ condition: event.target.value })
    }

    // TODO: update the fetch to search for a parent username and password!
    authCheck() {
        fetch('/parents', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({ fname: this.state.condition })
        })
            .then(res => res.json())
            .then(parent => {
                if (parent != false) {
                    this.setState({ parent })
                }
            })
            .then(() => this.conditionalCheck())

        fetch('/admin', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({ fname: this.state.condition })
        })
            .then(res => res.json())
            .then(admin => {
                if (admin != false) {
                    this.setState({ admin })
                }
            })
            .then(() => this.conditionalCheck())
    }

    // performs auth check
    conditionalCheck() {
        //console.log(this.state)
        // TODO: instead of using false here, make a prop in parent called userType and have it = parent
        if (this.state.parent != false) {
            this.setState({ loginState: <ParentView studentId={this.state.parent.student} /> })
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