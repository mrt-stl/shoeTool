import React from "react"
import AdminButton from "./elements/adminButton"
import Title from "./elements/title"
import Selection from "./publicFE/Selection"

export default class PublicFE extends React.Component {
    render() {
        return (
            <div>
                <AdminButton link="/admin" title="Admin" />
                <Title title="Shoe-Tool" />
                <Selection />
            </div>
        )
    }
}
