import React from "react";

export default ({ id, name, description, handleRemove, handleDone, done = false }) =>
    <div className={"item " + (done ? "done" : "")}>
        <div className="left floated content">
            <div className="header">{name}</div>
            <span>{description}</span>
        </div>
        <div className="right floated content">
            <div onClick={() => handleRemove(id)} className="ui button">Remove</div>
            <div onClick={() => handleDone(id)} className="ui button">Done</div>
        </div>
    </div>;