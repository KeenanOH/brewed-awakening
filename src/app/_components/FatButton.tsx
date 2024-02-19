
type FatButtonProps = {
    label: string
    onClick: () => void
}

export default function FatButton({ label, onClick }: FatButtonProps) {
    return (
        <button className="rounded-md bg-[#38B2AC] h-20 w-96 hover:opacity-75 active:opacity-50" onClick={ () => onClick() }>
            <p className="text-3xl font-bold text-white">{ label }</p>
        </button>
    )
}
