"use client"

import CheckoutButton from "@/app/_components/CheckoutButton"
import FatButton from "@/app/_components/FatButton"
import GhostButton from "@/app/_components/GhostButton"
import Heading from "@/app/_components/Heading"

export default function TestPage() {

    function onGhostButtonClick() :void {
        console.log("Ghost Pressed")
    }
    function onCheckoutButton() :void {
        console.log("Checkout")
    }

    return (
        <div>
            <FatButton label="FatButton" onClick={ () => console.log("FatButton Pressed") } />
            <GhostButton onClick={ onGhostButtonClick } />
            <CheckoutButton onClick={onCheckoutButton}  /> 
            <Heading>Brewed Awakening</Heading>
        </div>
    )
}
