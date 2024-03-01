import React from "react"
interface GhostButtonProps {
    onClick: () => void
}
export default function GhostButton({ onClick }: GhostButtonProps) {
    return (
        <div className={"text-[#38B2AC]"} onClick={() => onClick}>
            More -{">"}
        </div>
    )
}