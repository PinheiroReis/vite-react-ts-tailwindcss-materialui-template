import { useMutation } from '@tanstack/react-query'
import api from '@/api/api'

interface LoginCredentials {
    username: string
    password: string
}

export default function useLogin() {
    return useMutation({
        mutationFn: (data: LoginCredentials) => api.post('/login/', data),
        onSuccess: () => {
            console.log('Login realizado, cookies de autentificação salvos')
        },
    })
}
