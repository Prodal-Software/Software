import { Box, Typography, Button, Stack } from '@mui/material';
import Formulario from '../components/Formulario';
import { useState } from 'react'

export const Login = () => {
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const handleEmailChange = (Event) => {
      setEmail(Event.target.value)
    }
    const handleSenhaChange = (Event) => {
      setSenha(Event.target.value)
    }
    return (
        <Box alignContent={'center'} marginTop={'25%'}>
            <Typography variant='h2'>Login</Typography>

            <Formulario label='Email' type='email' value={email} color='warning' onChange={handleEmailChange}/>
            <br/>
            <Formulario label='Senha' type='password' value={senha} color='warning' onChange={handleSenhaChange}/>

            <Stack spacing={5} direction={'row'} justifyContent={'center'} marginTop={'2em'}>
              <Button variant='outlined'>Criar Conta</Button>
              <Button variant='contained' color='warning'>Entrar</Button>
            </Stack>
        </Box>
    )
}

export default Login;
