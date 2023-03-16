import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.headerColor};

  display: flex;
  justify-content: center;
  align-items: center;
`