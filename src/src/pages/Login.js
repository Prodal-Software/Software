import { Box, Typography, Button, Stack } from '@mui/material';
import Input from '../components/Input';
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
    const handleSubmit = (e) => {
      e.preventDefault();

      // vai ser enviado um POST depois
      let credenciais = {
        email,
        password: senha
      };
      
      console.log(credenciais);
    }

    

    return (
        <Box alignContent={'center'} marginTop={'25%'}>
            <Typography variant='h2'>Login</Typography>
            <form onSubmit={handleSubmit}>
              <Input label='Email' type='email' value={email} color='warning' onChange={handleEmailChange}/>
              <br/>
              <Input label='Senha' type='password' value={senha} color='warning' onChange={handleSenhaChange}/>

              <Stack spacing={5} direction={'row'} justifyContent={'center'} marginTop={'2em'}>
                <Button variant='outlined'>Criar Conta</Button>
                <Button variant='contained' color='warning' type='submit'>Entrar</Button>
              </Stack>

            </form>

        </Box>
    )
}

export default Login;
