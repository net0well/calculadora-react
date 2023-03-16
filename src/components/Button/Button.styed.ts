import styled, { css } from "styled-components";

interface ButtonStyledType {
  variation?: 0 | 1 
}
export const ButtonStyled = styled.button<ButtonStyledType>`
  width: 100%;
  height: 100%;
  /* width: 100px;
  height: 60px; */

  ${(props) => props.variation !== undefined 
    ? `background-color: ${props.theme.contrastColor[props.variation]};`
    : `background-color: ${props.theme.ButtonColors[0]};`}
  
  color: ${(props) => props.variation !== undefined
    ? `${props.theme.textButtonContrastColors[props.variation]}`
    : `${props.theme.ButtonColors[1]}`
  };
  
  border: none;
  border-radius: 10px;

  font-family: 'Popins', sans-serif;
  font-weight: 600;
  font-size: 2rem;
  user-select: none;

  box-shadow: 0px 5px 0px 0px ${(props) => props.variation !== undefined
    ? `${props.theme.ButtonShadow[props.variation]}`
    : `${props.theme.ButtonColors[2]}`
  };
  transition: all 0.1s ease-in-out;

  &:active {
    box-shadow: 0px 2px 0px 0px ${(props) => props.variation !== undefined
    ? `${props.theme.ButtonShadow[props.variation]}`
    : `${props.theme.ButtonColors[2]}`
  };
    transform: translateY(2px);
  }
`