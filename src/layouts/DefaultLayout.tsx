import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { Outlet } from 'react-router'
import ProTip from '@/components/ProTip'

function Copyright() {
    return (
        <Typography
            variant="body2"
            align="center"
            sx={{
                color: 'text.secondary',
            }}
        >
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/PinheiroReis/">
                João Victor Pinheiro Reis
            </Link>{' '}
            {new Date().getFullYear()}.
        </Typography>
    )
}

export default function DefaultLayout() {
    return (
        <Container maxWidth="sm">
            <Outlet />
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                    Material UI Vite example in TypeScript
                </Typography>
                <ProTip />
                <Copyright />
            </Box>
        </Container>
    )
}
