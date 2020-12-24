import React from "react"
import AdminButton from "./publicFE/adminButton"
import Title from "./elements/title"
import styled from "styled-components"
import { useAuth } from "../utils/use-auth"

const Logout = styled.div`
    cursor: pointer;
    padding: 5px 15px;
`
export default function Admin() {
    
    const auth = useAuth()
    const handleClick = () => {
        try {
            auth.signout()
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div>
            <AdminButton />
            <Logout onClick={handleClick}>Logout</Logout>
            <Title title="Admin-Oberfläche" />
        </div>
    )
}
