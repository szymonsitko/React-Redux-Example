import React, { Component } from 'react';

import { Button } from 'react-materialize';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '@actions';

class Add extends Component {
    handleButtonClick() {
        this.props.deleteSeletedReport();
    }

    render() {
        const selectedRate = this.props.reports.reportsList.find(
            (val, index) => index === this.props.reports.activeIndex
        );

        return (
            <div className="prettier">
                <h5>Delete selected comparison</h5>
                <hr />
                {
                    selectedRate &&
                    <div>
                        <p>Selected rate: <span className="bold">{selectedRate.rate}</span></p>
                    </div>
                }
                <Button
                    onClick={this.handleButtonClick.bind(this)}
                    disabled={selectedRate === undefined}
                >
                    Delete
                </Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        reports: state.reports
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        ActionCreators,
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);