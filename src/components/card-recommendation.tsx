import { Card, CardContent } from "./ui/card"
import type { ReactElement } from "react"

interface Props {
    icon: ReactElement
    text: string
    onClick: () => void
}

export function CardRecommendation({ text, onClick, icon }: Props) {
    return (
        <Card>
            <CardContent className="flex justify-between items-center text-[#003B46]" onClick={onClick}>
                {icon}
                <div className="w-4/5"><p className="text-[18px] text-left">{text}</p></div>
            </CardContent>
        </Card>
    )
}