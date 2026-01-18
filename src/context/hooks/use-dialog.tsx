import { useState } from 'react'

export function useDialog() {
    const [open, setOpen] = useState(false)

    return {
        open,
        onOpen: () => setOpen(true),
        onClose: () => setOpen(false),
        onOpenChange: setOpen,
    }
}
