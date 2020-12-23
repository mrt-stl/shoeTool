import React from "react"
import AdminButton from "./publicFE/adminButton"
import Title from "./elements/title"
import Selection from "./publicFE/Selection"

export default class PublicFE extends React.Component {
    render() {
        return (
            <div>
                <AdminButton />
                <Title title="Shoe-Tool" />
                <Selection />
            </div>
        )
    }
}
