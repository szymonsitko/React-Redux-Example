import React, { Component } from 'react';

import { Button } from 'react-materialize';
import * as constants from '@constants/Generic';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '@actions';

import './index.css';

class Add extends Component {
    constructor(props) {
        super(props);

        this.firstCurrency = constants.FIRST_CURRENCY;
        this.secondCurrency = constants.SECOND_CURRENCY;
    }

    handleButtonClick() {
        this.props.addCurrencyReport({
            firstCurrency: this.firstCurrency,
            secondCurrency: this.secondCurrency
        });
    }

    render () {
        return (
            <div className="prettier">
                <h5>Add new comparison</h5>
                <hr />
                <div>
                    <p>First currency: <span className="bold">{this.firstCurrency}</span></p>
                    <p>Second currency: <span className="bold">{this.secondCurrency}</span></p>
                </div>
                <Button onClick={this.handleButtonClick.bind(this)}>Add</Button>
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