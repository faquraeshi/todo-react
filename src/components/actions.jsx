import React, { Component } from "react";

class Actions extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onAddingATask}>
          <input type="text" placeholder="What's to do?" />
          <button style={{ marginLeft: 10 }}>Add</button>
        </form>

        <br />
        <button onClick={() => this.props.onRemoveAll()}>Remove All</button>
      </div>
    );
  }
}

export default Actions;
