import React, { useState, useEffect } from "react"
import Title from "./elements/title"
import styled from "styled-components"
import { useAuth } from "../utils/use-auth"
import firebase from "firebase"
import ShoePlaceholder from "../static/shoePlaceholder.svg"
import ShoeSelection from "./publicFE/ShoeSelection"

const Logout = styled.div`
    position: fixed;
    width: fit-content;
    cursor: pointer;
    top: 40px;
    left: 40px;

    :hover {
        transform: scale(1.1);
        transition: transform 0.2s linear;
    }
`

const FormContainer = styled.form`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const SingleInput = styled.div`
    display: flex;
    flex-basis: 50%;
    max-width: 50%;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 30px;

    label {
        flex-basis: 80%;
        text-align: center;
    }

    input {
        flex-basis: 80%;
    }
`

const SubmitButton = styled.input`
    margin: 50px auto;
    font-size: 24px;
    background-color: #f81735;
    border-radius: 5px;
    padding: 5px 20px;
    color: white;
    cursor: pointer;
    border: 0px;

    :hover {
        transform: scale(1.05);
        transition: transform 0.2s linear;
    }
`

export default function Admin() {
    // all the shoes with the belonging properties
    const [shoeProps, setShoeProps] = useState()
    // an array containing just the names of the shoes to map over for the selection
    const [shoesArr, setShoesArr] = useState()
    // name and props of the selected shoe in the selection
    const [selectedShoeData, setSelectedShoeData] = useState()

    const [Gewicht, setGewicht] = useState()
    const [Aussehen, setAussehen] = useState()
    const [Grip, setGrip] = useState()
    const [Haltbarkeit, setHaltbarkeit] = useState()
    const [Komfort, setKomfort] = useState()
    const [Dämpfung, setDämpfung] = useState()
    const [Reaktionsfreudigkeit, setReaktionsfreudigkeit] = useState()
    const [Sprengung, setSprengung] = useState()
    const [Preis, setPreis] = useState()
    const [Kilometer, setKilometer] = useState()
    const [ShoeImage, setShoeImage] = useState()
    const [Name, setName] = useState()

    // const shoeProperties = [
    //     "Gewicht",
    //     "Aussehen",
    //     "Grip",
    //     "Haltbarkeit",
    //     "Komfort",
    //     "Dämpfung",
    //     "Reaktionsfreudigkeit",
    // ]
    const auth = useAuth()
    const handleClick = () => {
        try {
            auth.signout()
        } catch (error) {
            alert(error)
        }
    }

    const handleValueChange = (e) => {
        switch (e.target.id) {
            case "Gewicht":
                setGewicht(e.target.value)
                break
            case "Aussehen":
                setAussehen(e.target.value)
                break
            case "Grip":
                setGrip(e.target.value)
                break
            case "Haltbarkeit":
                setHaltbarkeit(e.target.value)
                break
            case "Komfort":
                setKomfort(e.target.value)
                break
            case "Dämpfung":
                setDämpfung(e.target.value)
                break
            case "Reaktionsfreudigkeit":
                setReaktionsfreudigkeit(e.target.value)
                break
            case "Preis":
                setPreis(e.target.value)
                break
            case "Kilometer":
                setKilometer(e.target.value)
                break
            case "Sprengung":
                setSprengung(e.target.value)
                break
            case "ShoeImage":
                setShoeImage(e.target.value)
                break
            case "Name":
                setName(e.target.value)
                break

            default:
                return
        }
    }

    useEffect(() => {
        const database = firebase.database().ref().child("shoes")

        database.on("value", (snap) => {
            const data = snap.val()
            const shoeArr = Object.keys(data)
            const shoeData = []
            shoeArr.map((shoe) => {
                const obj = {}
                obj[shoe] = data[shoe]
                return shoeData.push(obj)
            })
            setShoeProps(shoeData)
            setShoesArr(shoeArr)
        })
    }, [])

    const handleSelectionChange = (e) => {
        const targetShoe = e.target.value
        const targetShoeIndex = shoesArr.indexOf(targetShoe)

        setSelectedShoeData(shoeProps[targetShoeIndex])
    }

    useEffect(() => {
        if (selectedShoeData) {
            setGewicht(
                selectedShoeData[Object.keys(selectedShoeData)[0]].review[
                    "Gewicht"
                ]
            )
            setAussehen(
                selectedShoeData[Object.keys(selectedShoeData)[0]].review[
                    "Aussehen"
                ]
            )
            setGrip(
                selectedShoeData[Object.keys(selectedShoeData)[0]].review[
                    "Grip"
                ]
            )
            setHaltbarkeit(
                selectedShoeData[Object.keys(selectedShoeData)[0]].review[
                    "Haltbarkeit"
                ]
            )
            setKomfort(
                selectedShoeData[Object.keys(selectedShoeData)[0]].review[
                    "Komfort"
                ]
            )
            setDämpfung(
                selectedShoeData[Object.keys(selectedShoeData)[0]].review[
                    "Dämpfung"
                ]
            )
            setReaktionsfreudigkeit(
                selectedShoeData[Object.keys(selectedShoeData)[0]].review[
                    "Reaktionsfreudigkeit"
                ]
            )

            setKilometer(
                selectedShoeData[Object.keys(selectedShoeData)[0]].meta[
                    "gelaufene Kilometer"
                ]
            )
            setPreis(
                selectedShoeData[Object.keys(selectedShoeData)[0]].meta["Preis"]
            )
            setSprengung(
                selectedShoeData[Object.keys(selectedShoeData)[0]].meta[
                    "Sprengung"
                ]
            )
            setShoeImage(
                selectedShoeData[Object.keys(selectedShoeData)[0]].image
            )
            setName(Object.keys(selectedShoeData)[0])
        }
    }, [selectedShoeData])

    const handleSubmit = () => {
        firebase
            .database()
            .ref("shoes/" + Name)
            .set({
                review: {
                    Grip: Grip,
                    Aussehen: Aussehen,
                    Gewicht: Gewicht,
                    Reaktionsfreudigkeit: Reaktionsfreudigkeit,
                    Dämpfung: Dämpfung,
                    Komfort: Komfort,
                    Haltbarkeit: Haltbarkeit,
                },
                image: ShoeImage,
                meta: {
                    Sprengung: Sprengung,
                    Preis: Preis,
                    "gelaufene Kilometer": Kilometer,
                },
            })
    }

    const handleReset = () => {
        setSelectedShoeData(false)
        setName("")
        setShoeImage("")
        setGewicht(5)
    }

    return (
        <div>
            <Logout onClick={handleClick}>Logout</Logout>
            <Title title="Admin-Oberfläche" />
            <ShoeSelection
                shoes={shoesArr}
                passChange={handleSelectionChange}
                selectionId="shoe1"
                title="Wähle einen Schuh"
                selectedShoeImg={
                    selectedShoeData
                        ? selectedShoeData[Object.keys(selectedShoeData)[0]]
                              .image
                        : `${ShoePlaceholder}`
                }
            />
            <button onClick={handleReset}>Reset</button>
            <FormContainer onSubmit={handleSubmit}>
                <SingleInput>
                    <label HtmlFor="Name">Name:</label>
                    <input
                        onChange={handleValueChange}
                        value={selectedShoeData ? Name : null}
                        type="text"
                        id="Name"
                    ></input>
                </SingleInput>

                <SingleInput>
                    <label HtmlFor="ShoeImage">Bild-URL:</label>
                    <input
                        onChange={handleValueChange}
                        value={selectedShoeData ? ShoeImage : null}
                        type="text"
                        id="ShoeImage"
                    ></input>
                </SingleInput>

                <SingleInput>
                    <label HtmlFor="Gewicht">Gewicht: {Gewicht}</label>
                    <input
                        onChange={handleValueChange}
                        value={selectedShoeData ? Gewicht : null}
                        type="range"
                        id="Gewicht"
                        name="points"
                        min="0"
                        max="10"
                    ></input>
                </SingleInput>

                <SingleInput>
                    <label HtmlFor="Aussehen">Aussehen: {Aussehen}</label>
                    <input
                        onChange={handleValueChange}
                        value={selectedShoeData ? Aussehen : null}
                        type="range"
                        id="Aussehen"
                        name="points"
                        min="0"
                        max="10"
                    ></input>
                </SingleInput>

                <SingleInput>
                    <label HtmlFor="Grip">Grip: {Grip}</label>
                    <input
                        onChange={handleValueChange}
                        value={selectedShoeData ? Grip : null}
                        type="range"
                        id="Grip"
                        name="points"
                        min="0"
                        max="10"
                    ></input>
                </SingleInput>

                <SingleInput>
                    <label HtmlFor="Haltbarkeit">
                        Haltbarkeit: {Haltbarkeit}
                    </label>
                    <input
                        onChange={handleValueChange}
                        value={selectedShoeData ? Haltbarkeit : null}
                        type="range"
                        id="Haltbarkeit"
                        name="points"
                        min="0"
                        max="10"
                    ></input>
                </SingleInput>
                <SingleInput>
                    <label HtmlFor="Komfort">Komfort: {Komfort}</label>
                    <input
                        onChange={handleValueChange}
                        value={selectedShoeData ? Komfort : null}
                        type="range"
                        id="Komfort"
                        name="points"
                        min="0"
                        max="10"
                    ></input>
                </SingleInput>
                <SingleInput>
                    <label HtmlFor="Dämpfung">Dämpfung: {Dämpfung}</label>
                    <input
                        onChange={handleValueChange}
                        value={selectedShoeData ? Dämpfung : null}
                        type="range"
                        id="Dämpfung"
                        name="points"
                        min="0"
                        max="10"
                    ></input>
                </SingleInput>
                <SingleInput>
                    <label HtmlFor="Reaktionsfreudigkeit">
                        Reaktionsfreudigkeit: {Reaktionsfreudigkeit}
                    </label>
                    <input
                        onChange={handleValueChange}
                        value={selectedShoeData ? Reaktionsfreudigkeit : null}
                        type="range"
                        id="Reaktionsfreudigkeit"
                        name="points"
                        min="0"
                        max="10"
                    ></input>
                </SingleInput>

                <SingleInput>
                    <label HtmlFor="Preis">Preis: {Preis}€</label>
                    <input
                        onChange={handleValueChange}
                        value={selectedShoeData ? Preis : null}
                        type="range"
                        id="Preis"
                        name="points"
                        min="0"
                        max="400"
                    ></input>
                </SingleInput>

                <SingleInput>
                    <label HtmlFor="Kilometer">
                        gelaufene Kilometer: {Kilometer}km
                    </label>
                    <input
                        onChange={handleValueChange}
                        value={selectedShoeData ? Kilometer : null}
                        type="range"
                        id="Kilometer"
                        name="points"
                        min="0"
                        max="1000"
                    ></input>
                </SingleInput>

                <SingleInput>
                    <label HtmlFor="Sprengung">Sprengung: {Sprengung}mm</label>
                    <input
                        onChange={handleValueChange}
                        value={selectedShoeData ? Sprengung : null}
                        type="range"
                        id="Sprengung"
                        name="points"
                        min="0"
                        max="14"
                    ></input>
                </SingleInput>

                <SubmitButton type="reset" onClick={handleSubmit} value={selectedShoeData ? "Update" : "Erstellen"}/>
            </FormContainer>
        </div>
    )
}
