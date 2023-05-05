import { Box, Card, CardContent, Typography, IconButton, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const Motorista = () => {
    
    return (
        <Box width={'100%'} marginTop={'5%'} display={'flex'} justifyContent={'center'}>
            <Stack>
                <Typography marginBottom={'30px'} variant='h3'>Motorista</Typography>
                <Card>
                    <CardContent>
                        <Typography variant='h5'>Doador 1</Typography>
                        <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                            <Box width={'30em'} display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'}>
                                <Box>
                                    <Typography>Alimento</Typography>
                                    <Typography>Cenoura</Typography>
                                </Box>
                                <Box>
                                    <Typography>Quantidade</Typography>
                                    <Typography>2 Caixas</Typography>
                                </Box>
                            </Box>
                            <IconButton size='large'>
                                <SearchIcon></SearchIcon>
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card>
            </Stack>
        </Box>
    )
}

export default Motorista;
