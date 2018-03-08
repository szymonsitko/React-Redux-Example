import React from 'react';
import './index.css';

const Report = props => {
    return (
        <div
            className={`single-raport ${props.active && 'active'}`}
            onClick={props.onClick}
        >
            <h6>
                Raport for convertion from
                    <span className="bold"> {props.report.firstCurrency} </span>
                    to
                    <span className="bold"> {props.report.secondCurrency} </span>
            </h6>
            <h5>Rate: <span className="bold">{props.report.rate}</span></h5>
            <p>Created at: {new Date(props.report.created).toString()}</p>
        </div>
    )
}

export default Report;