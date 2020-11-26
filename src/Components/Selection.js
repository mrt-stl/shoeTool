import React, { Component } from 'react'
import Chart from "./Chart"
import ShoeSelection from "./ShoeSelection"
import data from "../data/testData.json"

export default class Selection extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        const shoes = Object.keys(data[1])
        shoes.shift()
        this.setState({
            shoes: shoes,
        })
    }

    handleChange(e) {
        e.target.id === "shoe1" ? this.setState({ shoe1: e.target.value }) : this.setState({ shoe2: e.target.value })
    }

    render() {
        return (
            <div>
                <ShoeSelection shoes={this.state.shoes} passChange={ this.handleChange}/>
                <Chart chartKeys={[this.state.shoe1, this.state.shoe2 ? this.state.shoe2 : null]}/>
                
            </div>
        )
    }
}
