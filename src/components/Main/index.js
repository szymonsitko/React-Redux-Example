/* The idea of this simple task, is to add one more component
which will be called 'Delete'. This component will act as a
Redux container, and should be placed below the 'Add' layout
inside of *this* component. */

import React, {Component} from 'react';
import {Col, Row} from 'react-materialize';

import Add from '@containers/Add';
import Delete from '@containers/Delete';
import Reports from '@containers/Reports';

import './index.css';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Row>
                    <Col s={4} className='grid-example prettier'>
                        <Add/>
                        <Delete/>
                    </Col>
                    <Col s={8} className='grid-example'>
                        <Reports/>
                    </Col>
                </Row>
            </div>
        )
    }
}
  
export default Main;