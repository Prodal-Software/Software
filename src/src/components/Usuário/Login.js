import {
  Box,
  Typography,
  Button,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Swal from "sweetalert2";
import { useState } from "react";
import { VisibilityOff, Visibility } from "@mui/icons-material";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleClickShowPassword = () => {
    setMostrarSenha((show) => !show);
  };
  const handleEmailChange = (Event) => {
    setEmail(Event.target.value);
  };
  const handleSenhaChange = (Event) => {
    setSenha(Event.target.value);
  };
  const handleSubmit = (e) => {
    // e.preventDefault();

    if (email.length === 0 || senha.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Dados faltando",
        text: "Por favor, preencha todos os campos.",
        confirmButtonText: "OK",
        confirmButtonColor: "red",
      });
    } else {
      // vai ser enviado um POST depois
      let credenciais = {
        email,
        password: senha,
      };

      console.log(credenciais);
    }
  };

  return (
    <Box
      sx={{ pt: "10%" }}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Typography sx={{ mb: "30px" }} variant="h2">
        Login
      </Typography>
      <Box sx={{ width: "400px" }}>
        <form onSubmit={handleSubmit}>
          <Stack direction={"column"}>
            <TextField
              sx={{ m: 1, width: "auto" }}
              label="Email"
              type="email"
              color="warning"
              value={email}
              onChange={handleEmailChange}
            />

            <FormControl
              sx={{
                m: 1,
                width: "385px",
                color: "warning",
                alignSelf: "flex-start",
              }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password" color="warning">
                Senha
              </InputLabel>
              <OutlinedInput
                value={senha}
                color="warning"
                id="outlined-adornment-password"
                type={mostrarSenha ? "text" : "password"}
                onChange={handleSenhaChange}
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
          </Stack>
        </form>
      </Box>
      <Stack
        spacing={5}
        direction={"row"}
        justifyContent={"center"}
        marginTop={"2em"}
      >
        <Button variant="outlined" color="success" href="/cadastro">
          Criar Conta
        </Button>
        <Button
          variant="contained"
          color="warning"
          type="submit"
          onClick={handleSubmit}
        >
          Entrar
        </Button>
      </Stack>
    </Box>
  );
};

export default Login;
