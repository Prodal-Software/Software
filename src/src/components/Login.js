import { Box, Typography, Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';

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
      <Box display={'flex'} flexDirection={'column'} paddingTop={'100px'}>
          <Typography variant='h1' paddingBottom={'50px'}>Login</Typography>
          <form onSubmit={handleSubmit}>
            <TextField 
            label='Email' 
            type='email' 
            value={email}
            color='warning'
            onChange={handleEmailChange}
            />
            <br/><br/>
            <TextField
            label='Senha' 
            type='password' 
            value={senha}
            color='warning'
            onChange={handleSenhaChange}
            />
          </form>
          <Stack 
          spacing={5} 
          direction={'row'} 
          justifyContent={'center'} 
          marginTop={'2em'}>
            <Button variant='outlined'>Criar Conta</Button>
            <Button variant='contained' color='warning' type='submit'>Entrar</Button>
          </Stack>
      </Box>
    )
}

export default Login;
