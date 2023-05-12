import { Box, Typography, Stack } from '@mui/material';
import MotoristaCard from '../components/MotoristaCard';

export const Motorista = () => {
    return (
        <Box 
        width={'100%'} 
        height={'100%'} 
        marginTop={'5%'} 
        display={'flex'} 
        justifyContent={'center'}>
            <Stack 
            justifyContent={'space-between'} 
            spacing={5}>
                <Typography 
                color={'white'} 
                marginBottom={'30px'} 
                variant='h3'>
                    Motorista
                </Typography>
                <MotoristaCard 
                doador={'Guilherme Simao'} 
                endereco={'Rua Alfa, 275, Contagem, Minas Gerais'}
                alimento={'Banana'} 
                quantidade={'3 Caixas'} />
            </Stack>
        </Box>
    )
}

export default Motorista;
