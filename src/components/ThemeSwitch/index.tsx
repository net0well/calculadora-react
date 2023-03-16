import { WrapperThemeStyled } from "./themeSwitch.styled";

interface ThemeSwithType {
  theme: number
  updateTheme: () => void
}



export function HeaderThemeSwith({ theme, updateTheme }:ThemeSwithType) {

  function handleSetTheme() {
    updateTheme()
  }

  return (
    <WrapperThemeStyled themes={theme}>
      <h2>calc</h2>
      <div className="wrapper">
        <div className="swithWrapper">
          <span>theme</span>
          <div className="swith">
            <span>1 2 3</span>
            <button onClick={handleSetTheme}/>
          </div>
        </div>
      </div>
    </WrapperThemeStyled>
  )
}