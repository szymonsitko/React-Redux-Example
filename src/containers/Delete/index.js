import React, {Component} from 'react';

import {Col, Button} from 'react-materialize';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '@actions';
import Report from "../../components/Report/index";

class Delete extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <Col s={4} className='grid-example prettier'>
                <div className="prettier">
                    <h5>Delete comparison</h5>
                    <hr/>
                    <p>
                        {
                            this.props.reports.selected !== null ?
                                <Report report={this.props.reports.selected} /> :
                                "Raport not selected"
                        }
                    </p>
                    { this.props.reports.selected !== null && <Button onClick={() => this.props.deleteSelectedReport()}>Delete</Button>}
                </div>
            </Col>
        )
    }
}

const mapStateToProps = state => {
    return {
        reports: state.reports
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        ActionCreators,
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Delete);