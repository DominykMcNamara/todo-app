import React from "react";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";

const CompleteTodo = styled(ButtonUnstyled)`
  border: 1px solid #e3e4f1;
  height: 24px;
  width: 24px;
  border-radius: 100%;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #ffffff;

  &:focus {
    background: linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
  }
`;

export const CompleteTodoButton = ({ completed }) => {
  return (
    <CompleteTodo>
      {completed && (
        <CheckIcon sx={{ color: "#ffffff", width: "20px", height: "20px" }} />
      )}
    </CompleteTodo>
  );
};
