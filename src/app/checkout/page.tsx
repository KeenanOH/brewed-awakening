import { Heading } from "@chakra-ui/react"

import CheckoutText from "@/app/checkout/_components/CheckoutText"
import OrderDetailsRow from "@/app/checkout/_components/OrderDetailsRow"

export default function Checkout(){
    return(
        <div>
            <Heading>Brewed Awakening</Heading>
            <CheckoutText label="Checkout"></CheckoutText>
            <OrderDetailsRow label={"Lemonade"} image={"/lemonade.png"} />

        </div>

    )

}