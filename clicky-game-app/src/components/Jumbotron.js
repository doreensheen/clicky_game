import React from "react";

const Jumbotron = props => (
    <div className="jumbotron">
        <h1>Clicky Game</h1>
        <p>You've guessed {props.count} right.</p>
    </div>
);

export default Jumbotron;