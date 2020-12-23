import React from "react"
import AdminButton from "./publicFE/adminButton"
import Title from "./elements/title"

export default class PublicFE extends React.Component {
    render() {
        return (
            <div>
                <AdminButton />
                <Title title="Admin-Oberfläche" />
            </div>
        )
    }
}
