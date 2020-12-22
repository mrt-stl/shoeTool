import AdminButton from "./Components/adminButton"
import Title from "./Components/title"
import Selection from "./Components/Selection"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
body {
  font-family: Geneva;
  box-sizing: border-box;
  
  ::before, ::after {
    box-sizing: border-box;
  }
}
  `

function App() {
    return (
        <div className="App">
          <AdminButton/>
          <Title />
          <Selection />
          <GlobalStyle />
        </div>
    )
}

export default App
