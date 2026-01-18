import { ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

interface Props {
    text: string
    onClick: () => void
}

export function CardRecommendation({ text, onClick }: Props) {
    return (
        <Card>
            <CardContent className="flex justify-between items-center">
                <p className="text-xl w-1/2">{text}</p>
                <Button onClick={onClick}>Lihat <ChevronRight /></Button>
            </CardContent>
        </Card>
    )
}