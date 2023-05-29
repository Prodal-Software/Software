import { Box, Typography, Button, Stack, FormControlLabel, Checkbox } from '@mui/material';
import Input from '../components/Templates/Input';
import { useState } from 'react'

export const Cadastro = () => {
    const [checkedpassword, setCheckedpassword] = useState(false);
    const [nome, setNome] = useState('');
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [contato,setContato] = useState('');
    

    const handleNomeChange = (Event) => {setNome(Event.target.value)}
    const handleEmailChange = (Event) => {setEmail(Event.target.value)}
    const handleContatoChange = (Event) => {setContato(Event.target.value)}
    const handleSenhaChange = (Event) => {setSenha(Event.target.value)}
    const handleCheckboxChange = (Event) => {setCheckedpassword(Event.target.checked)}
    return (
        <Box alignContent={'center'} marginTop={'15%'}>
            <Typography variant='h2'>Cadastro</Typography>

            <Input label='Nome' type='name' value={nome} color='warning' onChange={handleNomeChange}/>
            <br/>
            <Input label='Email' type='email' value={email} color='warning' onChange={handleEmailChange}/>
            <br/>
            <Input label='Contato' type='tel' value={contato} color='warning' onChange={handleContatoChange}/>
            <br/>
            <Input label='Senha' type={checkedpassword?'text' : 'password'} value={senha} color='warning' onChange={handleSenhaChange}/>
            <br/>
            <FormControlLabel label='Mostrar Senha' control={<Checkbox color='warning' checked={checkedpassword} onChange={handleCheckboxChange}></Checkbox>}></FormControlLabel>

            <Stack spacing={5} direction={'row'} justifyContent={'center'} marginTop={'2em'}>
                <Button variant='outlined' color='error'>Limpar Campos</Button>
                <Button variant='contained' color='warning'>Criar Conta</Button>
            </Stack>
        </Box>
    )
}
export default Cadastro;
