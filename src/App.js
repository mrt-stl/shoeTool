import { useState } from "react"
import PublicFE from "./Components/PublicFE"
import Login from "./Components/Login"
import Admin from "./Components/Admin"
import PrivateRoute from "./Components/elements/privatRoute"
import React from "react";
import { ProvideAuth } from "./utils/use-auth.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
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

export default function App() {
  return (
    <ProvideAuth>
            <GlobalStyle />

            <Router>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>

                    <PrivateRoute path="/admin">
                        <Admin />
                    </PrivateRoute>

                    <Route path="/">
                        <PublicFE />
                    </Route>
                </Switch>
            </Router>
    </ProvideAuth>
  );
}

