import React from 'react'

function HeadingTitle({ text }) {
    return <h1>{text}</h1>
}

export default function App() {
    return (
        <div>
            <HeadingTitle text="Brewed Awakening" />
        </div>
    )
}