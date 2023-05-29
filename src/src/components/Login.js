import { Box, Typography, Button, Stack, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { useState } from 'react'
import { VisibilityOff,Visibility } from '@mui/icons-material'

export const Login = () => {
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const handleClickShowPassword = () => {setMostrarSenha((show) => !show)}
    const handleEmailChange = (Event) => {setEmail(Event.target.value)}
    const handleSenhaChange = (Event) => {setSenha(Event.target.value)}
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
      <Box sx={{pt:'200px'}} display={'flex'} flexDirection={'column'}>
        <Typography sx={{mb:'40px'}} variant='h3'>Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
          sx={{ m: 1, width: '25ch' }}
          label='Email' 
          type='email' 
          color='warning' 
          value={email} 
          onChange={handleEmailChange}/>

          <FormControl sx={{ m: 1, width: '25ch', color:'warning'}} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password" color='warning'>Senha</InputLabel>
            <OutlinedInput
              color='warning'
              id="outlined-adornment-password"
              type={mostrarSenha ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {mostrarSenha ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Senha"
            />
          </FormControl>
          
        </form>
        <Stack spacing={5} direction={'row'} justifyContent={'center'} marginTop={'2em'}>
          <Button variant='outlined'>Criar Conta</Button>
          <Button variant='contained' color='warning' type='submit'>Entrar</Button>
        </Stack>
      </Box>
    )
}

export default Login;
