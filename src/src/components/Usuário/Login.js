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
import { autenticacao } from "../../service/login";

export const Login = () => {
  // Setters
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  // Handlers
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
    e.preventDefault();

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

      autenticacao(credenciais)
        .then((resp) => {
          // Redirecionar para administracao
          console.log(resp);
          localStorage.removeItem("token");
          localStorage.setItem("token", resp.data.access_token);
        })
        .catch((err) => {
          // Email ou Senhas errados
          Swal.fire({
            icon: "error",
            title: "Falha na autenticação",
            text: "Por favor, verifique se as informações inseridas estão corretas.",
            confirmButtonText: "OK",
            confirmButtonColor: "red",
          });
        });
    }
  };

  return (
    <Box
      sx={{ width: "100%", height: "100%" }}
      m={"20vh 0vh"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography sx={{ fontSize: "5vh", mb: "1vh", color: "orange" }}>
        Login
      </Typography>
      <Box>
        <Stack direction={"column"}>
          <TextField
            sx={{ m: "1vh 0vh", width: "35vh" }}
            label="Email"
            type="email"
            color="warning"
            value={email}
            onChange={handleEmailChange}
          />

          <FormControl
            sx={{
              m: "1vh 0vh",
              color: "warning",
              width: "35vh",
            }}
            variant="outlined"
          >
            <InputLabel htmlFor="senhaInput" color="warning">
              Senha
            </InputLabel>
            <OutlinedInput
              value={senha}
              color="warning"
              id="senhaInput"
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
      </Box>
      <Button color="warning" href="/recuperar-senha">
        <Typography
          sx={{ textDecoration: "underline", textUnderlineOffset: "3px" }}
        >
          Esqueci minha senha
        </Typography>
      </Button>
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
