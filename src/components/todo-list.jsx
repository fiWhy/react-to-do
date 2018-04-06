import React from "react";
import TodoItem from "./todo-item.jsx";

export default ({ list, handleRemove, handleDone }) =>
    <div className="ui middle aligned divided list">
        {list.map(el => <TodoItem key={el.id}
            description={el.description}
            handleDone={handleDone}
            handleRemove={handleRemove}
            id={el.id}
            done={el.done}
            name={el.name} />)}
    </div>