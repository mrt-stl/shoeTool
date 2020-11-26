import React, { Component } from 'react'
import styled from "styled-components"

const TitleContainer = styled.div`
margin-top: 150px;
margin-bottom: 100px;
    width: 100%;
    font-family: Rockwell;

    h1 {
        font-size: 90px;
        text-align: center;
    }

    p {
        text-align: center;
    }
`

export default class title extends Component {
    render() {
        return (
            <TitleContainer>
                <h1>Shoe-Tool 👟</h1>
            </TitleContainer>
        )
    }
}
