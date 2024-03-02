import React from "react"
interface HeadingProps {
    children : string
}

export default function Heading({ children }: HeadingProps) {
    return (
        <div className="text-xl">{ children }</div>
    )
}