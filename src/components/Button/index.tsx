import { ButtonStyled } from "./Button.styed";

interface ButtonType {
  text: string
  click: (value:string) => void
  variation?: 0 | 1 
}

export function Button({ text, click, variation }: ButtonType) {
  
  function setValueOnClick() {
    click(text)
  }
  
  return (
    <ButtonStyled onClick={setValueOnClick} variation={variation}>
      {text}
    </ButtonStyled>
  )
}