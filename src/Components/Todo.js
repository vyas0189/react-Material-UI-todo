import React from "react";
import { List, Divider } from "@material-ui/core";
import Item from "./Item";
export default props => {
  let { todos, handleCheck, handleDelete } = props;
  return (
    <List style={{ width: "100%" }}>
      {todos.map((todo, index) => (
        <div key={index}>
          <Item
            todo={todo}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
          {index !== todos.length - 1 ? (
            <li>
              <Divider light />
            </li>
          ) : null}
        </div>
      ))}
    </List>
  );
};
