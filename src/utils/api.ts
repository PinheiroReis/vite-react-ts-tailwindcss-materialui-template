import axios from 'axios'

const api = axios.create({
    baseURL:
        import.meta.env.VITE_PRIVATE_API_URL ??
        import.meta.env.VITE_PUBLIC_API_URL ??
        import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
})

export default api
