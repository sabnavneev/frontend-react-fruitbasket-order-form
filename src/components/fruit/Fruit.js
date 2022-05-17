import React from "react";

function Fruit( { emoticon, type, name, decrease, increase, counter, disabled } ){
    return (
        <div
            className="container">
            <h1>{emoticon} {type}</h1>
            <div
                className="btn-container">
                <button
                    className="counter-btn"
                    type="button"
                    name={name}
                    onClick={decrease}
                    disabled={counter === 0}
                >
                -
                </button>
                <p
                    className="counter">{counter}
                </p>
                <button
                    className="counter-btn"
                    type="button"
                    onClick={increase}
                >
                +
                </button>
            </div>
        </div>
    )
}

export default Fruit;
