import React from "react";
import ReactDOM from "react-dom";

import update from "immutability-helper";

import TodoList from "./components/todo-list";
import TodoAdd from "./components/todo-add";

import "./app.scss";

const toDoList = [
    { id: 1, name: "Todo 1", description: "Tododescription 1" },
    { id: 2, name: "Todo 2", description: "Tododescription 2" },
    { id: 3, name: "Todo 3", description: "Tododescription 3" },
    { id: 4, name: "Todo 4", description: "Tododescription 4" },
    { id: 5, name: "Todo 5", description: "Tododescription 5" }
]

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: props.list
        }

        this.handleRemove = this.handleRemove.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() { }

    handleRemove(id) {
        this.setState(({ list }) => ({
            list: list.filter(el => el.id !== id)
        }))
    }

    handleDone(id) {
        console.log("DONE", id);
        this.setState(({ list }) => ({
            list: list.map(el => {
                if (el.id === id) el.done = !el.done;
                return el;
            })
        }))
    }

    handleSubmit(task) {
        this.setState(({ list }) => {
            const lastElement = list[list.length - 1];
            const t = Object.assign({ id: lastElement.id + 1 }, task);
            return {
                list: [...list, t]
            }
        })
    }

    render() {
        const { list } = this.state;
        return <div className="ui container" onClick={this.handleDivClick}
            ref={(ref) => { this.divReference = ref }}>
            <TodoAdd handleSubmit={this.handleSubmit} />
            <TodoList handleRemove={this.handleRemove} handleDone={this.handleDone} list={list} />
        </div>;
    }
}

ReactDOM.render(<App list={toDoList}></App>, document.getElementById("app"));