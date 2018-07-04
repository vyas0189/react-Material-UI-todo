import React, { Component } from "react";
import { Paper, Typography, TextField, Button } from "@material-ui/core";
import Todos from "./Todos";
import uuid from "uuid";
export default class extends Component {
  state = {
    todoItems: [],
    todo: ""
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      todo: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.todo.length <= 0) return;
    const newItem = {
      id: uuid(),
      item: this.state.todo,
      checked: false
    };
    this.setState({
      todoItems: [...this.state.todoItems, newItem],
      todo: ""
    });
  };

  handleCheck = id => {
    const checkedTodos = this.state.todoItems.map(todo => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }
      return todo;
    });
    this.setState({
      todoItems: checkedTodos
    });
  };

  handleDelete = id => {
    const deleteItem = this.state.todoItems.filter(
      todo => (todo.id !== id ? todo : null)
    );
    this.setState({
      todoItems: deleteItem
    });
  };
  render() {
    return (
      <div
        style={{
          width: "70%",
          textAlign: "center",
          margin: "0 auto",
          marginTop: 100
        }}
      >
        <Paper>
          <Typography variant="headline" component="h2" style={{ padding: 20 }}>
            <TextField
              id="name"
              label="Enter here..."
              margin="normal"
              style={{ width: "50%" }}
              value={this.state.todo}
              onChange={this.handleChange}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: 10 }}
              size="small"
              onClick={this.handleSubmit}
            >
              ADD TODO
            </Button>
          </Typography>
        </Paper>

        <Todos
          todos={this.state.todoItems}
          handleCheck={this.handleCheck}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
