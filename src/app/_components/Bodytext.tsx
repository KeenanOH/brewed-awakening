// ProfilePicture.tsx

import React from "react"

interface ProfilePictureProps {
    imageURL: string;
    alt: string;
    size?: number;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ imageURL, alt, size = 100 }) => {
    const containerStyle: React.CSSProperties = {
        width: size,
        height: size,
        display: "inline-block",
        borderRadius: "55%",
        overflow: "hidden"
    }

    const imageStyle: React.CSSProperties = {
        width: "100%",
        height: "auto"
    }

    return (
        <div style={containerStyle}>
            <img src={imageURL} alt={alt} style={imageStyle} />
        </div>
    )
}

export default ProfilePicture
