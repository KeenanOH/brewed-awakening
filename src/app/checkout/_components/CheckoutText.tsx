import React from "react"

type CheckoutTextProps = {
    label: string;
};

export default function CheckoutText({ label }: CheckoutTextProps) {
    return (
        <div style={{ fontFamily: "Inter", fontSize: "20px", width: "104px", height: "24px", top: "-253px", left: "300px" }}>
            {label}
        </div>
    )
}
