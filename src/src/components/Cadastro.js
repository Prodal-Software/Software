import { FormHelperText } from "@mui/joy";
import {
  Box,
  Typography,
  Button,
  Stack,
  FormControlLabel,
  Checkbox,
  TextField,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Cadastro = () => {
  const [checkedpassword, setCheckedpassword] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [contato, setContato] = useState("");
  const [senha, setSenha] = useState("");
  const [confsenha, setConfSenha] = useState("");
  var textoDeAjuda = "";

  const navigate = useNavigate();

  const handleNomeChange = (Event) => {
    setNome(Event.target.value);
  };
  const handleEmailChange = (Event) => {
    setEmail(Event.target.value);
  };
  const handleContatoChange = (Event) => {
    setContato(Event.target.value);
  };
  const handleSenhaChange = (Event) => {
    setSenha(Event.target.value);
  };
  const handleConfSenhaChange = (Event) => {
    setConfSenha(Event.target.value);
  };
  const handleCheckboxChange = (Event) => {
    setCheckedpassword(Event.target.checked);
  };
  function handleTextoAjudaChange(mensagem) {
    textoDeAjuda = mensagem;
  }
  const handleLimparCampos = () => {
    setNome("");
    setEmail("");
    setContato("");
    setSenha("");
    setConfSenha("");
  };
  const handleSubmit = () => {
    var campoFaltando = false;

    campoFaltando = nome.length === 0 ? true : false;
    campoFaltando = email.length === 0 ? true : false;
    campoFaltando = contato.length === 0 ? true : false;
    campoFaltando = senha.length === 0 ? true : false;
    campoFaltando = confsenha.length === 0 ? true : false;

    if (campoFaltando) {
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
        name: nome,
        email: email,
        phone: contato,
        password: senha,
      };

      console.log(credenciais);
      
      Swal.fire({
        icon: "success",
        title: "Conta criada com sucesso!",
        text:"Redirecionando para realizar Login",
        showConfirmButton: false,
        timer: 3000,
      });

      navigate('/')
    }
  };
  return (
    <Box marginTop={"3%"} display={"flex"} flexDirection={"column"}>
      <Stack spacing={"20px"} width={"400px"} alignSelf={"center"}>
        <Typography variant="h2" sx={{ mb: "30px" }}>
          Cadastro
        </Typography>

        <TextField
          label="Nome Completo"
          type="name"
          value={nome}
          color="warning"
          onChange={handleNomeChange}
          // helperText={<FormHelperText>Por favor, insira seu nome completo</FormHelperText>}
        />
        <TextField
          label="Email"
          type="email"
          placeholder="exemplo@gmail.com"
          value={email}
          color="warning"
          onChange={handleEmailChange}
          // helperText={<FormHelperText>Por favor, insira seu email de contato</FormHelperText>}
        />
        <TextField
          label="Contato"
          placeholder="DDD XXXXXXXXX"
          type="tel"
          value={contato}
          color="warning"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+55</InputAdornment>
            ),
          }}
          onChange={handleContatoChange}
          helperText={
            <FormHelperText>
              Por favor, digite o DDD e seu numero em seguida
            </FormHelperText>
          }
        />
        <TextField
          label="Senha"
          type={checkedpassword ? "text" : "password"}
          value={senha}
          color="warning"
          onChange={handleSenhaChange}
          onFocus={handleTextoAjudaChange(
            "Digite uma senha com no minimo 8 letras e 1 numero"
          )}
          helperText={<FormHelperText>{textoDeAjuda}</FormHelperText>}
        />
        <TextField
          label="Confirmar Senha"
          type={checkedpassword ? "text" : "password"}
          value={confsenha}
          color="warning"
          onChange={handleConfSenhaChange}
        />
        <FormControlLabel
          label="Mostrar Senha"
          control={
            <Checkbox
              color="warning"
              checked={checkedpassword}
              onChange={handleCheckboxChange}
            ></Checkbox>
          }
        ></FormControlLabel>
      </Stack>
      <Stack
        spacing={5}
        direction={"row"}
        justifyContent={"center"}
        marginTop={"2em"}
      >
        <Button variant="contained" color="error" onClick={() => navigate(-1)}>
          Voltar
        </Button>
        <Button variant="outlined" color="info" onClick={handleLimparCampos}>
          Limpar Campos
        </Button>
        <Button variant="contained" color="warning" onClick={handleSubmit}>
          Criar Conta
        </Button>
      </Stack>
    </Box>
  );
};
export default Cadastro;
