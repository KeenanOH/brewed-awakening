type OrderNameProps = {
    label: string;
};

export default function OrderName({ label }: OrderNameProps) {
    return (
        <text style={{ font: "black", fontSize: "20px", width: "142px", height: "24px", top: "99px", left: "47px", color:"Black" }}>
            {label}
        </text>
    )
}