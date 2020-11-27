import React from "react"
import {
    VictoryChart,
    VictoryPolarAxis,
    VictoryGroup,
    VictoryTheme,
    VictoryArea,
    VictoryLabel,
    VictoryLegend,
} from "victory"
import styled from "styled-components"

const Container = styled.div`
    height: 90vh;
    margin: 0 auto;
    padding-top: 50px;
`

export default class ChartNew extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          shoe1Data: [this.props.shoe1Data],
          shoe2Data: [this.props.shoe2Data],
        }
    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.shoe1Data !== this.state.shoe1Data) {
            this.setState({
              shoe1Data: nextProps.shoe1Data,
              data: this.processData([nextProps.shoe1Data, this.state.shoe2Data]),
              maxima: this.getMaxima([nextProps.shoe1Data, this.state.shoe2Data])
            })
        }
        if (nextProps.shoe2Data !== this.state.shoe2Data) {
          this.setState({
            shoe2Data: nextProps.shoe2Data,
            data: this.processData([this.state.shoe1Data, nextProps.shoe2Data]),
            maxima: this.getMaxima([this.state.shoe1Data, nextProps.shoe2Data])})
        }
    }

    componentDidMount() {
      this.setState({
        data: this.processData([this.state.shoe1Data, this.state.shoe2Data]),
        maxima: this.getMaxima([this.state.shoe1Data, this.state.shoe2Data])})
    }

    getMaxima(data) {
        // transform data into array per poperty (example => Geschwindigkeit: [9, 6])
        const groupedData = Object.keys(data[0]).reduce((memo, key) => {
            memo[key] = data.map((d) => d[key])
            return memo
        }, {})
        // making object with max values of every property
        return Object.keys(groupedData).reduce((memo, key) => {
            memo[key] = 10
            return memo
        }, {})
    }

    processData(data) {
        const maxByGroup = this.getMaxima(data)
        const makeDataArray = (d) => {
            return Object.keys(d).map((key) => {
                return { x: key, y: d[key] / maxByGroup[key] }
            })
        }
        return data.map((datum) => makeDataArray(datum))
    }

    render() {
        return (
            <Container>
                <VictoryChart
                    polar
                    theme={VictoryTheme.material}
                    domain={{ y: [0, 1] }}
                >
                    <VictoryLegend
                        x={300}
                        y={0}
                        title="Legende"
                        orientation="vertical"
                        gutter={25}
                        style={{
                            title: { fontSize: 9, fontFamily: "Rockwell" },
                            labels: { fontFamily: "Rockwell", fontSize: 7 },
                        }}
                        data={[
                            {
                                name: this.props.shoe1
                                    ? this.props.shoe1
                                    : "Schuh #1",
                                symbol: { fill: "tomato", type: "star" },
                            },
                            {
                                name: this.props.shoe2
                                    ? this.props.shoe2
                                    : "Schuh #2",
                                symbol: { fill: "gold", type: "star" },
                            },
                        ]}
                    />
                    <VictoryGroup
                        colorScale={["tomato", "gold"]}
                        style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
                    >
                        {this.state.data ? this.state.data.map((data, i) => {
                            return <VictoryArea key={i} data={data} />
                        }) : null}
                    </VictoryGroup>
                    {this.state.data ? Object.keys(this.state.maxima).map((key, i) => {
                        return (
                            <VictoryPolarAxis
                                key={i}
                                dependentAxis
                                style={{
                                    axisLabel: { padding: 30 },
                                    axis: { stroke: "none" },
                                    grid: {
                                        stroke: "grey",
                                        strokeWidth: 0.25,
                                        opacity: 0.2,
                                    },
                                }}
                                tickLabelComponent={
                                    <VictoryLabel labelPlacement="vertical" />
                                }
                                labelPlacement="perpendicular"
                                axisValue={i + 1}
                                label={key}
                                tickFormat={(t) =>
                                    Math.ceil(t * this.state.maxima[key])
                                }
                                tickValues={[0.5, 1]}
                            />
                        )
                    }) : null}
                    <VictoryPolarAxis
                        labelPlacement="parallel"
                        tickFormat={() => ""}
                        style={{
                            axis: { stroke: "none" },
                            grid: { stroke: "grey", opacity: 0.2 },
                        }}
                    />
                </VictoryChart>
            </Container>
        )
    }
}
