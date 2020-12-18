import React, { Component } from "react"
import styled from "styled-components"
// import Chart from "./Chart"
import ChartNew from "./ChartNew"
import ShoeSelection from "./ShoeSelection"
import CarbonX from "../data/HokaOneOneCarbonX.json"
import SpeedGoat4GTX from "../data/HokaOneOneSpeedGoat4GTX.json"
import CliftonEdge from "../data/HokaOneOneCliftonEdge.json"
import GelCumulus from "../data/AsicsGelCumulus.json"
import OnRunningCloudsurfer from "../data/OnRunningClodsurfer.json"
import ShoePlaceholder from "../static/shoePlaceholder.svg"
import ShoePlaceholder2 from "../static/shoePlaceholder2.svg"

const SelectionContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
    flex-wrap: wrap;
`

export default class Selection extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleChange = this.handleChange.bind(this)
    }

    shoeData = [
        CarbonX,
        SpeedGoat4GTX,
        OnRunningCloudsurfer,
        CliftonEdge,
        GelCumulus,
    ]

    getShoesArr = (data) => {
        const shoeArr = []
        data.map((shoe) => {
            return shoeArr.push(Object.keys(shoe)[0])
        })
        return shoeArr
    }

    componentDidMount() {
        const shoes = this.getShoesArr(this.shoeData)
        this.setState({
            shoes: shoes,
            shoeData: this.shoeData,
        })
    }

    handleChange(e) {
        const targetShoe = e.target.value
        const targetShoeIndex = this.state.shoes.indexOf(targetShoe)
        e.target.id === "shoe1"
            ? this.setState({
                  shoe1: targetShoe,
                  shoe1Data: this.state.shoeData[targetShoeIndex],
              })
            : this.setState({
                  shoe2: targetShoe,
                  shoe2Data: this.state.shoeData[targetShoeIndex],
              })
    }

    render() {
        return (
            <SelectionContainer>
                <ShoeSelection
                    shoes={this.state.shoes}
                    passChange={this.handleChange}
                    selectionId="shoe1"
                    title="Wähle einen Schuh"
                    selectedShoeImg={
                        this.state.shoe1Data
                            ? this.state.shoe1Data[this.state.shoe1].image
                            : `${ShoePlaceholder}`
                    }
                />

                <ShoeSelection
                    shoes={this.state.shoes}
                    passChange={this.handleChange}
                    selectionId="shoe2"
                    title="...und einen Verlgeichsschuh"
                    selectedShoeImg={
                        this.state.shoe2Data
                            ? this.state.shoe2Data[this.state.shoe2].image
                            : `${ShoePlaceholder2}`
                    }
                />
                {/* <Chart chartKeys={[this.state.shoe1, this.state.shoe2 ? this.state.shoe2 : null]}/> */}
                <ChartNew
                    shoe1={this.state.shoe1}
                    shoe2={this.state.shoe2}
                    shoe1Data={
                        this.state.shoe1
                            ? this.state.shoe1Data[this.state.shoe1].review
                            : {
                                  Grip: 0,
                                  Aussehen: 0,
                                  Gewicht: 0,
                                  Reaktionsfreudigkeit: 0,
                                  Dämpfung: 0,
                                  Komfort: 0,
                                  Haltbarkeit: 0,
                              }
                    }
                    shoe2Data={
                        this.state.shoe2
                            ? this.state.shoe2Data[this.state.shoe2].review
                            : {
                                  Grip: 0,
                                  Aussehen: 0,
                                  Gewicht: 0,
                                  Reaktionsfreudigkeit: 0,
                                  Dämpfung: 0,
                                  Komfort: 0,
                                  Haltbarkeit: 0,
                              }
                    }
                />
            </SelectionContainer>
        )
    }
}
