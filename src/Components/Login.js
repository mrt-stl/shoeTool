import React, { useState } from "react"
import styled from "styled-components"
import Title from "./elements/title"
import AdminButton from "./elements/adminButton"
import { useAuth } from "../utils/use-auth"
import { useLocation, useHistory, Redirect } from "react-router-dom"

const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding-bottom: 80px;
`

const Input = styled.input`
    display: block;
    margin: 0 auto 40px auto;
    font-size: 24px;
    text-align: center;
`

const Label = styled.label`
    display: block;
    margin: 0 auto;
    width: fit-content;
`

const Button = styled.div`
    display: block;
    margin: 0 auto;
    width: fit-content;
    font-size: 24px;
    background-color: #f81735;
    border-radius: 5px;
    padding: 5px 20px;
    cursor: ${props => props.disabled ? "pointer" : "default"};
    color: white;

    :hover {
        transform: ${props => props.disabled ? "scale(1.1)" : ""};
        transition: transform 0.2s linear;
    }
`

export default function Login() {
    const [userMail, setUserMail] = useState("")
    const [userPassword, setUserPassword] = useState("")

    const validateFormFields = () => {
        return userPassword !== "" && userMail !== ""
    }

    const auth = useAuth()
    const history = useHistory()
    const location = useLocation()

    let { from } = location.state || { from: { pathname: "/" } }

    const handleSubmit = () => {
        try {
            auth.signin(userMail, userPassword, () => {
                history.replace(from)
            })
        } catch (error) {
            alert(error)
        }
    }

    return auth.user ? (
        <Redirect
            to={{
                pathname: "/admin",
                state: { from: location },
            }}
        />
    ) : (
        <LoginContainer>
            <AdminButton title="Home" link="/"/>
            <Title title="Login" />
            <form>
                <div>
                    <Label htmlFor="userName">E-Mail</Label>
                    <Input
                        value={userMail}
                        type="text"
                        onChange={(e) => setUserMail(e.target.value)}
                    />
                </div>
                <div>
                    <Label htmlFor="userPassword">Passwort</Label>
                    <Input
                        value={userPassword}
                        type="password"
                        onChange={(e) => setUserPassword(e.target.value)}
                        data-test="password"
                    />
                </div>
                <div>
                    <Button
                        disabled={validateFormFields()}
                        onClick={handleSubmit}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </LoginContainer>
    )
}
