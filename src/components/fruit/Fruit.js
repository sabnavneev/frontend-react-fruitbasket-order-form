import React from "react";

function Fruit( {title, props1, props2, props3 } ){
    return (
        <div
            className="container">
            <h1>{title}</h1>
            <div
                className="btn-container">
                <button
                    className="counter-btn"
                    type="button"
                    onClick={props1}
                >
                -
                </button>
                <p
                    className="counter">{props3}
                </p>
                <button
                    className="counter-btn"
                    type="button"
                    onClick={props2}
                >
                +
                </button>
            </div>
        </div>
    )
}

export default Fruit;
