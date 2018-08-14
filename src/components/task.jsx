import React, { Component } from "react";

class Task extends Component {
  render() {
    return (
      <li>
        <span>{this.props.task.title}</span>
        <button
          onClick={() => this.props.onRemove(this.props.task.id)}
          style={{ margin: 7 }}
        >
          Remove
        </button>
      </li>
    );
  }
}

export default Task;
