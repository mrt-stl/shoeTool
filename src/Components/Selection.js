import React, { Component } from "react"
// import Chart from "./Chart"
import ChartNew from "./ChartNew"
import ShoeSelection from "./ShoeSelection"
import CarbonX from "../data/HokaOneOneCarbonX.json"
import SpeedGoat4GTX from "../data/HokaOneOneSpeedGoat4GTX.json"
import OnRunningCloudsurfer from "../data/OnRunningClodsurfer.json"

export default class Selection extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleChange = this.handleChange.bind(this)
    }

    shoeData = [CarbonX, SpeedGoat4GTX, OnRunningCloudsurfer]

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
            <div>
                <ShoeSelection
                    shoes={this.state.shoes}
                    passChange={this.handleChange}
                />
                {/* <Chart chartKeys={[this.state.shoe1, this.state.shoe2 ? this.state.shoe2 : null]}/> */}
                <ChartNew
                    shoe1={this.state.shoe1}
                    shoe2={this.state.shoe2}
                    shoe1Data={
                        this.state.shoe1
                            ? this.state.shoe1Data[this.state.shoe1]
                            : { "Grip": 5, "Aussehen": 7, "Gewicht": 8, "Reaktionsfreudigkeit": 9, "Dämpfung": 7, "Komfort": 7, "Haltbarkeit": 3 }
                    }
                    shoe2Data={
                        this.state.shoe2
                            ? this.state.shoe2Data[this.state.shoe2]
                            : { "Grip": 5, "Aussehen": 7, "Gewicht": 8, "Reaktionsfreudigkeit": 9, "Dämpfung": 7, "Komfort": 7, "Haltbarkeit": 3 }
                    }
                />
            </div>
        )
    }
}
