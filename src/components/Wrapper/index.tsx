import { ReactNode } from "react";
import { WrapperStyled } from "./wrapper.styled";

interface WrapperTypes {
  children: ReactNode
}

export function Wrapper({ children }: WrapperTypes) {
  return (
    <WrapperStyled>
        {children}
    </WrapperStyled>
  )
}