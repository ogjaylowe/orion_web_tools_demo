import React from 'react'

import configValues from '../config.js';

import TableR from './TableR.js';
import TableComponent from './TableComponent.js';

import HomeworkClub from './HomeworkClub.js';

import CollectionForm from './CollectionForm.js';
import DescriptionText from './DescriptionText.js';
import Selector from './Selector.js';
import CallbackButton from './CallbackButton.js';
import HomebridingTable from './HomebridingTable.js';
import DatePicker from './DatePicker.js';
import LoginMenu from './LoginMenu.js';
import ParentView from "./ParentView.js";
import Nav from "./Nav.js";

import AdminHomeworkClubView from "./AdminHomeworkClubView.js";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

//// **** INITIALIZATIONS **** ////
// sets up the uniqid hashing function for use with component id's
var uniqid = require('uniqid');

// reference values from config.js
var students = configValues.students
var times = configValues.times
var classes = configValues.classes
var periods = configValues.periods

// headers for each type of table
var hwcHeaders = configValues.homeworkClubHeaders
var detentionHeaders = []

class AdminView extends React.Component {
    state = {}

    render() {
        return (
            <div className="App">

                <Router>

                    <Nav />

                    <Switch>
                        <Route path="/detentioncenter">
                            Large design changes in progress, please use homework club and homebriding for now.
                        </Route>
                    </Switch>

                    <Switch>
                        <Route path="/homeworkclub">
                            <AdminHomeworkClubView />
                        </Route>
                    </Switch>

                    <Switch>
                        <Route path="/homebriding">
                            <CollectionForm collectionLegend={""}>
                                <HomebridingTable students={students} tableLegend={"Homebriding 2020"} />
                            </CollectionForm>
                        </Route>
                    </Switch>

                    <Switch>
                        <Route path="/supporttickets" >
                            <h1>Coming soon!</h1>
                        </Route>
                    </Switch>

                    <Switch>
                        <Route path="/guides" >
                            <h1>Coming soon!</h1>
                        </Route>
                    </Switch>

                    <Switch>
                        <Route path="/procedures" >
                            <h1>Coming soon!</h1>
                        </Route>
                    </Switch>

                </Router>

            </div >
        )
    }
}

export default AdminView