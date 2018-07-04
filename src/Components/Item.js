import React from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const lineThrough = {
  textDecoration: "line-through",
  wordWrap: "break-word"
};
const noLine = { wordWrap: "break-word" };

export default props => {
  let { todo, handleCheck, handleDelete } = props;
  const lineStyle = todo.checked ? lineThrough : noLine;
  return (
    <ListItem>
      <Checkbox
        checked={todo.checked}
        onChange={() => {
          handleCheck(todo.id);
        }}
      />
      <ListItemText style={lineStyle}>{todo.item}</ListItemText>
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
  );
};
