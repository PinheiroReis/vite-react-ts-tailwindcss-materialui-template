import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Outlet } from 'react-router'
import Copyright from '@/components/Copyright'

export default function DefaultLayout() {
    return (
        <Container maxWidth="sm">
            <Outlet />
            <Box sx={{ my: 4 }}>
                <Copyright />
            </Box>
        </Container>
    )
}
