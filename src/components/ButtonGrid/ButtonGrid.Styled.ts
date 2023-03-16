import styled from "styled-components";
import { ButtonStyled } from "../Button/Button.styed";

export const ButtonGridStyled = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 1rem;
  background-color: ${(props) => props.theme.ButtonGridBackground};
  padding: 1.5rem;
  border-radius: 10px;

  & ${ButtonStyled}:nth-last-child(1) {
    grid-column: 3 / span 2;
  }
  & ${ButtonStyled}:nth-last-child(2) {
    grid-column: 1 / span 2;
  }
`