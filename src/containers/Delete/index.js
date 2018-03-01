import React, {Component} from 'react';
import Report from "../../components/Report";
import {connect} from 'react-redux';
import {Button} from 'react-materialize';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '@actions';

class Delete extends Component {

    handleButtonClick() {
        this.props.deleteActiveReport();
    }

    render() {
        return (
            <div className="prettier">
                <h5>Selected report:</h5>
                <hr/>

                {!this.props.reports.activeReport ?
                    <p>Nothing to display yet.</p>
                    :
                    <div>
                        <Report report={this.props.reports.activeReport}/>
                        <Button onClick={this.handleButtonClick.bind(this)}>Delete</Button>
                    </div>
                }
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Delete);