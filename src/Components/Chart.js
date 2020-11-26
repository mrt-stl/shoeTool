import React, { Component } from "react"
import { ResponsiveRadar } from "@nivo/radar"
import data from "../data/testData.json"
import styled from "styled-components"

const ChartContainer = styled.div`
    height: 700px;
`

export default class Chart extends Component {
    render() {
        return (
            <ChartContainer>
                <ResponsiveRadar
                    data={data}
                    keys={this.props.chartKeys}
                    indexBy="attribute"
                    maxValue="10"
                    margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                    curve="linearClosed"
                    borderWidth={2}
                    borderColor={{ from: "color", modifiers: [] }}
                    gridLevels={5}
                    gridShape="circular"
                    gridLabelOffset={41}
                    enableDots={true}
                    dotSize={10}
                    dotColor={{ theme: "background" }}
                    dotBorderWidth={2}
                    dotBorderColor={{ from: "color" }}
                    enableDotLabel={true}
                    dotLabel="value"
                    dotLabelYOffset={-12}
                    colors={{ scheme: "dark2" }}
                    fillOpacity={0.25}
                    blendMode="multiply"
                    animate={true}
                    motionConfig="wobbly"
                    isInteractive={true}
                    theme={{
                        fontSize: 14,
                        fontFamily: "Rockwell"
                    }}
                    legends={[
                        {
                            anchor: "top-left",
                            direction: "column",
                            translateX: -50,
                            translateY: -40,
                            itemWidth: 80,
                            itemHeight: 20,
                            itemTextColor: "#999",
                            symbolSize: 12,
                            symbolShape: "triangle",
                            effects: [
                                {
                                    on: "hover",
                                    style: {
                                        itemTextColor: "#000",
                                    },
                                },
                            ],
                        },
                    ]}
                />
            </ChartContainer>
        )
    }
}
