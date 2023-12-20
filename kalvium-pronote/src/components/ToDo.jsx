import React, { Component } from "react";

export default class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
      todo: []
    };
  }

  handelUpdate = (e) => {
    this.setState({
      task: e.target.value
    });
  };

  handleAdd = () => {
    const { task, todo } = this.state;

    if (task.trim() !== "") {
      this.setState({
        todo: [...todo, task],
        task: ""
      });
    }
  };

  handleDelete = (index) => {
    const updatedTodo = [...this.state.todo];
    updatedTodo.splice(index, 1);
    this.setState({
      todo: updatedTodo
    });
  };

  render() {
    return (
      <>
        <input type="text" value={this.state.task} onChange={this.handelUpdate} />
        <button onClick={this.handleAdd}> Add Item</button>
        <p>{this.state.task}</p>
        <div className="Container">
          <ul>
            {this.state.todo.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => this.handleDelete(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
