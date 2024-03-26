import { Button, ButtonProps } from "@chakra-ui/react"
import React from "react"

interface CheckoutButtonProps extends ButtonProps {
    label: string;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({
    label,
    ...buttonProps // Spread the rest of the props
}) => {
    return (
        <Button {...buttonProps}>
            {label}
        </Button>
    )
}

export default CheckoutButton