import React, { Component } from "react";
import "./App.css";

import Heading from "./components/heading";
import Tasks from "./components/tasks";
import Actions from "./components/actions";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);

    this.state = {
      heading: "Simple ToDo App with React",
      tasksHeading: "Tasks ToDo:",
      tasks: [
        { id: 1, title: "Set up project" },
        { id: 2, title: "Done templating" },
        { id: 3, title: "Implement 'view logic'" }
      ]
    };
  }
  handleRemove = taskId => {
    // return all the task objects except the one with the given id (the del btn of which is clicked)
    const tasks = this.state.tasks.filter(t => t.id !== taskId);
    this.setState({ tasks }); // polluting the state of the tasks
  };

  handleAddTask = e => {
    e.preventDefault();
    let inputValue = e.target.children[0].value;
    let newTask = { id: this.state.tasks.length + 1, title: inputValue };
    if (inputValue !== "" && /^[^-\s][\w\s-]+$/.test(inputValue)) {
      this.setState({ tasks: [...this.state.tasks, newTask] });
      e.target.reset();
    } else {
      return false;
    }
  };

  handleRemoveAll = () => {
    this.setState({ tasks: [] });
  };

  render() {
    const { tasks, heading, tasksHeading } = this.state;
    return (
      <div>
        <Heading heading={heading} />
        <Tasks
          heading={tasksHeading}
          tasks={tasks}
          onRemove={this.handleRemove}
        />
        <Actions
          onRemoveAll={this.handleRemoveAll}
          onAddingATask={this.handleAddTask}
        />
      </div>
    );
  }
}

export default TodoApp;
