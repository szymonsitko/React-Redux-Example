import React, { Component } from 'react';
import { Col } from 'react-materialize';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '@actions';

import Report from '@components/Report';
import Loading from '@components/Loading';

class Reports extends Component {
    renderListOfReports() {
        const { reports } = this.props;
        return (
            <div className="prettier">
                <h5>List of reports</h5>
                <hr />
                {!reports.reportsList.length ?
                    <p>Nothing to display yet.</p> :
                    reports.reportsList.map((eachReport, index) => {
                        return (
                        <Report
                            key={index}
                            report={eachReport}
                            active={reports.activeIndex === index}
                            onClick={() => this.props.setActiveIndex(index)}
                        />)
                    })
                }
            </div>
        )
    }

    render() {
        return (
            <Col s={8} className='grid-example'>
                {this.props.reports.fetchingReport ? <Loading /> : this.renderListOfReports()}
            </Col>
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

export default connect(mapStateToProps, mapDispatchToProps)(Reports);