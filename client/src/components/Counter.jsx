import React, {
  useEffect,
  useContext,
  useState,
  useInsertionEffect,
} from "react";

import TodoApi from "../apis/Todo.api";
import { TodoContext } from "../context/TodoContext";

export const Counter = (props) => {
  const { numberOfIncompletedTodos, setNumberOfIncompletedTodos } =
    useContext(TodoContext);

  useInsertionEffect(() => {
    const fetchData = async () => {
      try {
        const inCompletedTodos = await TodoApi.get("/completed");
        setNumberOfIncompletedTodos(
          inCompletedTodos.data.data.numberOfIncompletedTodos
        );
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  });
  return <div>{numberOfIncompletedTodos} Items left</div>;
};
