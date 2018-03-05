/* The idea of this simple task, is to add one more component
which will be called 'Delete'. This component will act as a
Redux container, and should be placed below the 'Add' layout
inside of *this* component. */

import React, { Component } from 'react';
import { Row } from 'react-materialize';

import Add from '@containers/Add';
import Delete from '@containers/Delete';
import Reports from '@containers/Reports';

import './index.css';

class Main extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="main">
                <Row>
                    <Add />
                    <Delete />
                </Row>
                <Row>
                    <Reports />
                </Row>
            </div>
        )
    }
}
  
export default Main;

/* 1) 'Delete' should:

    - Be placed below 'Add new comparison' section
    - Display currently selected / active element from the Reports list
    - Be connected to the Redux store
    - Delete currently selected report (you will also need
    to modify the 'Add' to create ability for selecting active
    element)
    - Contain Button (random styling choice) which will invoke
    onReportDelete class method and dispatch deleteSelectedReport
    function (naming also up to you)

    Feel free to follow this repository example, as here's everything
    we need in order to implement it. Enjoy!
    
*/