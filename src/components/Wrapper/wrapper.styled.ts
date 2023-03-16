import styled from "styled-components";

export const WrapperStyled = styled.main`
  width: 100%;
  height: calc(100% - 12rem);
  max-height: 700px;
  max-width: 600px;
  /* background-color: gray; */

  padding: 1rem;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 3rem 6rem 2fr;
  gap: 1rem;
`