import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '@actions';

import Report from '@components/Report';
import Loading from '@components/Loading';

class Reports extends Component {

    handleReportSelected(selectedReport) {
        this.props.setActiveReport(selectedReport);
    }

    renderListOfReports() {
        return (            
            <div className="prettier">
                <h5>List of reports</h5>
                <hr />
                
                {!this.props.reports.reportsList.length ? 
                    <p>Nothing to display yet.</p>
                    :
                    this.props.reports.reportsList.map((eachReport, index) => {
                        return <Report key={index} report={eachReport}
                                       handleSelection={this.handleReportSelected.bind(this)}/>
                    })
                }
            </div>
        )
    }

    render() {
        return (
            this.props.reports.fetchingReport ? <Loading/> : this.renderListOfReports()
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
    )
  };

export default connect(mapStateToProps, mapDispatchToProps)(Reports);