import { Heading } from "@chakra-ui/react"

import OrderDetailsRowOrderPage from "@/app/orderPage/_components/OrdelDetailRowOrderPage"
import OrderName from "@/app/orderPage/_components/OrderName"
import OrderDetailsRowOrderPage1 from "@/app/orderPage/_components/OrderView2"

export default function orderPage() {
    return (
        <div style={{ margin: "50px" }}> {/* Adding margin to create space */}
            <Heading>Brewed Awakening</Heading>
            <div style={{ marginBottom: "20px" }}> {/* Adding margin bottom to create space */}
                <OrderName label={"Miguel's Order"}></OrderName>
            </div>
            <div style={{ marginBottom: "20px" }}> {/* Adding margin bottom to create space */}
                <OrderDetailsRowOrderPage label={"Lemonade"} image={"/lemonade picture.png"} />
            </div>
            <div style={{ marginBottom: "20px" }}> {/* Adding margin bottom to create space */}
                <OrderDetailsRowOrderPage1 label={"Coffee"} image={"/coffee picture.png"} />
            </div>
        </div>
    )
}