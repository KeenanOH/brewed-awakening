import { Button, Flex } from "@chakra-ui/react"
import React from "react"
import { FiArrowRight } from "react-icons/fi"

type CheckoutButtonProps = {
    label: string;
    rightIcon?: boolean;
    width: string;
    height: string;
    borderRadius: string;
    padding: string;

};

export default function CheckoutButton({ label, rightIcon, width, height,  borderRadius, padding }: CheckoutButtonProps){
    return (
        <Flex position="absolute" >
            <Button
                size="md"
                variant="solid"
                colorScheme="teal"
                rightIcon={rightIcon ? <FiArrowRight /> : undefined}
                width={width}
                height={height}
                borderRadius={borderRadius}
                padding={padding}
                cursor="pointer"
            >
                {label}
            </Button>
        </Flex>
    )
}
