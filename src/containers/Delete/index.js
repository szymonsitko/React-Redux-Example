import React, { Component } from 'react';

import { Col, Button } from 'react-materialize';
import Report from '@components/Report';
import * as constants from '@constants/Generic';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '@actions';

class Delete extends Component {
    
    deleteSelectedReport(report) {
        this.props.deleteSelectedReport(report);
    }

    render () {
        if (!this.props.reports.reportsList.length) {
            return ( 
                <div className="prettier">
                    <h5>No reports in list</h5>
                    <hr />
                    <p>Nothing to display yet</p> 
                </div>
            )
        }

        //check if any report is selected
        const selectedReport = this.props.reports.reportsList.find(report => report.selected);
        
        if (this.props.reports.reportsList.length && !selectedReport) {
            return ( 
                <div className="prettier">
                    <h5>No selected report</h5>
                    <hr /> 
                    <p>Click on report to select!</p> 
                </div>
            )
        } 

        return (            
            <div className="prettier">
                <h5>Currently selected report:</h5>
                <hr />        
                <Report report={selectedReport} />
                <Button onClick={this.deleteSelectedReport.bind(this, selectedReport)}>Delete</Button>                
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

export default connect(mapStateToProps, mapDispatchToProps)(Delete);