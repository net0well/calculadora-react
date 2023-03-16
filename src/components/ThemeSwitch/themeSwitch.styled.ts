import styled, { css } from "styled-components";

interface WrapperThemeStyledType {
  themes: number
}

export const WrapperThemeStyled = styled.div<WrapperThemeStyledType>`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  font-family: 'Poppins', sans-serif;
  color: ${(props) => props.theme.headerFontColor};

  & .swithWrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  & .swith {
    position: relative;
    display: flex;
    align-items: center;
  }
  & .swith span { 
    position: absolute;
    top: -1.2rem;
    right: 0.2rem;
    font-weight: 600;
    font-size: 0.8rem;
    letter-spacing: 0.4rem;
  }
  & .swith button {
    appearance: none;
    position: relative;
    
    width: 70px;
    height: 26px;
    border: none;
    border-radius: 15px;
    background-color: ${(props) => props.theme.switchBackground};

    &::after {
      content: '';
      display: block;

      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.contrastColor[0]};

      transition: 0.2s ease-in;

      position: absolute;
      top: 3px; 
      left: 3px;
      ${(props) => {
          if(props.themes === 1) {
            return(
              css`transform:translateX(21px);`
            )
          } else if (props.themes === 2){
            return(
              css`transform:translateX(44px);`
            )
          }
        }
      }
    }     
  }
`