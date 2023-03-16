import { Children, ReactNode } from "react";
import { ButtonGridStyled } from "./ButtonGrid.Styled";

interface ButtonGridType {
  children: ReactNode
}

export function ButtonGrid({children}: ButtonGridType) {
  return(
    <ButtonGridStyled>
      {children}
    </ButtonGridStyled>
  )
}