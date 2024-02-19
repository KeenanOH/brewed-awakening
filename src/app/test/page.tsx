"use client"

import FatButton from "@/app/_components/FatButton"

export default function TestPage() {
    return (
        <div>
            <FatButton label="FatButton" onClick={ () => console.log("FatButton Pressed") } />
        </div>
    )
}
