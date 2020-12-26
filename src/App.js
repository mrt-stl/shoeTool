import PublicFE from "./Components/PublicFE"
import Login from "./Components/Login"
import Admin from "./Components/Admin"
import PrivateRoute from "./Components/elements/privatRoute"
import React from "react"
import { ProvideAuth } from "./utils/use-auth.js"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { createGlobalStyle } from "styled-components"
import { AnimatedSwitch } from "react-router-transition"

const GlobalStyle = createGlobalStyle`
body {
  font-family: Geneva;
  box-sizing: border-box;
  
  ::before, ::after {
    box-sizing: border-box;
  }
}
  `

export default function App() {
    return (
        <ProvideAuth>
            <GlobalStyle />

            <Router>
                <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                    className="switch-wrapper"
                >
                    <Route path="/login">
                        <Login />
                    </Route>

                    <PrivateRoute path="/admin">
                        <Admin />
                    </PrivateRoute>

                    <Route path="/">
                        <PublicFE />
                    </Route>
                </AnimatedSwitch>
            </Router>
        </ProvideAuth>
    )
}
