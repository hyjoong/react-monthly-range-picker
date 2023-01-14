import React from "react";
import { StyledButton } from "./style";
import { ButtonProps } from "./type";

const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
