import React from "react"

type CheckoutButtonProps = {

    onClick: () => void
}

export default function CheckoutButton({  onClick }: CheckoutButtonProps) {
    return (
        <div className={"text-[#319795]"} onClick={() => onClick}>
            More -{">"}
        </div>
    )

}