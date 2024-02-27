import React from "react"

function GhostButton({ label, onClick }) {
    return (
        <button className="ghost-button" onClick={onClick}>
            {label}
        </button>
    )
}

export default function App() {
    function handleButtonClick() {
        // Functionality to execute when the button is clicked
        console.log("Button clicked!")
    }

    return (
        <div>
            <GhostButton label="More ->" onClick={handleButtonClick} />
        </div>
    )
}