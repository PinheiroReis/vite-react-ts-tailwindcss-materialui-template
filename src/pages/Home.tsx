import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import useItems from '@/hooks/queries/useItems'

export default function Home() {
    const { data: items, isLoading, error } = useItems()

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'grey.100',
                p: 4,
            }}
        >
            <Paper
                elevation={4}
                sx={{
                    width: '100%',
                    maxWidth: 600,
                    p: 4,
                    borderRadius: 3,
                }}
            >
                <Typography variant="h4" sx={{ mb: 3 }}>
                    Lista de Items
                </Typography>

                {isLoading && (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mt: 4,
                        }}
                    >
                        <CircularProgress />
                    </Box>
                )}

                {error && (
                    <Typography color="error">
                        Ocorreu um erro ao carregar os itens.
                    </Typography>
                )}

                {items && (
                    <List>
                        {items.map((item) => (
                            <ListItem
                                key={item.id}
                                sx={{
                                    bgcolor: 'grey.50',
                                    mb: 1,
                                    borderRadius: 2,
                                    boxShadow: 1,
                                }}
                            >
                                <ListItemText
                                    primary={item.description}
                                    secondary={`ID: ${item.id} | CAT: ${item.categories}`}
                                />
                            </ListItem>
                        ))}
                    </List>
                )}
            </Paper>
        </Box>
    )
}
