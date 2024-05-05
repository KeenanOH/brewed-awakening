"use client"

import { Button } from "@chakra-ui/react"

import FatButton from "@/app/_components/FatButton"
import ItemCard from "../_components/ItemCard"

export default function TestPage() {
    return (
        <div>
            <FatButton label="FatButton" onClick={ () => console.log("FatButton Pressed") } />
            <ItemCard item={ { name: "Chai", imageUrl: "placehold.it/250", id: "" } }  onClick={ () => console.log("Ordered Chai.") } />
        </div>
    )
}
