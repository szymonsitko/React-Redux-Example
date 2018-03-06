import React from 'react';

const Report = props => {
    return (
        <div className="single-raport" onClick={props.handleClick}>
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