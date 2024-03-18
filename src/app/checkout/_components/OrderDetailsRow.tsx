import { Card, Flex, Text } from "@chakra-ui/react"
import Image from "next/image"
import React from "react"

type DetailRowProps = {
    label: string;
    image: string;
    width: string;
    height: string;
    borderRadius: string;
    borderWidth: string;
    borderColor: string;
};

export default function OrderDetailsRow({ label, image, width, height,  borderRadius, borderWidth, borderColor }: DetailRowProps) {
    return (
        <Card variant="outline" width={width} height={height} borderRadius={borderRadius} borderWidth={borderWidth} borderColor={borderColor}>
            <Flex alignItems="center">
                <Image src={image} alt="NoImage" width={40} height={40} />
                <Text ml={2}>{label}</Text> {}
            </Flex>
        </Card>
    )
}
