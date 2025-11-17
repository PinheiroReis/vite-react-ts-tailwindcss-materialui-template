import { useMutation } from '@tanstack/react-query'
import api from '@/api/api'

export default function useLogout() {
    return useMutation({
        mutationFn: () => api.post('/logout/'),
    })
}
