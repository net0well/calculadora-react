import styled from "styled-components";

export const CalculatorScreenStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.screenColors[0]};
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: end;
  padding: 1rem;

  font-family: 'Popins', sans-serif;
  font-weight: 700;
  color: ${(props) => props.theme.screenColors[1]};
  font-size: 3rem;
  letter-spacing: 0.5rem;

  position: relative;

  & div {
    max-width: 100%;
    max-height: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    user-select: none;
    scrollbar-width: none; /* Firefox */
    white-space: nowrap;

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge */
  }
  }
`

interface EastereggType {
  render: boolean
}
export const Easteregg = styled.div<EastereggType>`

  width: 100%;
  height: 100%;
  overflow: hidden;
  
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;

  ${(props) => props.render ? `display: flex;`: `display: none;`}
  justify-content: center;
  align-items: center;

  & > video {
    width: 100%;
  }
`