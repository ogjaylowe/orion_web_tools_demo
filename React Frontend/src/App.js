import React from 'react'

import ParentClient from './components/ParentClient.js'
import AdminClient from './components/AdminClient.js'

import AdminView from "./components/AdminView.js";

// React libraries
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <div>

            <Router>
                <Switch>
                    <Route path="/parentClient" >
                        <ParentClient />
                    </Route>

                    <Route path="/adminClient" >
                        <AdminClient />
                    </Route>


                    <ul>
                        <li>
                            <Link to="/parentClient">
                                ParentClient
                            </Link>
                        </li>
                        <li>
                            <Link to="/adminClient">
                                AdminClient
                            </Link>
                        </li>
                    </ul>

                </Switch>
            </Router>

        </div>
    )
}

export default App