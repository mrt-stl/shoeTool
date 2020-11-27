import Title from "./Components/title"
import Selection from "./Components/Selection"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
body {
  font-family: Rockwell;
  box-sizing: border-box;
  
  ::before, ::after {
    box-sizing: border-box;
  }
}
  `

function App() {
    return (
        <div className="App">
            <Title />
            <Selection />
            <GlobalStyle />
        </div>
    )
}

export default App
