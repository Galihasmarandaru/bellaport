import bella from "@/assets/images/bella.png";
import footer from "@/assets/images/footer.png";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { CardRecommendation } from "@/components/card-recommendation";
import { useNavigate } from "react-router";
import { LuHotel } from "react-icons/lu";
import { SiShopee, SiTiktok, SiWhatsapp } from "react-icons/si";
import { MdIosShare } from "react-icons/md";
import { ButtonContact } from "@/components/button-contact";
import InstagramIcon from "@/components/icons/instagram-icon";
import { useDialog } from "@/context/hooks/use-dialog";
import { ModalConfirm } from "@/components/share-dialog";


export default function App() {
    const navigate = useNavigate()
    const shareDialog = useDialog()

    return (
        <div className="h-screen flex flex-col justify-between bg-[#c4dfe6]">
            <ModalConfirm open={shareDialog.open} onOpenChange={shareDialog.onOpenChange} />
            <div className="pt-8">
                <div className="flex justify-end items-center px-6">
                    <ButtonContact onClick={() => shareDialog.onOpenChange(true)}>
                        <MdIosShare size={20} />
                    </ButtonContact>
                </div>
                <div className="mt-8 flex items-center justify-center gap-x-4">
                    <div className="relative w-28 h-28 rounded-full overflow-hidden bg-[#66A5AD] backdrop-blur-lg p-8 border border-white/30 shadow-xl">
                        <img src={bella} alt="Avatar" className="absolute inset-0 w-full h-full object-cover object-top top-4" />
                    </div>
                    <div className="mt-6 px-6 text-left">
                        <p className="font-bad-script text-[#003B46] text-xl">Hi there! I'm</p>
                        <TextGenerateEffect className="text-xl font-bold" words="Bella Rhema Agnesia" />
                    </div>
                </div>
                <div className="mt-8 py-6 px-6 ">
                    <div className="space-y-4">
                        <CardRecommendation icon={<LuHotel size={24} />} text="Rekomendasi Penginapan" onClick={() => navigate('/recommendation?type=1')} />
                        <CardRecommendation icon={<SiShopee size={24} />} text="Link Shopee" onClick={() => { }} />
                        <CardRecommendation icon={<SiTiktok size={24} />} text="Link Tiktok Shop" onClick={() => { }} />
                    </div>
                </div>
                <div className="mt-8 text-center space-y-5">
                    <p className="text-[18px]">Business Inquires</p>
                    <div className="flex justify-center items-center gap-x-4">
                        <ButtonContact onClick={() => { }}>
                            <SiWhatsapp size={20} color="#25D366" />
                        </ButtonContact>
                        <ButtonContact onClick={() => { }}>
                            <InstagramIcon size={20} />
                        </ButtonContact>
                        <ButtonContact onClick={() => { }}>
                            <SiTiktok size={20} />
                        </ButtonContact>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-b from-[#c4dfe6] to-[#66A5AD]">
                <img src={footer} alt="footer" />
            </div>
        </div>
    )
}