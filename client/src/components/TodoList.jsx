import React, { useEffect, useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { Box } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import { Counter } from "./Counter";

import TodoApi from "../apis/Todo.api";
import { CompleteTodoButton } from "./CompleteTodoButton";

export const TodoList = (props) => {
  const { todos, setTodos } = useContext(TodoContext);
  const [completed, setCompleted] = useState(false);
  const [mode, setMode] = useState("all");
  useEffect(() => {
    const fetchTodos = async () => {
      if (mode === 'all') {
        try {
          const todoList = await TodoApi.get("/");
          setTodos(todoList.data.data.todos);
        } catch (err) {
          console.log(err);
        }
      }
    };
    fetchTodos();
  });

  const handleComplete = async (e, id) => {
    e.preventDefault();
    setCompleted(true);
    try {
      await TodoApi.put(`/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteCompleted = async (e) => {
    e.preventDefault();
    try {
      await TodoApi.delete("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <List
      sx={{
        width: "540px",
        margin: "30px auto",
        borderRadius: "50px",
        borderColor: "#979797",
        backgroundColor: "#ffffff",
      }}
    >
      {todos &&
        todos.map((todo) => {
          return (
            <>
              <ListItem key={todo.id}>
                <ListItemButton
                  onClick={(e) => handleComplete(e, todo.id)}
                  disableRipple
                  role={undefined}
                  dense
                >
                  <ListItemIcon>
                    <CompleteTodoButton completed={completed} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      textDecoration: todo.completed ? "line-through" : "none",
                    }}
                  >
                    {todo.description}
                  </ListItemText>
                </ListItemButton>
              </ListItem>

              <Divider />
            </>
          );
        })}
      <ListItem
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          color: "#9495A5",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <ListItem>
          <Counter />
        </ListItem>
        <ListItem
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <ListItemText
            sx={{
              marginRight: "10px",
              "&:hover": {
                color: "#3A7CFD",
              },
            }}
          >
            All{" "}
          </ListItemText>
          <ListItemText
            sx={{
              marginRight: "10px",
              "&:hover": {
                color: "#3A7CFD",
              },
            }}
          >
            Active
          </ListItemText>
          <ListItemText
            sx={{
              "&:hover": {
                color: "#3A7CFD",
              },
            }}
          >
            Completed
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText
            sx={{
              "&:hover": {
                color: "#3A7CFD",
              },
            }}
            onClick={(e) => handleDeleteCompleted(e)}
          >
            Clear Completed
          </ListItemText>
        </ListItem>
      </ListItem>
    </List>
  );
};
