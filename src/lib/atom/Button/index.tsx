import { ComponentPropsWithoutRef, ReactNode } from "react";
import { StyledButton } from "./style";

export interface ButtonProps
  extends ComponentPropsWithoutRef<typeof StyledButton> {
  children: ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
