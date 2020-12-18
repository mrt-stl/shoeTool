import React, { Component } from "react"
import styled from "styled-components"
import { ReactComponent as Background } from "../static/background.svg"

const TitleContainer = styled.div`
    width: 100%;
    transition: all 1s linear;
    display: flex;
    justify-content: center;

    h1 {
        font-size: 90px;
        text-align: center;
        position: absolute;
        top: 150px;
        z-index: 2;
    }

    p {
        text-align: center;
    }
`
const StyledSvg = styled(Background)`
    width: 100%;
    height: auto;
    opacity: 0.4;
    z-index: 1;

    path {
        stroke-width: ${props => props.strokeWidth}px;
        transition: all 2s linear;
    }
`

export default class title extends Component {
    constructor(props) {
        super(props)
        this.state = {
            strokeWidth: 3,
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                strokeWidth: Math.floor(Math.random() * 5),
            })
        }, 2000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <TitleContainer>
                <h1>Shoe-Tool 👟</h1>
                <StyledSvg strokeWidth={this.state.strokeWidth} />
            </TitleContainer>
        )
    }
}
