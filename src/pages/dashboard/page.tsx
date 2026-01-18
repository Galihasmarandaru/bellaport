import { ModeToggle } from "@/components/mode-toggle";
import bella from "@/assets/images/bella.png";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { CardRecommendation } from "@/components/card-recommendation";
import { useNavigate } from "react-router";

export default function App() {
    const navigate = useNavigate()

    const words = ["Tips Travelling!", "Pilihan Outfit!", "Tips Sehat!"];

    return (
        <>
            <div className="text-right px-8 py-6">
                <ModeToggle />
            </div>
            <div className="pt-12">
                <div className="flex flex-col items-start justify-start px-6 gap-y-2 pb-12">
                    <p className="font-bad-script text-xl">Selamat Datang di</p>
                    <TextGenerateEffect className="text-6xl text-left font-bold" words="Bella Rhema Collection" />
                    {/* <div className="flex gap-x-2">
                        <span>Semua tentang</span>
                        <Shirt />
                        <Plane />
                        <Dumbbell />
                    </div> */}
                </div>
                <div className="flex items-center justify-between px-8 bg-gradient-to-r from-pink-300 via-green-100 to-green-600">
                    <div className="pt-12">
                        <img src={bella} alt="Bella" className="w-44" />
                    </div>
                    <span className="text-left font-light text-xl mt-6">
                        <p className="font-bold text-black">Kalian Bisa Cari</p>
                        <FlipWords words={words} />
                    </span>
                </div>
            </div>
            <div className="py-12 px-6 space-y-4">
                <CardRecommendation text="Rekomendasi Tempat Healing" onClick={() => {
                    navigate('/recommendation?type=1')
                }} />
                <CardRecommendation text="Outfit Olahraga" onClick={() => { }} />
                <CardRecommendation text="Outfit Healing Cantik" onClick={() => { }} />
            </div>
        </>
    )
}