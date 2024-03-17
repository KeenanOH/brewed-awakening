import React from "react"

type CheckoutTextProps2 = {
    label: string;
};

export default function CheckoutText2({ label }: CheckoutTextProps2) {
    return (
        <div style={{ fontFamily: "Inter", fontWeight: "400px", width: "349px", height: "54px", top: "-240px", left: "45px" }}>
            {label}
        </div>
    )
}
