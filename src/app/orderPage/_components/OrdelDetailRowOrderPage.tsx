import { Card, Text } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
import Image from "next/image"

type OrderDetailRowProps = {
    label : string
    image : string
}


export default function OrderDetailsRowOrderPage({ label, image }: OrderDetailRowProps) {
    return (
        <Card>
            <Flex>
                <Image src={ image } alt ="NoImage" width={ 40 } height={ 40 }/>
                <Text>{label}</Text>
            </Flex>
        </Card>
    )
}