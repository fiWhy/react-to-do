import React from "react";

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.initialState();

        this.fieldChanged = this.fieldChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    initialState() {
        return {
            name: "",
            description: ""
        }
    }

    fieldChanged(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        const { handleSubmit } = this.props;
        const data = Object.assign({}, this.state);
        event.preventDefault();
        this.setState(this.initialState());
        handleSubmit(data);
    }

    render() {
        const { name, description } = this.state;
        return <div className="ui form">
            <form onSubmit={this.handleSubmit}>
                <div className="inline fields">
                    <div className="eight wide field">
                        <label>Add task:</label>
                        <input onChange={this.fieldChanged}
                            type="text"
                            value={this.state.name}
                            name="name"
                            placeholder="First Name" />
                    </div>
                    <div className="eight wide field">
                        <input onChange={this.fieldChanged}
                            type="text"
                            value={this.state.description}
                            name="description"
                            placeholder="Short Description" />
                    </div>
                    <button type="submit" disabled={!(name && description)} className="ui submit button">Submit</button>
                </div>
            </form>
        </div>
    }
}