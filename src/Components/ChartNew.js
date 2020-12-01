import React from "react"
import {
    VictoryChart,
    VictoryPolarAxis,
    VictoryGroup,
    VictoryTheme,
    VictoryArea,
    VictoryLabel,
    VictoryLegend,
    VictoryTooltip,
} from "victory"
import styled from "styled-components"

const Container = styled.div`
    width: 70%;
    margin-top: 50px;
`

export default class ChartNew extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            maxima: 10,
        }
    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (
            nextProps.shoe1Data !== this.props.shoe1Data ||
            nextProps.shoe2Data !== this.props.shoe2Data
        ) {
            this.setState({
                shoe1Data: nextProps.shoe1Data,
                shoe2Data: nextProps.shoe2Data,
                data: this.processData([
                    nextProps.shoe1Data,
                    nextProps.shoe2Data,
                ]),
            })
        }
    }

    processData(data) {
        const makeDataArray = (d) => {
            return Object.keys(d).map((key) => {
                return { x: key, y: d[key] / 10 }
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
                        x={250}
                        y={0}
                        title="Legende"
                        orientation="vertical"
                        gutter={25}
                        style={{
                            title: { fontSize: 9, fontFamily: "Rockwell" },
                            labels: { fontFamily: "Rockwell", fontSize: 4 },
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
                        labels={() => `KOMM SCHON!`}
                        labelComponent={<VictoryTooltip />}
                    >
                        {this.state.data
                            ? this.state.data.map((data, i) => {
                                  return <VictoryArea key={i} data={data} />
                              })
                            : null}
                    </VictoryGroup>
                    {this.state.data
                        ? this.state.data[0].map((key, i) => {
                              return (
                                  <VictoryPolarAxis
                                      key={i}
                                      dependentAxis
                                      style={{
                                          axisLabel: {
                                              padding:
                                                  i === 2 || i === 5 || i === 6
                                                      ? 18
                                                      : 30,
                                              fontSize: 6,
                                          },
                                          axis: { stroke: "none" },
                                          grid: {
                                              stroke: "gray",
                                              strokeWidth: 0.1,
                                              opacity: 0.08,
                                          },
                                      }}
                                      tickLabelComponent={
                                          i === 1 ? (
                                              <VictoryLabel
                                                  labelPlacement="vertical"
                                                  style={{
                                                      fontSize: 4,
                                                      fill: "gray",
                                                      fontFamily: "Rockwell",
                                                  }}
                                              />
                                          ) : (
                                              <VictoryLabel
                                                  style={{ display: "none" }}
                                              />
                                          )
                                      }
                                      labelPlacement="vertical"
                                      axisValue={i + 1}
                                      label={key.x}
                                      tickFormat={(t) =>
                                          Math.ceil(t * this.state.maxima)
                                      }
                                      tickValues={[
                                          0.1,
                                          0.2,
                                          0.3,
                                          0.4,
                                          0.5,
                                          0.6,
                                          0.7,
                                          0.8,
                                          0.9,
                                          1,
                                      ]}
                                  />
                              )
                          })
                        : null}
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
