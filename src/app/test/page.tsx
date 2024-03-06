"use client"

import { Button } from "@chakra-ui/react"

import FatButton from "@/app/_components/FatButton"

export default function TestPage() {
    return (
        <div>
            <FatButton label="FatButton" onClick={ () => console.log("FatButton Pressed") } />
            <Button>Test</Button>
        </div>
    )
}
