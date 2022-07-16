import React, { useState } from "react";
import Input from "@mui/material/Input";
import { Box, TextField } from "@mui/material";
import { Container } from "@mui/system";
import {AddButton} from "./AddButton";
import {useTheme} from "@mui/material";


export const AddTodo = () => {
    const [currentTodo, setCurrentTodo] = useState()
  const handleTodoChange = (e) => {
    setCurrentTodo(e.target.value)
  }
  const theme = useTheme()
  return (
    <Container maxWidth="sm"  disableGutters={true} sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Input
        required = {true}
        disableUnderline={true}
        placeholder="Create a new todo..."
        startAdornment={<AddButton todo={currentTodo} />}
        value={currentTodo}
        onChange={handleTodoChange}
        sx={{
          height: "64px",
          width: "540px",
          filter: `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))`,
          borderRadius: 2,
          border: `1px solid ${theme.palette.info.main}`,
          backgroundColor: theme.palette.common.white,
          color: theme.palette.common.black,
          fontSize: "18px",
          lineHeight: '18px',
          letterSpacing: '-0.25px',
          boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'

          
        }}
      />
    </Container>
  );
};
