import { ComponentPropsWithoutRef, ReactNode } from "react";
import { StyledButton } from "./style";
export interface ButtonProps extends ComponentPropsWithoutRef<typeof StyledButton> {
    children: ReactNode;
}
