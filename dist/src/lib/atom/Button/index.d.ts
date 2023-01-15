import { ComponentPropsWithoutRef, ReactNode } from "react";
import { StyledButton } from "./style";
export interface ButtonProps extends ComponentPropsWithoutRef<typeof StyledButton> {
    children: ReactNode;
}
declare const Button: ({ children, ...props }: ButtonProps) => JSX.Element;
export default Button;
