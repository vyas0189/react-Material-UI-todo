import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Divider,
  IconButton
} from "@material-ui/core";

export default props => {
  let { todos, handleCheck, handleDelete } = props;
  return (
    <List style={{ width: "100%" }}>
      {todos.map((todo, index) => (
        <div key={index}>
          <ListItem>
            <Checkbox
              checked={todo.checked}
              onChange={() => {
                handleCheck(todo.id);
              }}
            />
            {todo.checked ? (
              <ListItemText
                style={{
                  textDecoration: "line-through",
                  wordWrap: "break-word"
                }}
              >
                {todo.item}
              </ListItemText>
            ) : (
              <ListItemText
                style={{
                  wordWrap: "break-word"
                }}
              >
                {todo.item}
              </ListItemText>
            )}

            <IconButton
              onClick={e => {
                handleDelete(todo.id);
              }}
            >
              <DeleteIcon
                style={{
                  color: "red"
                }}
              />
            </IconButton>
          </ListItem>
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
