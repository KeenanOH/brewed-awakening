type CheckoutButtonProps = {
    label: string
}
export default function CheckoutButton({ label }: CheckoutButtonProps){
    return (
        <button style={{ font: "Inter", fontSize: "16px", width: "131px", height:"Fixed (40px)", top:"488px",
            backgroundColor: "teal", color: "white", borderRadius: "5px", padding: "10px", cursor: "pointer"  }}>
            {label}
        </button>
    )
}
