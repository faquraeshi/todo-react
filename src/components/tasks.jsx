import React, { Component } from "react";
import Task from "./task";

class Tasks extends Component {
  render() {
    const { tasks, heading, onRemove } = this.props;
    return (
      <div>
        <h4>{heading}</h4>
        <ol>
          {tasks.map(task => (
            <Task key={task.id} task={task} onRemove={onRemove} />
          ))}
        </ol>
      </div>
    );
  }
}

export default Tasks;
