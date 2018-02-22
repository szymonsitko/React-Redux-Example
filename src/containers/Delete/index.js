import React, { Component } from 'react';

import { Button } from 'react-materialize';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '@actions';

import './index.css';

class Delete extends Component {
    render () {
        return (this.props.reports.selected &&
            <div className="prettier">
                <h5>Delete selected comparison</h5>
                <hr />
                <div>
                    <p>
                      <span className="bold">{this.props.reports.selected.firstCurrency}</span>
                      <span> &lt;-&gt; </span>
                      <span className="bold">{this.props.reports.selected.secondCurrency}</span>
                    </p>
                    <p>Rate: <span className="bold">{this.props.reports.selected.rate}</span></p>
                    <p>Created at: {new Date(this.props.reports.selected.created).toISOString()}</p>
                </div>
                <Button onClick={this.props.deleteSelectedReport}>Delete</Button>
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
