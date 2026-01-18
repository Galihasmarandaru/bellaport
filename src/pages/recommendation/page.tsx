import { ButtonContact } from "@/components/button-contact"
import { Combobox } from "@/components/combobox"
import { useRecommendationContext } from "@/components/context/recommendation-provider"
import { useBack } from "@/context/hooks/use-back"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router"

export default function Page() {
    const { handleBack } = useBack()
    const { recommendations } = useRecommendationContext()

    console.log(recommendations)
    return (
        <div className="bg-[#c4dfe6]">
            <div className="flex justify-between items-center bg-[#c4dfe6] text-[#003B46] px-6 py-8">
                <ButtonContact onClick={handleBack}>
                    <ArrowLeft size={24} />
                </ButtonContact>
                <div className="flex space-x-4">
                    <span className="text-lg">Rekomendasi Penginapan</span>
                </div>
            </div>
            <div className="w-full">
                <Combobox />
            </div>
            <div className="grid grid-cols-2">
                {recommendations.map((item) => (
                    <Link key={item.id} className="w-full bg-white mx-auto border" to={item.link}>
                        <div className="relative h-[300px] overflow-hidden">
                            <img src={item.image} alt="" className="w-full inset-0 absolute h-full object-cover object-top" />
                        </div>
                        <div className="px-4 py-2">
                            <span>{item.title}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div >
    )
}