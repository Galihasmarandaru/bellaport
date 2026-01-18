import { useNavigate } from 'react-router'

export function useBack() {
    const navigate = useNavigate()

    const handleBack = () => {
        if (window.history.length > 1) {
            navigate(-1)
        } else {
            navigate('/')
        }
    }

    return { handleBack }
}
