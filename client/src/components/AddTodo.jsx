import React, { useState } from "react";
import Input from "@mui/material/Input";
import { Box } from "@mui/material";
import { Container } from "@mui/system";
import {AddButton} from "./AddButton";


export const AddTodo = () => {
    const [currentTodo, setCurrentTodo] = useState(" ")
  const handleTodoChange = (e) => {
    e.preventDefault()
    setCurrentTodo(e.target.value)
  }


  return (
    <Container maxWidth="sm"  disableGutters={true} sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Input
      
        disableUnderline={true}
        placeholder="Create a new todo..."
        startAdornment={<AddButton todo={currentTodo} />}
        value={currentTodo}
        onChange={handleTodoChange}
        sx={{
          height: "64px",
          width: "540px",
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          borderRadius: 2,
          border: "1px solid #E3E4F1",
          backgroundColor: "#ffffff",
          color: "#393A4B",
          fontSize: "18px",
          lineHeight: '18px',
          letterSpacing: '-0.25px'
          
        }}
      />
    </Container>
  );
};
