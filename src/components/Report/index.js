import React from 'react';

import './index.css'

const Report = ({active, report, handleSelection}) => {
    return (
        <div className={"single-report" + (active ? " selected-report" : "")} onClick={() => handleSelection(report)}>
            <h6>
                Raport for convertion from
                <span className="bold"> {report.firstCurrency} </span>
                to
                <span className="bold"> {report.secondCurrency} </span>
            </h6>
            <h5>Rate: <span className="bold">{report.rate}</span></h5>
            <p>Created at: {new Date(report.created).toString()}</p>
        </div>
    )
};

export default Report;