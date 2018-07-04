import React from "react";
import { Grid, Paper } from "@material-ui/core";
import Todo from "./Todo";

export default props => {
  let { todos, handleCheck, handleDelete } = props;

  return (
    <div style={{ marginTop: 30 }}>
      {todos.length > 0 ? (
        <Paper style={{ width: "100%", margin: "0 auto" }}>
          <Grid
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%"
            }}
          >
            <Todo
              todos={todos}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          </Grid>
        </Paper>
      ) : null}
    </div>
  );
};
