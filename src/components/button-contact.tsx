interface Props {
    children: React.ReactNode
    onClick: () => void
}

export function ButtonContact({ onClick, children }: Props) {
    return (
        <div className="max-w-12 bg-white active:bg-neutral-100 rounded-full p-3 border shadow-sm" onClick={onClick}>
            {children}
        </div>
    )
}