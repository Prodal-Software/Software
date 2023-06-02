import { Box, Typography, Button, Stack, FormHelperText, MenuItem, TextField } from '@mui/material';

import { useState } from 'react'

export const DoarAlimento = () => {
    const [endereco,setEndereco] = useState('');
    const [alimento,setAlimento] = useState('');
    const [quantidade,setQuantidade] = useState('');
    const [tempoColeta,setTempoColeta] = useState('');
    
    const handleEnderecoChange = (Event) => {setEndereco(Event.target.value)}
    const handleAlimentoChange = (Event) => {setAlimento(Event.target.value)}
    const handleQuantidadeChange = (Event) => {setQuantidade(Event.target.value)}
    const handleTempoColetaChange = (Event) => {setTempoColeta(Event.target.value)}
    const handleLimparCampos = () => {
        setEndereco('');
        setAlimento('');
        setQuantidade('');
        setTempoColeta('');
    }

    return (
        <Box 
        display={'flex'} 
        alignItems={'center'} 
        flexDirection={'column'} 
        marginTop={'40px'}
        >
            <Typography 
            variant='h2'
            >Doar Alimento</Typography>

            <TextField 
            label='Endereço' 
            type='address' 
            value={endereco} 
            color='warning' 
            onChange={handleEnderecoChange} 
            helperText={<FormHelperText>Por favor insira seguindo a ordem: Rua, Numero, Bairro, Cidade</FormHelperText>}/>
            
            <Box width={'400px'} marginTop={'2%'} marginX={'15%'} display={'flex'}>
                <TextField fullWidth label='Selecione o alimento' value={alimento} onChange={handleAlimentoChange} select>
                    <MenuItem value='Cenoura'>Cenoura</MenuItem>
                    <MenuItem value='Beterraba'>Beterraba</MenuItem>
                    <MenuItem value='Batata'>Batata</MenuItem>
                    <MenuItem value='Alface'>Alface</MenuItem>
                    <MenuItem value='Berinjela'>Berinjela</MenuItem>
                </TextField>
                <Box width={'40px'}/>
                <TextField fullWidth label='Selecione a quantidade' value={quantidade} onChange={handleQuantidadeChange} select>
                    <MenuItem value='1 Caixa'>1 Caixa</MenuItem>
                    <MenuItem value='2 Caixas'>2 Caixas</MenuItem>
                    <MenuItem value='5 Caixas'>5 Caixas</MenuItem>
                    <MenuItem value='10 Caixas'>10 Caixas</MenuItem>
                    <MenuItem value='20 Caixas'>20 Caixas</MenuItem>
                </TextField>
            </Box>

            <Box width={'400px'} marginTop={'2%'} marginX={'15%'} display={'flex'}>
                <TextField fullWidth label='Tempo para coletar a doação' value={tempoColeta} onChange={handleTempoColetaChange} select helperText='Tempo mínimo é de 1 hora'>
                    <MenuItem value='1 hora'>1 hora</MenuItem>
                    <MenuItem value='1 hora e 30 minutos'>1 hora e 30 minutos</MenuItem>
                    <MenuItem value='2 horas'>2 horas</MenuItem>
                    <MenuItem value='2 horas e 30 minutos'>2 horas e 30 minutos</MenuItem>
                    <MenuItem value='3 horas'>3 horas</MenuItem>
                </TextField>
            </Box>

            <Stack spacing={5} direction={'row'} justifyContent={'center'} marginTop={'2em'}>
                <Button variant='contained' color='error'>Fechar</Button>
                <Button variant='contained' color='warning' onClick={handleLimparCampos}>Limpar Campos</Button>
                <Button variant='contained' color='success'>Confirmar</Button>
            </Stack>

        </Box>
    )
}
export default DoarAlimento;
