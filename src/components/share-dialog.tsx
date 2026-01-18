import { AiOutlineLink } from "react-icons/ai";
import { ButtonContact } from "./button-contact";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { toast } from "sonner"

type ModalConfirmProps = {
    open: boolean
    onOpenChange: (open: boolean) => void
    onClose?: () => void
}

export function ModalConfirm({ open, onOpenChange }: ModalConfirmProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle>Share this profile</DialogTitle>
                </DialogHeader>
                <DialogDescription></DialogDescription>
                <div className="flex items-center justify-center">
                    <div className="flex flex-col gap-y-2 items-center justify-center">
                        <ButtonContact onClick={async () => {
                            await navigator.clipboard.writeText("https://bellarhemaagnesia.com");
                            toast("Link copied!")
                        }}>
                            <AiOutlineLink size={20} />
                        </ButtonContact>
                        <p>Copy link</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}