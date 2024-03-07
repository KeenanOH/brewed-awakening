import { Heading } from "@chakra-ui/react"

import CheckoutButton from "@/app/checkout/_components/CheckoutButton"
import CheckoutText from "@/app/checkout/_components/CheckoutText"
import OrderDetailsRow from "@/app/checkout/_components/OrderDetailsRow"


export default function Checkout() {
    return (
        <div style={{ margin: "50px" }}>
            <Heading>Brewed Awakening</Heading>
            <div style={{ margin: "50px" }}>
                <CheckoutText label="Checkout"></CheckoutText>
            </div>
            <div style={{ margin: "50px" }}>
                <OrderDetailsRow label={"Lemonade"} image={"/lemonade.png"} />
            </div>
            <div style={{ margin: "50px" }}>
                <CheckoutButton label={"Checkout"}/>
            </div>
        </div>
    )
}