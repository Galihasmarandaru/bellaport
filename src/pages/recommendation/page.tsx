import { useRecommendationContext } from "@/components/context/recommendation-provider"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useBack } from "@/context/hooks/use-back"
import { ArrowLeft } from "lucide-react"

export default function Page() {
    const { handleBack } = useBack()
    const { recommendations } = useRecommendationContext()

    console.log(recommendations)
    return (
        <>
            <div className="flex justify-between items-center bg-card p-6">
                <ArrowLeft size={24} onClick={handleBack} />
                <div className="flex space-x-4">
                    <span className="text-lg">Rekomendasi Tempat Healing</span>
                </div>
            </div>
            <div className="pt-4 px-6 w-full">
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih kota" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">All</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="py-6 grid grid-cols-2">
                {recommendations.map((item) => (
                    <div key={item.id} className="bg-red-400">
                        <img src={item.image} alt="" />
                    </div>
                ))}
            </div>
        </>
    )
}