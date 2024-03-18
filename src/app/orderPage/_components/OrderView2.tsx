import { Card, Text } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
import Image from "next/image"

type OrderDetailRowProps1 = {
    label : string
    image : string
}


export default function OrderDetailsRowOrderPage1({ label, image }: OrderDetailRowProps1) {
    return (
        <Card>
            <Flex>
                <Image src={ image } alt ="NoImage" width={ 40 } height={ 40 }/>
                <Text>{label}</Text>
            </Flex>
        </Card>
    )
}